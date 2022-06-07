
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

function CalculateCostElec(energy)
{
    var cost = energy * 1.46;
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


var energy=0;

const array = [];

function printEnergy() {
   var x = document.getElementById("Distance").valueAsNumber;
   var y = document.getElementById("FuelEco").valueAsNumber;
   if(x < 0 || y < 0)
   {
       window.alert("Please enter a positive number")
   }
   else {
    var litres = CalculateLitres(x,y);

    document.getElementById("ANS1").innerHTML = litres;

   
    energy = CalculateEnergy(litres);
    document.getElementById("ANS2").innerHTML = energy;
 
    var cost = CalculateCost(litres);
    document.getElementById("ANS3").innerHTML = cost;

    var costElec = CalculateCostElec(energy);
    document.getElementById("ANS4").innerHTML = costElec;

   array[0] = energy;
   array[1]= cost;
   array[2] = costElec;
   

    return energy;

   }




   
  
 
   
   
 }


