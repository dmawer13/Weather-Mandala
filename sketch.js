var weather;

//Put City name here then run program:

var cityInput = "Buffalo";

let sel;
let selCity;


//function askWeather() {
//    loadJSON('api.openweathermap.org/data/2.5/weather?q=' + 'cityInput' + '&APPID=40223864a797a6dcafe07148fc944088&units=imperial', gotData);
//}

function setup() {

let url = 'http://api.openweathermap.org/data/2.5/weather?q=Buffalo&APPID=40223864a797a6dcafe07148fc944088&units=imperial';

    function askWeather() {
    loadJSON(url, gotData, 'jsonp');
}

function gotData(data) {
    weather = data;
}

createCanvas(1000, 1000);
setInterval(askWeather, 1000);     
rectMode(CENTER);
    
sel = createSelect();
sel.option('Buffalo');
sel.option('Dakar');
sel.option('Sydney');
//sel.option('Sydney');
sel.changed(changeCity);
}



function tempVarsAndRanges() {
    var temp = weather.main.temp;

    var c1Neg10 = color(43, 44, 124);

    var c2Neg10 = color(100, 44, 124);
    var c3Neg10 = color(43, 97, 125);

    var c1Neg10to10 = color(80, 181, 231); //darkest blue
    var c2Neg10to10 = color(44, 111, 125); // purple
    var c3Neg10to10 = color(57, 83, 164); //steel blue

    var c110to25 = color(80, 181, 231); //lighter blue
    var c210to25 = color(66, 108, 180);
    var c310to25 = color(126, 165, 215);

    var c125to40 = color(118, 196, 192);
    var c225to40 = color(120, 191, 234);
    var c325to40 = color(164, 208, 101);

    var c140to55 = color(111, 190, 68);
    var c240to55 = color(218, 225, 64);
    var c340to55 = color(241, 234, 29);

    var c155to70 = color(251, 229, 0);
    var c255to70 = color(188, 216, 95);
    var c355to70 = color(253, 182, 20);

    var c170to85 = color(225, 76, 37);
    var c270to85 = color(243, 114, 33);
    var c370to85 = color(253, 185, 19);

    var c185plus = color(180, 61, 37);
    var c285plus = color(201, 94, 40);
    var c385plus = color(116, 22, 19);

    if (temp < -10) {
        var colorOne = c1Neg10;
        var colorTwo = c2Neg10;
        var colorThree = c3Neg10;
    }

    if (temp >= -10 && temp < 10) {
        var colorOne = c1Neg10to10;
        var colorTwo = c2Neg10to10;
        var colorThree = c3Neg10to10;
    }

    if (temp >= 10 && temp < 25) {
        var colorOne = c110to25;
        var colorTwo = c210to25;
        var colorThree = c310to25;
    }

    if (temp >= 25 && temp < 40) {
        var colorOne = c125to40;
        var colorTwo = c225to40;
        var colorThree = c325to40;
    }

    if (temp >= 40 && temp < 55) {
        var colorOne = c140to55;
        var colorTwo = c240to55;
        var colorThree = c340to55;
    }

    if (temp >= 55 && temp < 70) {
        var colorOne = c155to70;
        var colorTwo = c255to70;
        var colorThree = c355to70;
    }

    if (temp >= 70 && temp < 85) {
        var colorOne = c170to85;
        var colorTwo = c270to85;
        var colorThree = c370to85;
    }

    if (temp >= 85) {
        var colorOne = c185plus;
        var colorTwo = c285plus;
        var colorThree = c385plus;
    }
}


