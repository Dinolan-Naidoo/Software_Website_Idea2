function CalculateLitres(distance, fuelE)
{
   var temp = (distance * fuelE)/100;

   var litersUsed = parseFloat(temp.toFixed(2));

   return litersUsed;

}

function CalculatePetrolEnergy(litres)
{
   var temp = litres * 8.9;
   var energyUsed =parseFloat(temp.toFixed(2));

   return energyUsed;
}

function CalculateDieselEnergy(litres)
{
   var temp = litres * 10;
   var energyUsed =parseFloat(temp.toFixed(2));

   return energyUsed;
}

function CalculateCostPetrol95(litres)
{
    var temp = litres * 24.17;
    var cost = parseFloat(temp.toFixed(2));
    return cost;
}
function CalculateCostPetrol93(litres)
{
    var temp = litres * 23.94;
    var cost = parseFloat(temp.toFixed(2));
    return cost;
}

function CalculateCostDiesel(litres)
{
    var temp = litres * 23.23;
    var cost = parseFloat(temp.toFixed(2));
    return cost;
}

function CalculateCostElec(energy)
{
    var temp = energy * 1.46;
    var cost = parseFloat(temp.toFixed(2));
    
    return cost;
}



function Test()
{
    var l1 = CalculateLitres(1, 1);            //ANSWER should = 0.01
    var l2 = CalculateLitres(10,10);           //ANSWER should = 1
    var l3 = CalculateLitres(100, 10);         //ANSWER should = 10
    var l4 = CalculateLitres(1500, 5.5);       //ANSWER should = 82.5
    var l5 = CalculateLitres(25000, 12.5);     //ANSWER should = 3125

    document.getElementById("L1").innerHTML = l1;
    document.getElementById("L2").innerHTML = l2;
    document.getElementById("L3").innerHTML = l3;
    document.getElementById("L4").innerHTML = l4;
    document.getElementById("L5").innerHTML = l5;

    ////////////////////////////////////////////////////////////////////////////

    var p1 = CalculatePetrolEnergy(1);         //ANSWER should = 8.9
    var p2 = CalculatePetrolEnergy(10);        //ANSWER should = 89  
    var p3 = CalculatePetrolEnergy(150);       //ANSWER should = 1335
    var p4 = CalculatePetrolEnergy(1700);      //ANSWER should = 1530
    var p5 = CalculatePetrolEnergy(20000);     //ANSWER should = 178000

    document.getElementById("P1").innerHTML = p1;
    document.getElementById("P2").innerHTML = p2;
    document.getElementById("P3").innerHTML = p3;
    document.getElementById("P4").innerHTML = p4;
    document.getElementById("P5").innerHTML = p5;

    ////////////////////////////////////////////////////////////////////////////

    var d1 = CalculateDieselEnergy(1);         //ANSWER should = 10
    var d2 = CalculateDieselEnergy(10);        //ANSWER should = 100
    var d3 = CalculateDieselEnergy(150);       //ANSWER should = 1500
    var d4 = CalculateDieselEnergy(1700);      //ANSWER should = 17000
    var d5 = CalculateDieselEnergy(20000);     //ANSWER should = 200 000

    document.getElementById("D1").innerHTML = d1;
    document.getElementById("D2").innerHTML = d2;
    document.getElementById("D3").innerHTML = d3;
    document.getElementById("D4").innerHTML = d4;
    document.getElementById("D5").innerHTML = d5;

    ////////////////////////////////////////////////////////////////////////////


    var c95_1 = CalculateCostPetrol95(1);       //ANSWER should = 24.17
    var c95_2 = CalculateCostPetrol95(50);      //ANSWER should = 1208.5
    var c95_3 = CalculateCostPetrol95(275);     //ANSWER should = 6646.75
    var c95_4 = CalculateCostPetrol95(1235);    //ANSWER should = 29849.95
    var c95_5 = CalculateCostPetrol95(25000);   //ANSWER should = 604250

    document.getElementById("p95_1").innerHTML = c95_1;
    document.getElementById("p95_2").innerHTML = c95_2;
    document.getElementById("p95_3").innerHTML = c95_3;
    document.getElementById("p95_4").innerHTML = c95_4;
    document.getElementById("p95_5").innerHTML = c95_5;

    ////////////////////////////////////////////////////////////////////////////

    var c95_1 = CalculateCostPetrol95(1);       //ANSWER should = 24.17
    var c95_2 = CalculateCostPetrol95(50);      //ANSWER should = 1208.5
    var c95_3 = CalculateCostPetrol95(275);     //ANSWER should = 6646.75
    var c95_4 = CalculateCostPetrol95(1235);    //ANSWER should = 29849.95
    var c95_5 = CalculateCostPetrol95(25000);   //ANSWER should = 604250

    document.getElementById("p95_1").innerHTML = c95_1;
    document.getElementById("p95_2").innerHTML = c95_2;
    document.getElementById("p95_3").innerHTML = c95_3;
    document.getElementById("p95_4").innerHTML = c95_4;
    document.getElementById("p95_5").innerHTML = c95_5;

    ////////////////////////////////////////////////////////////////////////////

    var c93_1 = CalculateCostPetrol93(1);       //ANSWER should = 23.94
    var c93_2 = CalculateCostPetrol93(50);      //ANSWER should = 1197
    var c93_3 = CalculateCostPetrol93(275);     //ANSWER should = 6583.5
    var c93_4 = CalculateCostPetrol93(1235);    //ANSWER should = 29565.9
    var c93_5 = CalculateCostPetrol93(25000);   //ANSWER should = 598500

    document.getElementById("p93_1").innerHTML = c93_1;
    document.getElementById("p93_2").innerHTML = c93_2;
    document.getElementById("p93_3").innerHTML = c93_3;
    document.getElementById("p93_4").innerHTML = c93_4;
    document.getElementById("p93_5").innerHTML = c93_5;

    ////////////////////////////////////////////////////////////////////////////

    var cd_1 = CalculateCostDiesel(1);         //ANSWER should = 23.23
    var cd_2 = CalculateCostDiesel(15);        //ANSWER should = 348.45
    var cd_3 = CalculateCostDiesel(275);       //ANSWER should = 6388.25
    var cd_4 = CalculateCostDiesel(1235);      //ANSWER should = 28689.05
    var cd_5 = CalculateCostDiesel(25000);     //ANSWER should = 580750


    document.getElementById("cd_1").innerHTML = cd_1;
    document.getElementById("cd_2").innerHTML = cd_2;
    document.getElementById("cd_3").innerHTML = cd_3;
    document.getElementById("cd_4").innerHTML = cd_4;
    document.getElementById("cd_5").innerHTML = cd_5;

    //////////////////////////////////////////////////////////////////////////

    //Cost electric for petrol = diesel 

    var cE_1 = CalculateCostElec(1);        //ANSWER should = 1.46
    var cE_2 = CalculateCostElec(15);       //ANSWER should = 21.9
    var cE_3 = CalculateCostElec(275);      //ANSWER should = 401.5
    var cE_4 = CalculateCostElec(1235);     //ANSWER should = 1803.1
    var cE_5 = CalculateCostElec(25000);    //ANSWER should = 36500

    document.getElementById("cE_1").innerHTML = cE_1;
    document.getElementById("cE_2").innerHTML = cE_2;
    document.getElementById("cE_3").innerHTML = cE_3;
    document.getElementById("cE_4").innerHTML = cE_4;
    document.getElementById("cE_5").innerHTML = cE_5;




}

