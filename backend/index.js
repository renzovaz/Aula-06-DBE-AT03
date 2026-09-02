const UserService = require('./services/UserService');
const NotificationService = require('./services/NotificationService');
const EmailNotification = require('./notifiers/EmailNotification');
const SMSNotification = require('./notifiers/SMSNotification');

// --- Fluxo com Email ---
const userService = new UserService();
const emailNotifier = new NotificationService(new EmailNotification());

const user1 = userService.createUser('eric@example.com');
emailNotifier.notify(user1.email, `Bem-vindo, usuário #${user1.id}!`);

// --- Fluxo com SMS (basta trocar o notifier injetado, nada mais muda) ---
const smsNotifier = new NotificationService(new SMSNotification());
const user2 = userService.createUser('outro@example.com');
smsNotifier.notify('61999998888', `Bem-vindo, usuário #${user2.id}!`);

// --- Exemplo de validação falhando ---
try {
  userService.createUser('email-invalido');
} catch (err) {
  console.log(`Erro esperado: ${err.message}`);
}
