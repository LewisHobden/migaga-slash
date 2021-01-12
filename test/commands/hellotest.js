var assert = require('assert');
var BanCommand = require('../../src/commands/hello'); 
const { SlashCreator } = require('slash-create');

const creator = new SlashCreator({
    applicationID: "test",
    publicKey: "",
    token: "",
    serverPort: 8020
  });

describe('/ban Command', function() {
    var banCommand = new BanCommand(creator);


    it('Should return a message based on provided arguments.',async function() {
        var response = await banCommand.run({
            options: {
                user: 1234
            }
        });

        assert.strictEqual(response,'Banning <@1234>!');
    });

    it('Should require a user to be provided.',async function() {
        var response = await banCommand.run({
            options: {
                
            }
        });

        assert.strictEqual(response,'You must select a user to ban.');
    });
});
