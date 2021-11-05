//
// ----------Innovations simulation----------
// [placeholder]
// [placeholder]
//-------------------------------------------
// by Tom
//

const wheatConstant = 10;
// maxday should be 15, 8, 28, 31

function Code(price, wheat, money, day, maxday) {
    maxday=none;
    var choice = 'farm' // return 'farm' or 'sell'
    // Insert code here...
    
    return choice;
}

function simpleBot(price, wheat, money, day, maxday, botnum) {
    var choice = 'farm' // return 'farm' or 'sell'
    // Insert code here...
    if (day%botnum==0&&wheat>0) {
        choice = 'sell';
    }else {
        choice = 'farm';
    }
    return choice;
}

function spedBot(price, wheat, money, day, maxday) {
    var choice = 'farm' // return 'farm' or 'sell'
    // Insert code here...
    if (day==maxday) {
        choice = 'sell';
    } else {
        choice = 'farm';
    }
    return choice;
}

function IncreasePrice(price, day, maxday) {
    if (day%5==0) {
        if (day % 2 == 0) {
            price += 0.5;
        } else {
            price += 0.7;
        }
    } else if (day%8==0) {
        price += 0; 
    } else {
        if (day % 2 == 0 && day % 3 != 0) {
            price += 0.3;
        } else {
            price += 0.1;
        }
    }
    return price;
}

function bot(maxday, botnum=1) {
    var wheat = 10;
    var money = 0;
    var price = 1;
    var income = 0;
    for (var day = 0; day < maxday; day++) {
        console.log(`DEBUG:   Day ${day+1}/${maxday} starts with ${wheat} wheat and ${Math.round(money)} money.`);
        var botChoice = simpleBot(price, wheat, money, day+1, maxday, botnum);
        price = IncreasePrice(price);
        if (botChoice == 'farm') {
            wheat+=10;
            console.log(`INFO:    Bot chose to farm increasing wheat by ${wheatConstant}.`);
        } else if (botChoice == 'sell') {
            if (wheat==0) {
                console.warn(`WARNING: Bot tried to sell 0 wheat.`);
            }
            income=wheat*price;
            money+=income;
            console.log(`INFO:    Bot sold ${wheat} for $${Math.round(price * 10) / 10}/unit earning $${Math.round(income * 10) / 10}.`);
            wheat=0;
        }else {
            console.error(`ERROR:   Bot made choice '${botChoice}' which is not 'farm' or 'sell'.`);
            console.warn(`WARNING: Day skipped since bot made incorrect choice.`);
        }
        console.log(`DEBUG:   Day ${day+1}/${maxday} ends with ${wheat} wheat and $${Math.round(money * 10) / 10} money.`);
    }
    console.log(`INFO:    Game ended on day ${maxday} with bot scoring $${Math.round(money * 10) / 10} and having ${wheat} wheat unsold.`);
    return money;
}

var bestBot=-1;
var bestBotScore = -1;
for (var i = 2; i <= 20; i++) {
    var totalScore=0;
    for (var j = 1; j <= 5; j++) {
        totalScore += bot(j, i);
    }
    console.log(`INFO:    Total score for bot: $${Math.round(totalScore * 10) / 10}.`);
    if (totalScore > bestBotScore) {
        bestBot = i;
        bestBotScore=totalScore;
    }
}
console.log(`INFO:    Best bot step size: ${bestBot} with score ${bestBotScore}.`);

// Best bot with 50 day limit: 11 with $30040
// Best bot with 30 day limit: 9 with $7858
// Best bot with 15 day limit: 5 with $1405
// Best bot with 5 day limit: 2 with $124
