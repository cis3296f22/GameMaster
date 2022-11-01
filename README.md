# GameMaster (Games with Friends!)
GameMaster is a discord bot that allows users to play smaller board games such as Tic Tac Toe (and hopefully connect four). The goal of GameMaster is to provide a hub where users can play multiple games with friends using Discord. User's can customize settings to their liking for an optimal experience.

Put here a short paragraph describing your project. 
Adding an screenshot or a mockup of your application in action would be nice.  


![](images/ttt.png)

# How to add the bot to your server

- Click the invite Link: https://discord.com/api/oauth2/authorize?client_id=1032689897573732483&permissions=8&scope=bot%20applications.commands

- Use the dropdown to select the server you would like to add GameMaster in.

- Click 'Continue'

# How to run
- Clone the repository using the green code button at the top of the web page.
- If you are not familiar with github and cloning repositories please watch this link: https://www.youtube.com/watch?v=q9wc7hUrW8U

Start the bot with `node index.js` OR `nodemon index.js` and it should be online!

You now need to deploy the slash commands. Use the `?deploy` command to deploy all of the commands to Discord.

![](images/deploy.png)

Now you can do `/ping` and should get a response!

To start a tic tac toe game, type `/ttt` and click the buttons! 

# How to contribute

### How to build

- Clone this github repository. If you are unfamiliar with how to clone a github repository please watch this short video: https://www.youtube.com/watch?v=q9wc7hUrW8U

### How to Run

If you want to run this yourself, you will need:

-   [Discord Bot Application](https://discord.com/developers)
-   [NodeJS](https://nodejs.org) OR
-   [Nodemon](https://www.npmjs.com/package/nodemon) 

Invite the bot to your server. To get the permissions to create the slash commands, you will need to grant it special permissions. Put your bot's client ID here and grant it permission:

`https://discord.com/api/oauth2/authorize?client_id=<---CLIENT ID HERE--->&scope=applications.commands`

Once you have sucessfully invited the bot to your server, you need to install the npm dependencies.

Run `npm install` to install all of the dependencies

![](images/npminstall.png)
Now you need to put your bot token in a `.env` file. In the project directory create a file called `.env`. Then you can add your token and optionally if you choose you can add the  guild ID of the server you want the bot to be in to the .env file also as shown below.
```
TOKEN=<TOKEN>
GUILD=<GUILD ID>
```
Start the bot with `node index.js` OR `nodemon index.js` and it should be online!

You now need to deploy the slash commands. Use the `?deploy` command to deploy all of the commands to Discord.

![](images/deploy.png)

Now you can do `/ping` and should get a response!

To start a tic tac toe game, type `/ttt` and click the buttons!

