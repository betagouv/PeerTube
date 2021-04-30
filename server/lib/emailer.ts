import { createTransport, Transporter } from 'nodemailer'
import { isTestInstance } from '../helpers/core-utils'
import { bunyanLogger, logger } from '../helpers/logger'
import { CONFIG } from '../initializers/config'
import { UserModel } from '../models/account/user'
import { VideoModel } from '../models/video/video'
import { JobQueue } from './job-queue'
import { EmailPayload } from './job-queue/handlers/email'
import { readFileSync } from 'fs-extra'
import { VideoCommentModel } from '../models/video/video-comment'
import { VideoAbuseModel } from '../models/video/video-abuse'
import { VideoBlacklistModel } from '../models/video/video-blacklist'
import { VideoImportModel } from '../models/video/video-import'
import { ActorFollowModel } from '../models/activitypub/actor-follow'
import { WEBSERVER } from '../initializers/constants'

type SendEmailOptions = {
  to: string[]
  subject: string
  text: string

  fromDisplayName?: string
  replyTo?: string
}

function patchLinks(text: string): string {
  text = text.replace("https://peertube.devoirs-faits", "https://devoirs-faits")
  return text
}

class Emailer {

  private static instance: Emailer
  private initialized = false
  private transporter: Transporter

  private constructor () {}

  init () {
    // Already initialized
    if (this.initialized === true) return
    this.initialized = true

    if (Emailer.isEnabled()) {
      logger.info('Using %s:%s as SMTP server.', CONFIG.SMTP.HOSTNAME, CONFIG.SMTP.PORT)

      let tls
      if (CONFIG.SMTP.CA_FILE) {
        tls = {
          ca: [ readFileSync(CONFIG.SMTP.CA_FILE) ]
        }
      }

      let auth
      if (CONFIG.SMTP.USERNAME && CONFIG.SMTP.PASSWORD) {
        auth = {
          user: CONFIG.SMTP.USERNAME,
          pass: CONFIG.SMTP.PASSWORD
        }
      }

      this.transporter = createTransport({
        host: CONFIG.SMTP.HOSTNAME,
        port: CONFIG.SMTP.PORT,
        secure: CONFIG.SMTP.TLS,
        debug: CONFIG.LOG.LEVEL === 'debug',
        logger: bunyanLogger as any,
        ignoreTLS: CONFIG.SMTP.DISABLE_STARTTLS,
        tls,
        auth
      })
    } else {
      if (!isTestInstance()) {
        logger.error('Cannot use SMTP server because of lack of configuration. PeerTube will not be able to send mails!')
      }
    }
  }

  static isEnabled () {
    return !!CONFIG.SMTP.HOSTNAME && !!CONFIG.SMTP.PORT
  }

  async checkConnectionOrDie () {
    if (!this.transporter) return

    logger.info('Testing SMTP server...')

    try {
      const success = await this.transporter.verify()
      if (success !== true) this.dieOnConnectionFailure()

      logger.info('Successfully connected to SMTP server.')
    } catch (err) {
      this.dieOnConnectionFailure(err)
    }
  }

  addNewVideoFromSubscriberNotification (to: string[], video: VideoModel) {
    const channelName = video.VideoChannel.getDisplayName()
    const videoUrl = WEBSERVER.URL + video.getWatchStaticPath()

    const text = `Hi dear user,\n\n` +
      `Your subscription ${channelName} just published a new video: ${video.name}` +
      `\n\n` +
      `You can view it on ${videoUrl} ` +
      `\n\n` +
      `Cheers,\n` +
      `${CONFIG.EMAIL.BODY.SIGNATURE}`

    const emailPayload: EmailPayload = {
      to,
      subject: CONFIG.EMAIL.SUBJECT.PREFIX + channelName + ' just published a new video',
      text
    }

    return JobQueue.Instance.createJob({ type: 'email', payload: emailPayload })
  }

  addNewFollowNotification (to: string[], actorFollow: ActorFollowModel, followType: 'account' | 'channel') {
    const followerName = actorFollow.ActorFollower.Account.getDisplayName()
    const followingName = (actorFollow.ActorFollowing.VideoChannel || actorFollow.ActorFollowing.Account).getDisplayName()

    const text = `Hi dear user,\n\n` +
      `Your ${followType} ${followingName} has a new subscriber: ${followerName}` +
      `\n\n` +
      `Cheers,\n` +
      `${CONFIG.EMAIL.BODY.SIGNATURE}`

    const emailPayload: EmailPayload = {
      to,
      subject: CONFIG.EMAIL.SUBJECT.PREFIX + 'New follower on your channel ' + followingName,
      text
    }

    return JobQueue.Instance.createJob({ type: 'email', payload: emailPayload })
  }

