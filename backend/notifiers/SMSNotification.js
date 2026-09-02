const INotifier = require('./INotifier');

/**
 * SMSNotification
 * -----------------------------------------------------------------------
 * Implementação concreta do contrato INotifier.
 * Responsabilidade única: enviar (simular o envio de) um SMS.
 */
class SMSNotification extends INotifier {
  send(phone, message) {
    // Em um cenário real aqui entraria a integração com Twilio, Zenvia, etc.
    console.log(`[SMS] Enviando para ${phone}: ${message}`);
    return { channel: 'sms', to: phone, message, status: 'sent' };
  }
}

module.exports = SMSNotification;