function draw() {
    background(200);
    fill(0);
    noStroke();
    text('Current time: ' + hour() + ':' + minute() + ':' + second(), 5, height - 25);

    if (weather) {
        fill(0);
        text('' + cityInput, 5, height - 40);
                text('Current temp: ' + weather.main.temp + ' F', 5, height - 10);
        text('Current wind direction: ' + weather.wind.deg + ' deg', width - 200, height - 25);
        text('Current wind speed: ' + weather.wind.speed + ' m/h', width - 200, height - 10);
    } //weather online proof Buffalo   


    //All Drawing goes here
    if (weather) {

        var utcTime = weather.dt;
        var myDate = new Date(utcTime * 1000);

//        text('Current time in ' + cityInput + ':' +
//      myDate.toGMTString() + "<br>" + myDate.toLocaleString(), 5, height - 10);


        var temp = weather.main.temp;
        var wind = weather.wind.speed;
        var windDir = weather.wind.deg;
        var cloud = weather.weather.id;

        var c1Neg10 = color(43, 44, 124);
        var c2Neg10 = color(100, 44, 124);
        var c3Neg10 = color(43, 97, 125);

        var c1Neg10to10 = color(80, 181, 231); //darkest blue
        var c2Neg10to10 = color(44, 111, 125); // purple
        var c3Neg10to10 = color(57, 83, 164); //steel blue

        var c110to25 = color(80, 181, 231); //lighter blue
        var c210to25 = color(66, 108, 180);
        var c310to25 = color(126, 165, 215);

        var c125to40 = color(118, 196, 192);
        var c225to40 = color(120, 191, 234);
        var c325to40 = color(164, 208, 101);

        var c140to55 = color(111, 190, 68);
        var c240to55 = color(218, 225, 64);
        var c340to55 = color(241, 234, 29);

        var c155to70 = color(251, 229, 0);
        var c255to70 = color(188, 216, 95);
        var c355to70 = color(253, 182, 20);

        var c170to85 = color(225, 76, 37);
        var c270to85 = color(243, 114, 33);
        var c370to85 = color(253, 185, 19);

        var c185plus = color(180, 61, 37);
        var c285plus = color(201, 94, 40);
        var c385plus = color(116, 22, 19);

        if (temp < -10) {
            var colorOne = c1Neg10;
            var colorTwo = c2Neg10;
            var colorThree = c3Neg10;
        }

        if (temp >= -10 && temp < 10) {
            var colorOne = c1Neg10to10;
            var colorTwo = c2Neg10to10;
            var colorThree = c3Neg10to10;
        }

        if (temp >= 10 && temp < 25) {
            var colorOne = c110to25;
            var colorTwo = c210to25;
            var colorThree = c310to25;
        }

        if (temp >= 25 && temp < 40) {
            var colorOne = c125to40;
            var colorTwo = c225to40;
            var colorThree = c325to40;
        }

        if (temp >= 40 && temp < 55) {
            var colorOne = c140to55;
            var colorTwo = c240to55;
            var colorThree = c340to55;
        }

        if (temp >= 55 && temp < 70) {
            var colorOne = c155to70;
            var colorTwo = c255to70;
            var colorThree = c355to70;
        }

        if (temp >= 70 && temp < 85) {
            var colorOne = c170to85;
            var colorTwo = c270to85;
            var colorThree = c370to85;
        }

        if (temp >= 85) {
            var colorOne = c185plus;
            var colorTwo = c285plus;
            var colorThree = c385plus;
        }

        var timeOfDay = map(hour(), 0, 24, 255, 0);

        push();
        translate(width / 2, height / 2);

        strokeWeight(10);
        stroke(0);

        fill(colorOne);
        rect(0, 0, 870, 870, 15);
        fill(colorTwo);
        rect(0, 0, 800, 800, 10);

        fill(colorThree);
        rect(0, 0, 750, 750, 10);

        fill(timeOfDay);
        ellipse(0, 0, 950, 950);

        fill(colorOne);
        ellipse(0, 0, 900, 900)

        fill(timeOfDay);
        ellipse(0, 0, 800, 800);

        fill(colorTwo);
        ellipse(0, 0, 750, 750);

        fill(timeOfDay);
        ellipse(0, 0, 600, 600);

        fill(colorThree);
        ellipse(0, 0, 550, 550);

        //      function drawWind() {
        //        var windSpeed = map(wind, 0, 20, 0, 500);
        //        var windColor = map(wind, 0, 20, )
        //        push();
        //        rotate(radians(windDir)); //var windDir declared above as wind direction direct from API
        //        fill(255);
        //        beginShape();
        //        vertex(0, 0);
        //        vertex(-20, 20);
        //        vertex(0, windSpeed);
        //        vertex(20, 20);
        //        endShape(CLOSE);
        //        pop();
        //    }

        push();
        rotate(radians(windDir));
        for (var i = 0; i < 4; i++) {
            var windSpeedPattern = map(wind, 0, 20, 200, 480);
            fill(colorOne);
            rotate(TWO_PI * 1 / 4);
            beginShape();
            vertex(0, 0, );
            vertex(-40, 220);
            vertex(0, windSpeedPattern);
            vertex(40, 220);
            endShape(CLOSE);
        }
        pop();

        push();
        rotate(radians(windDir + 30));
        for (var i = 0; i < 4; i++) {
            fill(colorTwo);
            rotate(TWO_PI * 1 / 4);
            beginShape();
            vertex(0, 0, );
            vertex(-40, 220);
            vertex(0, windSpeedPattern);
            vertex(40, 220);
            endShape(CLOSE);
        }
        pop();

        push();
        rotate(radians(windDir + 60));
        for (var i = 0; i < 4; i++) {
            fill(colorThree);
            rotate(TWO_PI * 1 / 4);
            beginShape();
            vertex(0, 0, );
            vertex(-40, 220);
            vertex(0, windSpeedPattern);
            vertex(40, 220);
            endShape(CLOSE);
        }
        pop();

        push();
        rotate(radians(windDir));
        fill(255);
        beginShape();
        vertex(0, 0, );
        vertex(-40, 220);
        vertex(0, windSpeedPattern);
        vertex(40, 220);
        endShape(CLOSE);
        pop();

        fill(timeOfDay);
        ellipse(0, 0, 450, 450);


        pop();

        drawClock();
        drawWind();

        //        
        //        if()
        //        ellipse(0, 0, 50, 50);

    }






    function scrap() { //    translate(width / 2, height / 2);
        //    for (var i = 0; i < 15; i++) { // i < is the number of shapes you want repeated, must be mirrored in the rotate function below.
        //        push();
        //        fill(255);
        //        rotate(TWO_PI * i / 15);
        //        drawTriangles();
        //        pop();
        //    } //triangles
        //
        //
        //    for (var i = 0; i < 15; i++) { // i < is the number of shapes you want repeated, must be mirrored in the rotate function below.
        //        push();
        //        fill(255, 0, 0);
        //        rotate(degrees(30));
        //        rotate(TWO_PI * i / 15);
        //        drawTrianglesTwo();
        //        pop();
        //    } //more triangles
        //
        //    push();
        //    fill(0, 0, 0, 100);
        //    noStroke();
        //    ellipse(0, 0, 360, 360);
        //    pop(); }}
    }

    function drawClock() {
        var h = hour();
        var m = minute();
        var s = second();

        var bigCircle = map(s, 0, 60, 160, 0);
        var midCircle = map(s, 0, 60, 200, 0);
        var littleCircle = map(s, 0, 60, 255, 0);
        var ellipseRotateTwo = map(s, 0, 60, 0, 360);


        push();
        translate(width / 2, height / 2);
        noStroke();
        rotate(radians(270));
        stroke(0);
        strokeWeight(10);

        fill(colorOne);
        ellipse(0, 0, 400, 400);

        fill(colorTwo);
        ellipse(0, 0, 260, 260);

        fill(colorThree);
        ellipse(0, 0, 140, 140);

        noStroke();
        fill(timeOfDay);
        arc(0, 0, 420, 420, 0, radians(ellipseRotateTwo), PIE);

        stroke(0);
        fill(timeOfDay);
        ellipse(0, 0, 50, 50);
        pop();

        translate(width / 2, height / 2);
        rotate(radians(180));
        strokeWeight(10);
        stroke(0, 0, 0);
        line(0, 25, 0, 199);

        push();
        rotate(radians(map(s, 0, 60, 0, 360)));
        line(0, 25, 0, 199);
        pop();

        push(); //hour hand
        rotate(radians(map(h, 0, 12, 0, 360)));
        line(0, 25, 0, 360);
        pop();

        push(); //minute hand
        rotate(radians(map(m, 0, 60, 0, 360)));
        line(0, 25, 0, 480);
        pop();
    }

    function drawWind() {
        var windSpeed = map(wind, 0, 20, 0, 500);
        var windColor = map(wind, 0, 20, )
        push();
        rotate(radians(windDir)); //var windDir declared above as wind direction direct from API
        fill(255);
        beginShape();
        vertex(0, 0);
        vertex(-20, 20);
        vertex(0, windSpeed);
        vertex(20, 20);
        endShape(CLOSE);
        pop();
    }


}

function changeCity() {
    let val = sel.value();
    if(val == 'Buffalo'){
        cityInput = 'Buffalo';
    } else if(val == 'Dakar') {
        cityInput = 'Dakar'; 
    } else if(val == 'Sydney') {
        cityInput = 'Sydney'; }
    }

    


//function setup() {
//    createCanvas(500, 500);
//    loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Yellowknife&APPID=40223864a797a6dcafe07148fc944088&units=imperial', gotData)
//}
//
//function gotData(data) {
//    weather = data;
//}
//
//function draw() {
//    background(200);
//    var temp = weather.main.temp;
//    var wind = weather.main.wind.speed;
//     var windVert = map(wind, 0, 20, 0, 250);
//    
//    if (weather) {
//        fill(0);
//        text('Current temp Yellowknife: ' + temp + ' F', 5, height - 10);
//    } //weather online Yellowknife
//    
//    translate(width/2, height/2);
//    
//    beginShape();
//    vertex(0,0);
//    vertex(-20,20);
//    vertex(0, windVert);
//    vertex(20, 20);
//    endShape(CLOSE);
//    
//   
//}