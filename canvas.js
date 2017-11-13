var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//c.fillStyle = 'rgba(0,255,0,0.2)';
//c.fillRect(100,100,100,100);

/*c.fillStyle = 'rgba(255,0,0,0.2)';
c.fillRect(200,300,50,80);*/

/*c.fillStyle = 'rgba(0,0,255,0.2)';
c.fillRect(30,50,100,100);
console.log(canvas);*/


//Line


//Arc / Circle
//for (var i = 0; i < 100; i++) {
//	var x = Math.random() * window.innerWidth;
//	var y = Math.random() * window.innerHeight;
//	c.beginPath();
//	c.arc(x,y,10,0,Math.PI * 2,false);
//	c.strokeStyle = '#'+(Math.random()*0xffffff<<0).toString(16);
//	c.stroke();
//}


	var mouse = {
		x: undefined,
		y: undefined
	}

	var maxRadius = 40;
	var minRadius = 2;

	window.addEventListener('mousemove',
		function(event){
		mouse.x = event.x;
		mouse.y = event.y;
		console.log(mouse);
	})

	window.addEventListener('resize',function(){
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		init();
	})
	var colorArray =[
		'#D0D3C5',
		'#56B1BF',
		'#0B708A',
		'#D73A31',
		'#032B2F'
	];

	function Circle(x,y,dx,dy,radius){
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		this.minRadius = radius;
		this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

		this.draw = function(){
			c.beginPath();
			c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
			//c.strokeStyle = '#'+(Math.random()*0xffffff<<0).toString(16);
			//c.stroke();
			//c.fillStyle = this.color;
			//c.fill();
			c.strokeStyle = this.color;
			c.stroke();
		}

		this.update = function(){
			if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
				this.dx = -this.dx;
			}
			if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
				this.dy = -this.dy;
			}
			this.x += this.dx;
			this.y += this.dy;

			if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
				if(this.radius < maxRadius){
					this.radius += 1;
				}
				
			}else if(this.radius > this.minRadius){
				this.radius -= 1;
			}

			this.draw();
		}
	}


	

	var circleArray = [];
	for (var i = 0; i < 100; i++) {
		var x = Math.random() * (innerWidth - 2 * radius) + radius;
		var y = Math.random() * (innerHeight - 2 * radius) + radius;
		var dy = (Math.random()) * 0.5;
		var dx = (Math.random()) * 0.5;
		var radius = Math.random() * 3 + 1;
		circleArray.push(new Circle(x,y,dx,dy,radius));
	}
	

	function init() {
		circleArray = [];
		for (var i = 0; i < 800; i++) {
		var x = Math.random() * (innerWidth - 2 * radius) + radius;
		var y = Math.random() * (innerHeight - 2 * radius) + radius;
		var dy = (Math.random()) * 0.5;
		var dx = (Math.random()) * 0.5;
		var radius = Math.random() * 3 + 1;
		circleArray.push(new Circle(x,y,dx,dy,radius));
	}
	}

	function animate(){
		requestAnimationFrame(animate);

		c.clearRect(0,0,innerWidth,innerHeight);


		for (var i = 0; i < circleArray.length; i++) {
			circleArray[i].update();
		}
		//circle.draw();
		//circle.update();

		
		
	}

	animate();

