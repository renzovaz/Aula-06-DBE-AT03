/**
 * UserService (REFATORADO)
 * -----------------------------------------------------------------------
 * ANTES: validava o e-mail E enviava a notificação de boas-vindas
 * diretamente (console.log fixo) — violava SRP e DIP.
 *
 * DEPOIS: a única responsabilidade desta classe é criar/validar o
 * usuário. O envio da notificação foi extraído para o NotificationService,
 * que é injetado de fora (index.js decide qual notifier usar).
 */
class UserService {
  createUser(email) {
    if (!email.includes('@')) throw new Error('Email inválido');

    // Responsabilidade única: apenas cria o usuário.
    // Não sabe nada sobre e-mail, SMS ou qualquer canal de notificação.
    return { id: 1, email };
  }
}

module.exports = UserService;