  addNewInstanceFollowerNotification (to: string[], actorFollow: ActorFollowModel) {
    const awaitingApproval = actorFollow.state === 'pending' ? ' awaiting manual approval.' : ''

    const text = `Hi dear admin,\n\n` +
      `Your instance has a new follower: ${actorFollow.ActorFollower.url}${awaitingApproval}` +
      `\n\n` +
      `Cheers,\n` +
      `${CONFIG.EMAIL.BODY.SIGNATURE}`

    const emailPayload: EmailPayload = {
      to,
      subject: CONFIG.EMAIL.SUBJECT.PREFIX + 'New instance follower',
      text
    }

    return JobQueue.Instance.createJob({ type: 'email', payload: emailPayload })
  }

  myVideoPublishedNotification (to: string[], video: VideoModel) {
    const videoUrl = WEBSERVER.URL + video.getWatchStaticPath()

    const text = `Bonjour,\n\n` +
      `Votre vidéo ${video.name} est maintenant publiée.` +
      `\n\n` +
      `Vous pouvez la voir à l'adresse ${videoUrl} ` +
      `\n\n` +
      `À bientôt,\n` +
      `L'équipe Devoirs Faits.`

    const emailPayload: EmailPayload = {
      to,
      subject: `[Devoirs Faits] Votre vidéo ${video.name} a été publiée`,
      text
    }

    return JobQueue.Instance.createJob({ type: 'email', payload: emailPayload })
  }

  myVideoImportSuccessNotification (to: string[], videoImport: VideoImportModel) {
    const videoUrl = WEBSERVER.URL + videoImport.Video.getWatchStaticPath()

    const text = `Hi dear user,\n\n` +
      `Your video import ${videoImport.getTargetIdentifier()} is finished.` +
      `\n\n` +
      `You can view the imported video on ${videoUrl} ` +
      `\n\n` +
      `Cheers,\n` +
      `${CONFIG.EMAIL.BODY.SIGNATURE}`

    const emailPayload: EmailPayload = {
      to,
      subject: CONFIG.EMAIL.SUBJECT.PREFIX + `Your video import ${videoImport.getTargetIdentifier()} is finished`,
      text
    }

    return JobQueue.Instance.createJob({ type: 'email', payload: emailPayload })
  }

  myVideoImportErrorNotification (to: string[], videoImport: VideoImportModel) {
    const importUrl = WEBSERVER.URL + '/my-account/video-imports'

    const text = `Hi dear user,\n\n` +
      `Your video import ${videoImport.getTargetIdentifier()} encountered an error.` +
      `\n\n` +
      `See your videos import dashboard for more information: ${importUrl}` +
      `\n\n` +
      `Cheers,\n` +
      `${CONFIG.EMAIL.BODY.SIGNATURE}`

    const emailPayload: EmailPayload = {
      to,
      subject: CONFIG.EMAIL.SUBJECT.PREFIX + `Your video import ${videoImport.getTargetIdentifier()} encountered an error`,
      text
    }

    return JobQueue.Instance.createJob({ type: 'email', payload: emailPayload })
  }

  addNewCommentOnMyVideoNotification (to: string[], comment: VideoCommentModel) {
    const accountName = comment.Account.getDisplayName()
    const video = comment.Video
    const commentUrl = WEBSERVER.URL + comment.getCommentStaticPath()

    const text = `Bonjour,\n\n` +
      `Un nouveau commentaire a été posté par ${accountName} sur votre vidéo ${video.name}` +
      `\n\n` +
      `Vous pouvez le consulter ici: ${commentUrl} ` +
      `\n\n` +
      `À bientôt,\n` +
      `L'équipe Devoirs Faits.`

    const emailPayload: EmailPayload = {
      to,
      subject: '[Devoirs Faits] Nouveau commentaire sur votre vidéo ' + video.name,
      text
    }

    return JobQueue.Instance.createJob({ type: 'email', payload: emailPayload })
  }

