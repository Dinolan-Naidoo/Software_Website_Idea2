
function CalculateLitres(distance, fuelE)
{
   var temp = (distance * fuelE)/100;

   var litersUsed = parseFloat(temp.toFixed(2));

   return litersUsed;


}

function CalculateEnergy(litres)
{
   var temp = litres * 8.9;
   var energyUsed =parseFloat(temp.toFixed(2));

   return energyUsed;
}

function CalculateCostPetrol(litres)
{
    var temp = litres * 21.63;
    var cost = parseFloat(temp.toFixed(2));
    return cost;
}

function CalculateCostDiesel(litres)
{
    var temp = litres * 23.956;
    var cost = parseFloat(temp.toFixed(2));
    return cost;
}

function CalculateCostElec(energy)
{
    var temp = energy * 1.46;
    var cost = parseFloat(temp.toFixed(2));
    
    return cost;
}


function getSelectedValue()
{
    var selectedValue = document.getElementById("list").value;
    //console.log(selectedValue);
    return selectedValue;
}






function printEnergy() {

    //document.getElementById("myCanvas").disabled=true;
   var x = document.getElementById("Distance").valueAsNumber;
   var y = document.getElementById("FuelEco").valueAsNumber;

   
   if(x < 0 || y < 0)
   {
       window.alert("Please enter a positive number")
   }
   else 
   {

  
   
    var litres = CalculateLitres(x,y);

    document.getElementById("ANS1").innerHTML = litres;

   
    var energy = CalculateEnergy(litres);
    document.getElementById("ANS2").innerHTML = energy;

    var val = getSelectedValue();

    if(val == "petrol")
    {
        var cost = CalculateCostPetrol(litres);
        document.getElementById("ANS3").innerHTML = cost;
    }
    else if(val == "diesel"){
        var cost = CalculateCostDiesel(litres);
        document.getElementById("ANS3").innerHTML = cost;

    }
 
    var costElec = CalculateCostElec(energy);
    document.getElementById("ANS4").innerHTML = costElec;

    var myCanvas = document.getElementById("myCanvas");
myCanvas.width = 300;
myCanvas.height = 300;
   
var ctx = myCanvas.getContext("2d");
 
function drawLine(ctx, startX, startY, endX, endY,color){
    ctx.save();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
    ctx.restore();
}
 
function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color){
    ctx.save();
    ctx.fillStyle=color;
    ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
    ctx.restore();
}
console.log(cost);
 
var elements = {
    "Energy": energy,
    "Fuel Cost": cost,
    "Electric vehicle Cost": costElec,
};
 
var Barchart = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
  
    this.draw = function(){
        var maxValue = 0;
        for (var categ in this.options.data){
            maxValue = Math.max(maxValue,this.options.data[categ]);
        }
        var canvasActualHeight = this.canvas.height - this.options.padding * 2;
        var canvasActualWidth = this.canvas.width - this.options.padding * 2;
 
        //drawing the grid lines
        var gridValue = 0;
        while (gridValue <= maxValue){
            var gridY = canvasActualHeight * (1 - gridValue/maxValue) + this.options.padding;
            drawLine(
                this.ctx,
                0,
                gridY,
                this.canvas.width,
                gridY,
                this.options.gridColor
            );
             
            //writing grid markers
            this.ctx.save();
            this.ctx.fillStyle = this.options.gridColor;
            this.ctx.textBaseline="bottom"; 
            this.ctx.font = "bold 10px Arial";
            this.ctx.fillText(gridValue, 10,gridY - 2);
            this.ctx.restore();
 
            gridValue+=this.options.gridScale;
        }      
  
        //drawing the bars
         var barIndex = 0;

            var numberOfBars = Object.keys(this.options.data).length;
            var barSize = (canvasActualWidth)/numberOfBars;
     
            for (categ in this.options.data){
                var val = this.options.data[categ];
                var barHeight = Math.round( canvasActualHeight * val/maxValue) ;
                drawBar(
                    this.ctx,
                    this.options.padding + barIndex * barSize,
                    this.canvas.height - barHeight - this.options.padding,
                    barSize,
                    barHeight,
                    this.colors[barIndex%this.colors.length]
                    
                );
     
                barIndex++;
            }
         
    
            
        
        
 
        //drawing series name
        this.ctx.save();
        this.ctx.textBaseline="bottom";
        this.ctx.textAlign="center";
        this.ctx.fillStyle = "#000000";
        this.ctx.font = "bold 14px Arial";
        this.ctx.fillText(this.options.seriesName, this.canvas.width/2,this.canvas.height);
        this.ctx.restore();  
         
        //draw legend
        
        
        var legend = document.querySelector("legend[for='myCanvas']");
            
        var ul = document.createElement("ul");
        legend.append(ul);
        for (categ in this.options.data){
            var li = document.createElement("li");
            li.style.listStyle = "none";
            li.style.borderLeft = "20px solid "+this.colors[barIndex%this.colors.length];
            li.style.padding = "5px";
            li.textContent = categ;
            
                ul.append(li);
                barIndex++;
            
            
        }
        
        console.log(barIndex);
        
        
    }
}
 
 
 
    var myBarchart = new Barchart(
        {
            canvas:myCanvas,
            seriesName:"Energy Calculations",
            padding:20,
            gridScale:5,
            gridColor:"#eeeeee",
            data:elements,
            colors:["#00e8e8","#00c71b", "#8b00c2"]
        }
    );
    myBarchart.draw();

   // document.getElementById("B1").disabled = true;
       
   
    
    

   }
  
 
   
   
 }






