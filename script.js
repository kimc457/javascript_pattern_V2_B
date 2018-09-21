// var myArray = [
// 			["ONE", "red"],
// 			["TWO", "blue"],
// 			["THREE", "red"],
// 			["FOUR", "blue"],
//   		["FIVE", "red"],
// 		];



// var counter = 0;

//   for (var i = 0; i < 50; i++) {

    
//     // I WANT THE FOR LOOP TO GO 50 TIMES 
//     // AND WHEN i HAS REACHED THE LENGTH OF MY ARRAY I WANT IT TO START BACK AT 0
//     // WE USE i AS THE COUNTER AND USE SOMETHING ELSE TO ITERATE THROUGH THE ARRAY --> EXTERNAL VARIABLES OUTSIDE OF THE COUTNER
    
//     // var arrayValue = myArray[counter]; --> only the first element in the array works and doesnt change
    
//     // SINCE RESETING i  WOULD PRODUCE AN ENDLESS LOOP
//     // WE NEED TO INTRODUCE AN EXTERNAL COUNTER INDEPENDENT OF THE FOR LOOPS WHICH CAN BE RESET EVERY ARRAY LENGTH 
    
    
    
// 			var element = document.createElement("div")
// 			element.className = "newHeader"

// 			var arrayValue = myArray[counter];
// 			var arrayValueOne = arrayValue[1];


// 			var style = "";

// 			if (typeof arrayValueOne == "number" ) {
// 				style = 'style="font-size: ' + arrayValueOne + 'px;"'
// 			}else{
// 				style = 'class="' + arrayValueOne + '"'
// 			}

// 			element.innerHTML = `

// 				<h1 ${style} >${arrayValue[0]}</h1>

// 			`				
			
// 			document.getElementById("wrapper").appendChild(element)
    
//     counter++;
//     // counter = counter + 1 ^ same thing
//     // wants a reset for when the counter reaches the end of array length 
    
//     if(counter >= myArray.length) {
//       counter = 0;
//     }

// 		}








// !!!! OPTION FOUR -- INCREASE AND DECREASE  small to 6vw to decrease to 1 then increase again
// not just increment it up

var circleDiameter = 0;
// start with a direction -- at one point it will be false = count up, true = count down
var direction= false;
var totalLength =420; 



for (var i = 0; i < totalLength; i++) {
  
  var container = document.createElement("div");
  
  container.className = "container";

  
  if(i % 15 == 0) {
    if (direction) {
      //if direction is true, change it to false
      direction = false;
    }
    else {
      //if direction is flase, change it to true
      direction = true;
      circleDiameter = 1;
    }
  }
// when we want to reset circle diameter, right now it is set to every increament at 5 it changes to 1
  
   
// two separate if statements
// tells the diameter to increase and decrease
   if(!direction) {
     // if direction = false
     circleDiameter--;
  }
  else {
    // if direction = true
    circleDiameter++;
  }
  
  
  //COLORRRRR

  var progress = i/ (totalLength - 1);
  var red= 255 - (progress * 0);
  var blue = progress * 255;
  var color = "rgb("+ blue +", 255, " + red +")";
  // rgb-- red, blue, green (255,255,255) --> can create an array of a string of colors or oscillate between two colors
  // 255 is the total amount we wanted to subtract, can change to like 50 to get to a diff color  // (progress*50);
  
  //rgb(81, 202, 255) blue
  //rgb(193, 59, 44) red

   var percentage = circleDiameter / 5;
  
   // i % any number will bring a different design/pattern
  
  container.innerHTML = `
    <div style= "opacity:${percentage}; background-color:${color}; width:${circleDiameter}vw; height:${circleDiameter}vw;" class="circle"> </div>
  `
  
  document.getElementById("wrapper").appendChild(container)
  
}