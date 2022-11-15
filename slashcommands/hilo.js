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

    // let cardDeck = ["cardDeck/AD.png", "cardDeck/AC.png", "cardDeck/AH.png", "cardDeck/AS.png"];

    let randomIndex = getRandomCard(cardDeck);
    let randomCard = cardDeck[randomIndex];
    cardDeck = removeCard(cardDeck, randomIndex);
    

    const embed = new MessageEmbed()
        .setTitle("HiLo Card Game")
        .setDescription("React with High or Low emoji to play the game!\n")
        .setColor("#ffffff")
        .addFields({ name: 'Cards remaining in deck: ', value: `${cardDeck.length}` })
        .setTimestamp()

    let msg = await interaction.reply({
        embeds: [embed],
        files: [{ attachment: randomCard }],
        fetchReply: true
    });
    // removes await to see if message reaction happens on own still
    await msg.react('🔼')

    // const filter = (reaction, user) => {reaction.emoji.name === '🔼' && user.id === msg.author.id};
    const filter = (reaction, user) => {reaction.emoji.name === '🔼'};


    const collector = msg.createReactionCollector(filter, {dispose: true});

    collector.on("collect" , async (r, user) => {

        console.log(r.emoji.name);
        randomIndex = getRandomCard(cardDeck);
        randomCard = cardDeck[randomIndex];
        cardDeck = removeCard(cardDeck, randomIndex);
        console.log(randomCard);
        // console.log(cardDeck);
        if (randomCard != undefined) {
            const lastCard = randomCard;
            const embed = new MessageEmbed()
            .addFields({ name: 'Cards remaining in deck: ', value: `${cardDeck.length}`})
            msg.edit({ embeds: [embed], files: [{ attachment: randomCard }] });
        }
        else {
        const embed = new MessageEmbed()
            .addFields({ name: 'Cards remaining in deck: ', value: 'No more cards'})
            msg.edit({ embeds: [embed] });
        }
    })        

    collector.on('end' , r => { 
        
        return;
    });

    // Returns random card index
    function getRandomCard(cardDeck) {
        let index = Math.floor(Math.random() * cardDeck.length)
        return index;
    }
    // Removes card from specified index
    function removeCard(cardDeck, index) {
        cardDeck.splice(index, 1);
        // console.log(index);
        return cardDeck;
        
    }
}


module.exports = {
	name: "hilo",
    description: "HiLo Card Game",
    run
}