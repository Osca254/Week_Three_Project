var shades =["A","B","C","D","E"];
var getMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
for(i=0;i<=shades.length;i++){
    console.log(shades)
    
}
var totalMilkProduced = prompt('Enter amount of milk produced');
var amountPerLiter= prompt('Enter your amount');
function totalProduction (){
    totalMilkProduced+amountPerLiter;
}
totalProduction();
var selling_price = prompt("Enter 45");
var time= prompt("Enter number of weeks");
function incomeOverTime(selling_price,time){
    var selling_price= Number(document.getElementById('gud').value);
    var time = Number(document.getElementById('amount').value);
    document.getElementById('kambona').innerHTML=selling_price*time;
}
document.getElementById('kambona').addEventListener('click', incomeOverTime);
incomeOverTime(selling_price,time);


