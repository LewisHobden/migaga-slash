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
    console.log(ctx.options.user);

    return ctx.options.user ? `Banning, ${ctx.options.user.displayName}!` : "You must select a user to ban.";
  }
}
