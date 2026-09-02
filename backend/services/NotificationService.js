/**
 * NotificationService
 * -----------------------------------------------------------------------
 * Aplica o Dependency Inversion Principle (DIP): a classe não conhece
 * EmailNotification nem SMSNotification diretamente — ela recebe (via
 * injeção no construtor) qualquer objeto que implemente o contrato
 * INotifier (possui um método send()).
 *
 * Também aplica o Single Responsibility Principle (SRP): a única
 * responsabilidade desta classe é orquestrar o envio de notificações,
 * nada de validação de usuário ou regra de negócio de cadastro.
 */
class NotificationService {
  constructor(notifier) {
    this.notifier = notifier; // Depende da abstração, não da implementação
  }

  notify(destination, message) {
    return this.notifier.send(destination, message);
  }
}

module.exports = NotificationService;
