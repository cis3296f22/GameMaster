const { MessageEmbed, Message} = require('discord.js')
const run = async (client, interaction) => {

    let cardDeck = ["cardDeck/AD.png", "cardDeck/AC.png", "cardDeck/AH.png", "cardDeck/AS.png", "cardDeck/2D.png", "cardDeck/2C.png", "cardDeck/2H.png",
              "cardDeck/2S.png", "cardDeck/3D.png", "cardDeck/3C.png", "cardDeck/3H.png", "cardDeck/3S.png",
              "cardDeck/4D.png", "cardDeck/4C.png", "cardDeck/4H.png", "cardDeck/4S.png", "cardDeck/5D.png", "cardDeck/5C.png", "cardDeck/5H.png",
              "cardDeck/5S.png", "cardDeck/6D.png", "cardDeck/6C.png", "cardDeck/6H.png", "cardDeck/6S.png",
              "cardDeck/7D.png", "cardDeck/7C.png", "cardDeck/7H.png", "cardDeck/7S.png", "cardDeck/8D.png", "cardDeck/8C.png", "cardDeck/8H.png",
              "cardDeck/8S.png", "cardDeck/9D.png", "cardDeck/9C.png", "cardDeck/9H.png", "cardDeck/9S.png",
              "cardDeck/10D.png", "cardDeck/10C.png", "cardDeck/10H.png",
              "cardDeck/10S.png", "cardDeck/JD.png", "cardDeck/JC.png", "cardDeck/JH.png", "cardDeck/JS.png", "cardDeck/QD.png", "cardDeck/QC.png",
              "cardDeck/QH.png", "cardDeck/QS.png",
              "cardDeck/KD.png", "cardDeck/KC.png", "cardDeck/KH.png", "cardDeck/KS.png"];

    // Setup first card pulled from deck
    let randomIndex = getRandomCard(cardDeck);
    let randomCard = cardDeck[randomIndex];
    cardDeck = removeCard(cardDeck, randomIndex);
    let firstCardValue = getCardValue(randomCard);
    let firstCard = randomCard;

    // Record Tracker
    let record = [0,0,0];

    // Start game embed sent
    const embed = new MessageEmbed()
        .setTitle("HiLo Card Game")
        .setDescription("React with High or Low emoji to play the game!\n")
        .setColor("#ffffff")
        .addFields({ name: 'Cards remaining in deck: ', value: `${cardDeck.length}` })
        .addFields({ name: 'Card Value: ', value: `${firstCardValue}` })
        .addFields({ name: 'Game active for ', value: '10 minutes' })
        .setTimestamp()

    let msg = await interaction.reply({
        embeds: [embed],
        files: [{ attachment: firstCard }],
        fetchReply: true
    });
    
    await msg.react('🔼');
    await msg.react('🔽');

    // Ensures reaction is not collected when player hasn't selected emoji
    await new Promise((resolve, reject) => {
        setTimeout(()   => {
            resolve()
        }, 2000);
    })

    const Filter = (reaction, user) => {reaction.emoji.name === '🔼' && user.id === msg.author.id};

    // Collects reactions for 10 minutes
    const collector = msg.createReactionCollector({ Filter, time: (5 * 60000) });

    // Collect reactions and edit embed
    collector.on("collect" , async (r, user) => {
        // Get second card value
        let hiClicked;
        randomIndex = getRandomCard(cardDeck);
        randomCard = cardDeck[randomIndex];
        cardDeck = removeCard(cardDeck, randomIndex);
        // End of Deck
        if (randomCard === undefined) {
            return;
        }

        let secondCardValue = getCardValue(randomCard);
        let result;
        
        // Check for Hi or Lo
        if (r.emoji.name === '🔼') {
            hiClicked = 'Hi';
            
            if (firstCardValue < secondCardValue) {
                // You Won
                result = "You Won"
                record[0] += 1;
            }
            else if (firstCardValue === secondCardValue) {
                // You pushed
                result = "You Pushed"
                record[2] += 1;
            }
            else {
                // You Lost
                result = "You Lost"
                record[1] += 1;
            }
        
        }
        else if (r.emoji.name === '🔽') {
            hiClicked = 'Lo';

            if (firstCardValue < secondCardValue) {
                // You lost
                result = "You Lost"
                record[1] += 1;

            }
            else if (firstCardValue === secondCardValue) {
                // You pushed
                result = "You Pushed"
                record[2] += 1;

            }
            else {
                // You Won
                result = "You Won"
                record[0] += 1;
            }
        }
        // No more cards left send embed
        if (cardDeck.length === 0) {
            const embed = new MessageEmbed()
                .setTitle('No more cards left. Thank you for playing')
                .setDescription('/hilo to play again')
                .addFields({ name: 'Final Record: ', value: `${record[0]} , ${record[1]} , ${record[2]}`})
            msg.edit({ embeds: [embed] });
            return;
        }
        // There are cards left
        if (randomCard != undefined) {
            const embed = new MessageEmbed()
                .setDescription(result)
                .addFields({ name: 'You selected: ', value: `${hiClicked}`})
                .addFields({ name: 'Card Values: ', value: `${firstCardValue} vs ${secondCardValue}`})
                .addFields({ name: 'Cards remaining in deck: ', value: `${cardDeck.length}`})
                .addFields({ name: 'Current Record: ', value: `${record[0]} , ${record[1]} , ${record[2]}`})
            msg.edit({ embeds: [embed], files: [{ attachment: randomCard }] });
        }
        // Set second card value to first card value
        firstCardValue = secondCardValue;

    });        
    // Collection is over send embed
    collector.on('end' , r => { 
        const embed = new MessageEmbed()
            .setTitle('Time is up. Thank you for playing')
            .setDescription('/hilo to play again')
            .addFields({ name: 'Final Record: ', value: `${record[0]} , ${record[1]} , ${record[2]}`})
            msg.edit({ embeds: [embed] });
        return;
    });   
}
// Returns random card index
function getRandomCard(cardDeck) {
    let index = Math.floor(Math.random() * cardDeck.length)
    return index;
}
// Removes card from specified index
function removeCard(cardDeck, index) {
    cardDeck.splice(index, 1);
    return cardDeck;
    
}
// Parses string value to determine card value
function getCardValue(card) {
    let ar=card.split("/");
    ar = ar[1].split(".");
    let value = ar[0].split();
    value = value['0'];
    
    // We don't have a 10
    if (value['2'] === undefined) {
        value = value['0'];
        switch(value) {
            case '2':
                value = 2;
                break;
            case '3':
                value = 3;
                break;
            case '4':
                value = 4;
                break;
            case '5':
                value = 5;
                break;
            case '6':
                value = 6;
                break;
            case '7':
                value = 7;
                break;
            case '8':
                value = 8;
                break;
            case '9':
                value = 9;
                break;
            case 'J':
                value = 11;
                break;
            case 'Q':
                value = 12;
                break;
            case 'K':
                value = 13;
                break;
            case 'A':
                value = 14;
                break;
            default:
              // code block
        }
        return value;
    }
    // We have a 10
    value = 10;
    return value;
}

module.exports = {
    name: "hilo",
    description: "HiLo Card Game",
    run,
    getRandomCard,
    removeCard,
    getCardValue
}