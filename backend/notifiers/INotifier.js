/**
 * INotifier
 * -----------------------------------------------------------------------
 * Este arquivo representa o "contrato" (interface) que toda estratégia de
 * notificação deve seguir. Como o JavaScript puro não possui interfaces
 * nativas, aplicamos o Dependency Inversion Principle (DIP) criando uma
 * classe abstrata: as classes de alto nível (UserService/NotificationService)
 * dependem APENAS deste contrato, nunca de uma implementação concreta
 * (Email, SMS, etc).
 *
 * Qualquer novo canal de notificação (Push, WhatsApp...) só precisa
 * implementar o método send(destination, message).
 */
class INotifier {
  send(destination, message) {
    throw new Error('O método send() deve ser implementado pela subclasse.');
  }
}

module.exports = INotifier;
