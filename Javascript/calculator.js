
function CalculateLitres(distance, fuelE)
{
   var litersUsed = (distance * fuelE)/100;

   return litersUsed;


}

function CalculateEnergy(litres)
{
   var energyUsed = litres * 8.9;

   return energyUsed;
}

function CalculateCost(litres)
{
    var cost = litres * 21.465;
    return cost;
}

function CalculateCost1(litres)
{
    var cost = litres * 23.956;
    return cost;
}


document.addEventListener('DOMContentLoaded',() => {
    document
    .getElementById('FT')
    .addEventListener('input',handleSelect);
});
let choices =[];
function handleSelect(ev)
{
    let select = ev.target;
    console.log(select.value);
    

   
      choices.push(select.selectedOptions[0].value);
    

    console.log(choices);

   
   
}



   


function printEnergy() {
   var x = document.getElementById("Distance").valueAsNumber;
   var y = document.getElementById("FuelEco").valueAsNumber;
   var litres = CalculateLitres(x,y);

    document.getElementById("ANS1").innerHTML = litres;

   
    var energy = CalculateEnergy(litres);
    document.getElementById("ANS2").innerHTML = energy;
 
    var cost = CalculateCost(litres);
    document.getElementById("ANS3").innerHTML = cost;
 
   
   
 }



