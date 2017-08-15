//Global variables 

var characterSelected = false;
var defenderSelected = false;
var character = {};
var defender = {};
var enemiesDefeated = 0;
var gameOver = false;

//CHARACTERS

var subZero = {
  name: "subZero",
  health: 120,
  baseAttack: 8,
  attack: 8
};

var raiden = {
  name: "raiden",
  health: 100,
  baseAttack: 5,
  attack: 5,
};

var sonyaBlade = {
  name: "sonyaBlade",
  health: 150,
  baseAttack: 20,
  attack: 20,
};

var liuKang = {
  name: "liuKang",
  health: 180,
  baseAttack: 25,
  attack: 25,
};

//FUNCTIONS

function initializeCharacter() {
  character.name = chosenCharacter.name;
  character.health = chosenCharacter.health;
  character.baseAttack = chosenCharacter.baseAttack;
  character.attack = chosenCharacter.attack;
}

function initializeDefender() {
  defender.name = chosenDefender.name;
  defender.health = chosenDefender.health;
  defender.baseAttack = chosenDefender.baseAttack;
  defender.attack = chosenDefender.attack;
}

function resetGame() {
  $("#subZero").children(".health").html(subZero.health);
  $("#raiden").children(".health").html(raiden.health);
  $("#sonyaBlade").children(".health").html(sonyaBlade.health);
  $("#liuKang").children(".health").html(liuKang.health);

  $(".chacter-image").removeClass("chosenCharacter enemy-character defender-character").addClass("available-character");


  var available = $(".available-character").show();

  $("#characters-avaible").html(available);
  $("#game-message").empty();
  $("#restart").hide();
  $(".health").hide();

  characterSelected = false;
  defenderSelected = false;
  enemiesDefeated = 0;
  gameOver = false;
  character = {};
  defender = {};
}