  addNewCommentMentionNotification (to: string[], comment: VideoCommentModel) {
    const accountName = comment.Account.getDisplayName()
    const video = comment.Video
    const commentUrl = WEBSERVER.URL + comment.getCommentStaticPath()

    const text = `Hi dear user,\n\n` +
      `${accountName} mentioned you on video ${video.name}` +
      `\n\n` +
      `You can view the comment on ${commentUrl} ` +
      `\n\n` +
      `Cheers,\n` +
      `${CONFIG.EMAIL.BODY.SIGNATURE}`

    const emailPayload: EmailPayload = {
      to,
      subject: CONFIG.EMAIL.SUBJECT.PREFIX + 'Mention on video ' + video.name,
      text
    }

    return JobQueue.Instance.createJob({ type: 'email', payload: emailPayload })
  }

  addVideoAbuseModeratorsNotification (to: string[], videoAbuse: VideoAbuseModel) {
    const videoUrl = WEBSERVER.URL + videoAbuse.Video.getWatchStaticPath()

    const text = `Hi,\n\n` +
      `${WEBSERVER.HOST} received an abuse for the following video ${videoUrl}\n\n` +
      `Cheers,\n` +
      `${CONFIG.EMAIL.BODY.SIGNATURE}`

    const emailPayload: EmailPayload = {
      to,
      subject: CONFIG.EMAIL.SUBJECT.PREFIX + 'Received a video abuse',
      text
    }

    return JobQueue.Instance.createJob({ type: 'email', payload: emailPayload })
  }

  addVideoAutoBlacklistModeratorsNotification (to: string[], video: VideoModel) {
    const VIDEO_AUTO_BLACKLIST_URL = WEBSERVER.URL + '/admin/moderation/video-auto-blacklist/list'
    const videoUrl = WEBSERVER.URL + video.getWatchStaticPath()

    const text = `Bonjour,\n\n` +
      `Une nouvelle vidéo a été ajoutée et est en attente de modération.` +
      `\n\n` +
      `Pour la voir: ${videoUrl}` +
      `\n\n` +
      `Tous les vidéos à modérer sont visibles ici: ${VIDEO_AUTO_BLACKLIST_URL}` +
      `\n\n` +
      `À bientôt,\n` +
      `L'équipe Devoirs Faits.`

    const emailPayload: EmailPayload = {
      to,
      subject: '[Devoirs Faits] Nouvelle vidéo en attente de modération',
      text
    }

    return JobQueue.Instance.createJob({ type: 'email', payload: emailPayload })
  }

  addNewUserRegistrationNotification (to: string[], user: UserModel) {
    const text = `Bonjour,\n\n` +
      `L'utilisateur ${user.username} s'est enregistré.\n\n` +
      `À bientôt,\n` +
      `L'équipe Devoirs Faits.`

    const emailPayload: EmailPayload = {
      to,
      subject: '[Devoirs Faits] Nouvel utilisateur enregistré ' + WEBSERVER.HOST,
      text
    }

    return JobQueue.Instance.createJob({ type: 'email', payload: emailPayload })
  }

  addVideoBlacklistNotification (to: string[], videoBlacklist: VideoBlacklistModel) {
    const videoName = videoBlacklist.Video.name
    const videoUrl = WEBSERVER.URL + videoBlacklist.Video.getWatchStaticPath()

    const reasonString = videoBlacklist.reason ? ` for the following reason: ${videoBlacklist.reason}` : ''
    const blockedString = `Your video ${videoName} (${videoUrl} on ${WEBSERVER.HOST} has been blacklisted${reasonString}.`

    const text = 'Hi,\n\n' +
      blockedString +
      '\n\n' +
      'Cheers,\n' +
      `${CONFIG.EMAIL.BODY.SIGNATURE}`

    const emailPayload: EmailPayload = {
      to,
      subject: CONFIG.EMAIL.SUBJECT.PREFIX + `Video ${videoName} blacklisted`,
      text
    }

    return JobQueue.Instance.createJob({ type: 'email', payload: emailPayload })
  }

  addVideoUnblacklistNotification (to: string[], video: VideoModel) {
    const videoUrl = WEBSERVER.URL + video.getWatchStaticPath()

    const text = 'Bonjour,\n\n' +
      `Votre vidéo "${video.name}" (${videoUrl}) a été publiée.` +
      '\n\n' +
      'À bientôt,\n' +
      `L'équipe Devoirs Faits.`

    const emailPayload: EmailPayload = {
      to,
      subject: `[Devoirs Faits] Vidéo ${video.name} publiée`,
      text
    }

    return JobQueue.Instance.createJob({ type: 'email', payload: emailPayload })
  }

