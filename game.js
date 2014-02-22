/*var text = "";
var val;
simply.on('accelTap', function(e) {
  if (e.axis === "z" || (e.axis === "x" && e.direction === -1)){
  	text += "flap ";
  }
  simply.subtitle(text);
});

simply.title('Hello World!');*/

//var t;
//simply.accelConfig(simply.accelConfig(100, 2, true));
//var text = "";

simply.on('accelData', function(e) {
   //count = simply.accelPoint.x;
   /*simply.body(e.accels[0].x - e.accels[24].x);
   simply.title(e.accels[0].y - e.accels[24].y);
   simply.subtitle(e.accels[0].z - e.accels[24].z);*/

   var val = (e.accels[0].z - e.accels[24].z);
   if (val < 0){
   	val = -val;
   }
   //simply.subtitle(val);
	if (val > 800){
		text = text + "flap ";
		simply.subtitle(text);
	}
	
	//
	//simple.title()
});

