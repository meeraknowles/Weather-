

function setup() {
  //set Canvas to size of window
  createCanvas(windowWidth, windowHeight);

  //Intoduction Page
    background('pink');
    
    
    function draw () {
  background(0);
  stroke(255);
  line(x, 0, x, height);
  x = x + 1;
  if (X > width) {
    x = 0
    
    
}
}
  
    
  button1 = createButton('San diego');
  button1.position(20, 10);
  //Load Data when Button 1 is Pressed
  button1.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
   button2 = createButton('Tokyo');
  button2.position(150, 10);
  //Load Data when Button 1 is Pressed
  button2.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%201118370&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
   button3 = createButton('New delhi');
  button3.position(330, 10);
  //Load Data when Button 1 is Pressed
  button3.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202295019&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });

button4 = createButton('Venice');
  button4.position(500, 10);
  //Load Data when Button 1 is Pressed
  button4.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%20725746&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  button5 = createButton('Sisimiut');
  button5.position(600, 10);
  //Load Data when Button 1 is Pressed
  button5.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%20473043&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });

}

function weatherLoaded(data) {

  var temp = data.query.results.channel.item.condition.temp;

  var date = data.query.results.channel.item.condition.date;
  

  
  
  background('pink');
    

  fill(random(205), random(205), random(205));
  noStroke();
rect(temp * 2, temp * 2, temp * 5, 10);

// fill(random(205), random(205), random(205));
  //noStroke();
//ellipse(temp * 2, temp * 2, temp * 1, date * 10);

textSize(30);
  textFont("TypoGraphica");
  textAlign(RIGHT);
     
    fill(random(205), 0, random(205))
    text(date, 500, 400);
    
      
    fill(random(205), 0, random(205))
    text('Date:', 80, 400);
    
    
    textSize(30);
  textFont("TypoGraphica");
  textAlign(RIGHT);
     
    fill('purple')
    text(temp, 720, 400);
    
     fill('#FFB200')
    text('Temperature:', 680, 400);
    
     fill('blue')
    text('° F', 750, 400);




}