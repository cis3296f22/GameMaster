const { MessageEmbed, Collector, MessageReaction } = require("discord.js");
const run = async (client, interaction) => {
    const cardVal = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const cardSuit = ["C", "D", "H", "S"];
    const suitSymbols = ["♣️", "♦️", "❤️", "♠️"];
    const playerMoves = ["⏫", "🛑", "⏬"];
    let deck = [];
    let playerHand = [];
    let dealerHand = [];
    let playerScore = 0;
    let dealerScore = 0;
    let playerAce = 0;
    let dealerAce = 0;
    let dealerHiddenCard;
    let playerCanHit = true;
    let dealerCanHit = true;

    //Fill deck
    for (let i = 0; i < cardSuit.length; i++) {
        for (let j = 0; j < cardVal.length; j++) {
            deck.push(cardVal[j] + cardSuit[i]);
        }
    }

    function shuffleDeck() {
        for (let i = 0; i < deck.length; i++) {
            let j = Math.floor(Math.random() * 52);
            let temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
    }

    function getValue(card) {
        console.log(card);
        if (isNaN(card.charAt(0)) || card.charAt(0) == "1") { //Find A,J,Q,K
            if (card.charAt(0) == "A") {
                return 11;
            }
            return 10;
        }
        return parseInt(card[0]);
    }

    function checkAce(card) {
        if (card.charAt(0) == "A") {
            return 1;
        }
        return 0;
    }

    function dealerCard() {
        let cardVal = deck.pop();
        let addSuitEmoji;
        if (cardVal.endsWith('C')) addSuitEmoji = cardVal.replace("C", suitSymbols[0]);
        if (cardVal.endsWith('D')) addSuitEmoji = cardVal.replace("D", suitSymbols[1]);
        if (cardVal.endsWith('H')) addSuitEmoji = cardVal.replace("H", suitSymbols[2]);
        if (cardVal.endsWith('S')) addSuitEmoji = cardVal.replace("S", suitSymbols[3]);
        dealerHand.push(addSuitEmoji);
        dealerAce += checkAce(cardVal);
        return getValue(cardVal);
    }

    function playerCard() {
        let cardVal = deck.pop();
        let addSuitEmoji;
        if (cardVal.endsWith('C')) addSuitEmoji = cardVal.replace("C", suitSymbols[0]);
        if (cardVal.endsWith('D')) addSuitEmoji = cardVal.replace("D", suitSymbols[1]);
        if (cardVal.endsWith('H')) addSuitEmoji = cardVal.replace("H", suitSymbols[2]);
        if (cardVal.endsWith('S')) addSuitEmoji = cardVal.replace("S", suitSymbols[3]);
        playerHand.push(addSuitEmoji);
        playerAce += checkAce(cardVal);
        return getValue(cardVal);
    }

    function reduceAce(score, aceCount) {
        while (score > 21 && aceCount > 0) {
            score -= 10;
            aceCount -= 1;
        }
        return score;
    }

    //Start game here
    shuffleDeck();
    dealerHiddenCard = deck.pop();
    //Display blank card
    dealerScore += getValue(dealerHiddenCard);
    dealerAce += checkAce(dealerHiddenCard);
    dealerScore += dealerCard();
    //Display card
    //Dealer has 2 cards
    playerScore += playerCard();
    playerScore += playerCard();
    //Player has 2 cards
    let gameEmbed = new MessageEmbed()
        .setTitle('Blackjack')
        .setColor(0x999999)
        .setDescription('⏫: HIT 🛑: STAY ⏬:DOUBLEDOWN')
        .addFields(
            { name: 'Dealer\'s Cards', value: '| * | | ' + dealerHand.pop() + ' |', inline: true },
            { name: 'Dealer\'s Score', value: (dealerScore - getValue(dealerHiddenCard)).toString(), inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Player\'s Cards', value: '| ' + playerHand.pop() + ' | | ' + playerHand.pop() + ' |', inline: true },
            { name: 'Player\'s Score', value: playerScore.toString(), inline: true }
        );
    let msg = await interaction.reply({
        embeds: [gameEmbed],
        fetchReply: true
    });
    await msg.react(playerMoves[0]);
    await msg.react(playerMoves[1]);
    await msg.react(playerMoves[2]);
    if (playerScore == 21 && dealerScore != 21) {
        const gameEmbed = new MessageEmbed()
            .setDescription("Blackjack! You win!")

        msg.edit({ embeds: [gameEmbed] });
    } else if (playerScore == 21 && dealerScore == 21) {
        const gameEmbed = new MessageEmbed()
            .setDescription("It's a tie.")

        msg.edit({ embeds: [gameEmbed] });
    }
    //No blackjack on first deal, hit or stay

    while (playerCanHit || dealerCanHit) {
        //Get hit or stay
        if (playerCanHit) {
            let playerHasReacted = false;
            while (!playerHasReacted) {

                const filter = (reaction, user) => {
                    return reaction.emoji.name === '🛑' && user.id == interaction.user.id
                };

                await msg
                    .awaitReactions({ filter, time: 20000, errors: ["time"] })
                    .then((collected) => {
                        playerHasReacted = true;
                        playerCanHit = false;
                    })
                    .catch((collected) => { console.log("timed out"); });
            }
            if (playerCanHit) {
                playerScore += playerCard();
                if (playerScore > 21 && playerAce > 0) {
                    playerScore = reduceAce(playerScore, playerAce);
                    if (playerScore > 21) {
                        //Bust
                        console.log("bust");
                        break;
                    }
                } else {
                    //Bust
                    console.log("bust");
                    break;
                }
            }
        }
        if (dealerCanHit) {
            if (dealerScore < 17) {
                dealerScore += dealerCard();
                if (dealerScore > 21 && dealerAce > 0) {
                    dealerScore = reduceAce(dealerScore, dealerAce);
                    if (dealerScore > 21 && playerCanHit) {
                        //Player wins
                        console.log("win");
                        break;
                    }
                }
            }
            else {
                dealerCanHit = false;
            }
        }
    }

    //If exit, means neither dealer nor player can hit, check win conditions
}

module.exports = {
    name: "blackjack",
    description: "Blackjack Card Game",
    run
}