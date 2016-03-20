var charmander = {
	name: "Charmander", 
	health: 100, 
	lvl: 12, 
	effect: null, 
	moves: [{
		name: "Ember", 
		type: "Attack", 
		power: 20, 
		accuracy: .8
	}, 

	{
		name: "Scratch", 
		type: "Attack", 
		power: 10, 
		accuracy: .9
	}, 

	{
		name: "Leer", 
		type: "Defense", 
		power: .20, 
		accuracy: 1.0
	}, 

	{
		name: "Growl", 
		type: "Defense", 
		power: .65, 
		accuracy: .65
	}

	]



};

var pikachu = {

	name: "Pikachu", 
	health: 100, 
	lvl: 12, 
	effect: null, 
	moves: [{
		name: "Thunder Shock", 
		type: "Attack", 
		power: 10, 
		accuracy: .95
	}, 

	{
		name: "Thunder Wave", 
		type: "Attack", 
		power: 25, 
		accuracy: .6
	}, 

	{
		name: "Tail Whip", 
		type: "Defense", 
		power: .15, 
		accuracy: 1.0
	}, 

	{
		name: "Growl", 
		type: "Defense", 
		power: .55, 
		accuracy: .55
	}

	]

};

var currentState; 
var cpuPokemon; 
var userPokemon; 

var cpuTurn = {
	play: function(){
		var randomMove = Math.floor(Math.random() *4);
		var currentCPUMove = cpuPokemon.moves[randomMove];

		var setUpCPUField = function () {
			$("#chat-text").text("What will " + cpuPokemon.name + " do?");
			prepareToAttack();
		};

		var prepareToAttack = function () {
			$("#pikachu-img").animate({
				top: "-=25",

			}, 200, function() {
				$("#pikachu-img").animate({
					top = "+=25", 
				}, 200)

			});
		};

		setUpCPUField();
	}
};

var playerTurn = {
	play: function()
	{


	}
};

var loop = function () {
	if (cpuPokemon.health <= 0 || userPokemon.health <= 0) {
		$("#game-over").removeClass("hide");
		console.log("Game Over")
	} else {
		currentState.play();
	}
}

var init = function () {
	cpuPokemon = pikachu; 
	userPokemon = charmander; 
	$("#cpu-name").text(cpuPokemon.name);
	$("#cpu-lvl").text("lvl " + cpuPokemon.lvl);
	$("#user-name").text(userPokemon.name);
	$("#user-lvl").text("lvl " + userPokemon.lvl);
	currentState = cpuTurn; 
	loop();

};

init();

