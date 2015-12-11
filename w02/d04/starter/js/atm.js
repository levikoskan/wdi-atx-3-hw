$(function(){
 var checkingBalance = 0;
 var savingsBalance = 0;


 $('#depositChecking').on('click', function(){
   var amount = $('#amountChecking').val();
   updateBalance(amount);

 });

 $('#withdrawChecking').on('click', function(){
   var amount = $('#amountChecking').val();
    if ( amount > (checkingBalance + savingsBalance)) {
    alert('Go network and get a better job');
    }else if ( amount > checkingBalance){
      var overDraft = -(amount - checkingBalance);
      newSavings(overDraft);
    }else{
     updateBalance(-amount);
    }
  });

 $('#depositSavings').on('click', function(){
   var amount = $('#amountSavings').val();
   newSavings(amount);

 });

 $('#withdrawSavings').on('click', function(){
   var amount = $('#amountSavings').val();
   if ( amount > savingsBalance) {
    alert('You are so poor');
    }else{
     newSavings(-amount);
    }
  });

 function updateBalance(input) {
  if (isNaN(input) || input===""){
    alert("hey enter a number dumby");
    return false;
   }
    checkingBalance += parseInt(input);
     $('#checkingBalance').html('$ ' + checkingBalance);
     if (checkingBalance === 0) {
       $('#checkingBalance').addClass('zero');
     } else {
       $('#checkingBalance').removeClass('zero');
     }
 }

 function newSavings(input) {
  if (isNaN(input) || input===""){
    alert("hey enter a number dumby");
    return false;
   }
    savingsBalance += parseInt(input);
     $('#savingsBalance').html('$ ' + savingsBalance);
     if (savingsBalance === 0) {
       $('#savingsBalance').addClass('zero');
     } else {
       $('#savingsBalance').removeClass('zero');
     }
 }



});







