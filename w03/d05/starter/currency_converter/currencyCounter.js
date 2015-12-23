var currency = prompt("What currency are you converting from?", " $/£?");
var money = prompt("How much are you converting?", "0.00")

currencyConverter(currency, money);


function currencyConverter(from,num){
    var amount = parseInt(num);
    if ( from === "$"){

        dollarsToPounds(amount);
    } else {
        poundsToDollars(amount);
    }
}



function dollarsToPounds(dollars){
    var newAmount = (dollars / 1.4828);
    newAmount = newAmount.toFixed(2);
    alert("$"+ dollars + " is £" + newAmount);
}

function poundsToDollars(pounds){
     var newAmount = (pounds * 1.4828);
    newAmount = newAmount.toFixed(2);
    alert("£"+ pounds + " is $" + newAmount);
}
