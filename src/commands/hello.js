const { SlashCommand, CommandOptionType } = require('slash-create');

module.exports = class HelloCommand extends SlashCommand {
  constructor(creator) {
    super(creator, {
      name: 'ban',
      description: 'Bans a user.',
      options: [{
        type: CommandOptionType.USER,
        name: 'user',
        description: 'The user to ban'
      }]
    });
  }

  async run(ctx) {
    return ctx.options.user ? `Banning <@${ctx.options.user}>!` : "You must select a user to ban.";
  }
}
