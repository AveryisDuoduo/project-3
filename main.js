document.addEventListener("DOMContentLoaded", function() {
    let colorButtons = document.querySelectorAll('.color-buttons');
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            let colorValue = this.textContent.trim(); 
            localStorage.setItem("color", colorValue);
            updateResults();
        });
    });

    let shapeButtons = document.querySelectorAll('.shape-button');
    shapeButtons.forEach(button => {
        button.addEventListener('click', function() {
            let shapeValue = this.textContent.trim(); 
            localStorage.setItem("shape", shapeValue);
            updateResults();
        });
    });

    updateResults();
});

function updateResults() {
    let colorValue = localStorage.getItem("color");
    let shapeValue = localStorage.getItem("shape");

    let results = document.getElementById("results");

    if (colorValue && shapeValue && results) {
        let points = calculatePoints(colorValue, shapeValue);
        let text = "";

        if (points < 25) {
            text = "<p>You are passionate and action-oriented in what you do. Your strengths are leadership and determination!</p><p>You are very goal-oriented and can stay focused until you achieve a goal that satisfies you.</p>";
        } else if (points >= 25 && points < 50) {
            text = "<p>You like to keep things organized and in their proper place. You have a gift for agility and time management.</p><p> You most likely have plans and itineraries for everything from travel to life. You pay attention to details, and your organization needs them.</p>";
        } else if (points >= 50 && points < 75) {
            text = "<p>Your strengths lie in harmony and keeping the peace. You are happiest when you are with people or in nature.</p><p>You enjoy social gatherings and time where you can interact with friends and family. You have a strong connection with music and may even be gifted in this area.</p>";
        } else if (points >= 75 && points < 100) {
            text = "<p>You have an incredibly creative imagination. Brainstorming and problem solving are your talents.</p><p>You can picture things perfectly in your mind. You'll be working on many projects simultaneously, although you may not always complete them. You often see things as they are, not as they are.</p>";
        } else {
            text = "<p>You have an incredibly creative imagination. Brainstorming and problem solving are your talents.</p><p>You can picture things perfectly in your mind. You'll be working on many projects simultaneously, although you may not always complete them. You often see things as they are, not as they are.</p>";
        }

        results.innerHTML = text;
    }
}


function calculatePoints(colorValue, shapeValue) {
    let points = 0;
    
    switch(colorValue) {
        case "red":
            points += 20;
            break;
        case "blue":
            points += 30;
            break;
        case "green":
            points += 60;
            break;
        case "purple":
            points += 90;
            break;
        default:
            points += 0;
    }

    switch(shapeValue) {
        case "Triangle":
            points += 1;
            break;
        case "Square":
            points += 2;
            break;
        case "Circle":
            points += 3;
            break;
        case "Irregular shape":
            points += 4;
            break;
        default:
            points += 0;
    }

    return points;
}


var colors = new Array(
    [62,35,255],
    [60,255,60],
    [255,35,98],
    [45,175,230],
    [255,0,255],
    [255,128,0]);
  
  var step = 0;
  var colorIndices = [0,1,2,3];
  
  //transition speed
  var gradientSpeed = 0.002;
  
  function updateGradient()
  {
    
    if ( $===undefined ) return;
    
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
  
   $('#gradient').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
  }
  setInterval(updateGradient,10);