  addPasswordResetEmailJob (to: string, resetPasswordUrl: string) {
    const text = `Bonjour,\n\n` +
      `Une demande de renouvellement de mot de passe pour votre compte ${to} a été demandée.\n\n` +
      `Si la requête ne vient pas de vous, merci d'ignorer ce message.\n\n` +
      `Sinon, voici le lien pour continuer la procédure: ${resetPasswordUrl}\n\n` +
      `À bientôt,\n` +
      `L'équipe Devoirs Faits.`

    const emailPayload: EmailPayload = {
      to: [ to ],
      subject: '[Devoirs Faits] Demande de renouvellement de mot de passe',
      text
    }

    return JobQueue.Instance.createJob({ type: 'email', payload: emailPayload })
  }

  addVerifyEmailJob (to: string, verifyEmailUrl: string) {
    const text = `Bienvenue sur Devoirs Faits,\n\n` +
      `Pour commencer à poster des vidéos ou des commentaires, vous devez confirmer votre courriel. ` +
      `Merci de cliquer sur le lien suivant: ${verifyEmailUrl}\n\n` +
      `Si vous ne vous êtes pas inscrit sur Devoirs Faits, merci d'ignorer ce message.\n\n` +
      `À bientôt,\n` +
      `L'équipe Devoirs Faits.`

    const emailPayload: EmailPayload = {
      to: [ to ],
      subject: '[Devoirs Faits] Confirmez votre courriel',
      text
    }

    return JobQueue.Instance.createJob({ type: 'email', payload: emailPayload })
  }

  addUserBlockJob (user: UserModel, blocked: boolean, reason?: string) {
    const reasonString = reason ? ` for the following reason: ${reason}` : ''
    const blockedWord = blocked ? 'blocked' : 'unblocked'
    const blockedString = `Your account ${user.username} on ${WEBSERVER.HOST} has been ${blockedWord}${reasonString}.`

    const text = 'Hi,\n\n' +
      blockedString +
      '\n\n' +
      'Cheers,\n' +
      `${CONFIG.EMAIL.BODY.SIGNATURE}`

    const to = user.email
    const emailPayload: EmailPayload = {
      to: [ to ],
      subject: CONFIG.EMAIL.SUBJECT.PREFIX + 'Account ' + blockedWord,
      text
    }

    return JobQueue.Instance.createJob({ type: 'email', payload: emailPayload })
  }

  addContactFormJob (fromEmail: string, fromName: string, subject: string, body: string) {
    const text = 'Hello dear admin,\n\n' +
      fromName + ' sent you a message' +
      '\n\n---------------------------------------\n\n' +
      body +
      '\n\n---------------------------------------\n\n' +
      'Cheers,\n' +
      'PeerTube.'

    const emailPayload: EmailPayload = {
      fromDisplayName: fromEmail,
      replyTo: fromEmail,
      to: [ CONFIG.ADMIN.EMAIL ],
      subject: CONFIG.EMAIL.SUBJECT.PREFIX + subject,
      text
    }

    return JobQueue.Instance.createJob({ type: 'email', payload: emailPayload })
  }

  sendMail (options: EmailPayload) {
    if (!Emailer.isEnabled()) {
      throw new Error('Cannot send mail because SMTP is not configured.')
    }

    const fromDisplayName = options.fromDisplayName
      ? options.fromDisplayName
      : WEBSERVER.HOST

    return this.transporter.sendMail({
      from: `"${fromDisplayName}" <${CONFIG.SMTP.FROM_ADDRESS}>`,
      replyTo: options.replyTo,
      to: options.to.join(','),
      subject: options.subject,
      text: patchLinks(options.text)
    })
  }

  private dieOnConnectionFailure (err?: Error) {
    logger.error('Failed to connect to SMTP %s:%d.', CONFIG.SMTP.HOSTNAME, CONFIG.SMTP.PORT, { err })
    process.exit(-1)
  }

  static get Instance () {
    return this.instance || (this.instance = new this())
  }
}

// ---------------------------------------------------------------------------

export {
  Emailer,
  SendEmailOptions
}
