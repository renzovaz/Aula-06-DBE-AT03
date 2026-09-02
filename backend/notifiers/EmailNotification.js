const INotifier = require('./INotifier');

/**
 * EmailNotification
 * -----------------------------------------------------------------------
 * Implementação concreta do contrato INotifier.
 * Responsabilidade única: enviar (simular o envio de) um e-mail.
 */
class EmailNotification extends INotifier {
  send(email, message) {
    // Em um cenário real aqui entraria a integração com Nodemailer,
    // SendGrid, SES, etc. Por ora, apenas simulamos o envio.
    console.log(`[EMAIL] Enviando para ${email}: ${message}`);
    return { channel: 'email', to: email, message, status: 'sent' };
  }
}

module.exports = EmailNotification;
