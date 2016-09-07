var express = require('express');
var app = express();

app.get('/random',function(req,res,next){
	console.log('--------------------------------')
	var number_1 =  Math.floor((Math.random() * 5) + 0);
	var number_2 =	Math.floor((Math.random() * 5) + 0);
	var number_3 =  Math.floor((Math.random() * 5) + 0);
	console.log(number_1, number_2, number_3)
	if(number_1 === number_2 === number_3){
		console.log("You win");
	}else if(number_1 === number_2 || number_1 === number_3 || number_2 === number_3){
		console.log("Almost Done. Better luck next time")
	}else{
		console.log("You Lost")
	}

	res.json({number_1 : number_1, number_2: number_2, number_3: number_3});
})

app.listen(3000,function(){
	console.log('App running on 3000 port')
})