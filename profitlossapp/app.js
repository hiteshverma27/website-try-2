var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-button');
var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitLoss(ip, qty, curr);
}

function  calculateProfitLoss(initial, quantity, current){
    if(initial > current){
        var loss = (initial - current)*quantity;
        var lossPer = (loss/initial)*100;



        showOutput(`Your loss is ${loss} and the loss percentage is ${lossPer.toFixed(2)}%`);
    }else if (current>initial){
        var profit = (current-initial)*quantity;
        var profitPer = (profit/initial)*100;

        showOutput(`Your profit is ${profit}  and the profit percentage is ${profitPer.toFixed(2)}%`);

    } else{
        showOutput(`No profit no loss, but you are awesome!!`);
    }
}

function showOutput(message){
    outputBox.innerHTML=message    
    }