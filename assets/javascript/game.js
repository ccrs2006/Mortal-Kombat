
//GLOBAL VARIABLES

var characterSelected = false;
var defenderSelected = false;
var character = {};
var defender = {};
var enemiesDefeated = 0;
gameOver = false;

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
  attack: 5
};

var sonyaBlade = {
  name: "sonyaBlade",
  health: 150,
  baseAttack: 20,
  attack: 20
};

var liuKang = {
  name: "liuKang",
  health: 180,
  baseAttack: 25,
  attack: 25
};

//FUNCTIONS

function initializeCharacter(chosenCharacter) {
  character.name = chosenCharacter.name;
  character.health = chosenCharacter.health;
  character.baseAttack = chosenCharacter.baseAttack;
  character.attack = chosenCharacter.attack;
}

function initializeDefender(chosenDefender) {
  defender.name = chosenDefender.name;
  defender.health = chosenDefender.health;
  defender.baseAttack = chosenDefender.baseAttack;
  defender.attack = chosenDefender.attack;
}

function moveToEnemies() {
  $(".available-character").removeClass("available-character").addClass("enemy-character");
  $("#enemies-available").append($(".enemy-character"));
}

function resetGame() {
  $("#subZero").children(".health").html(subZero.health);
  $("#raiden").children(".health").html(raiden.health);
  $("#sonyaBlade").children(".health").html(sonyaBlade.health);
  $("#liuKang").children(".health").html(liuKang.health);

  $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
  
  var available = $(".available-character").show();

  $("#characters-available").html(available);
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

// ROUTINE

$(document).ready(function() {

  //begin audio for the game
  var audioElement = document.createElement('audio');
   audioElement.autoplay = true;
   audioElement.loop = true;
   audioElement.volume = 0.1;
    audioElement.setAttribute('src', 'assets/sounds/introSong.mp3');

  // Hide the "Restart" button and character health on document load
  $("#restart").hide();
  $(".health").hide();

  // Determine which character the user has clicked
  $("#subZero-character").on("click", function () {

    // if character was not selected ignore
    if(characterSelected == false) {
   
      // Set the user's character
      initializeCharacter(subZero);
      characterSelected = true;

      // Display the chosen character
      $("#subZero-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);
      $("#subZero-character").children(".health").html(subZero.health).show();

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#subZero-character").hasClass("enemy-character")) {

        // Set the user's enemy
        initializeDefender(subZero);
        defenderSelected = true;

        // Add the character to the defender section
        $("#subZero-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
        $("#subZero-character").children(".health").html(subZero.health).show();
      }
    }
    var $audioCharacter = document.createElement('audio');
                    $audioCharacter.setAttribute('src', 'assets/sounds/impressive.mp3');
                    $audioCharacter.play();
  });

  $("#raiden-character").on("click", function () {
    console.log("raiden was selected");

    if(characterSelected == false) {

      initializeCharacter(raiden);
      characterSelected = true;

      $("#raiden-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);
      $("#raiden-character").children(".health").html(raiden.health).show();

      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      if($("#raiden-character").hasClass("enemy-character")) {

        initializeDefender(raiden);
        defenderSelected = true;

        $("#raiden-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
        $("#raiden-character").children(".health").html(raiden.health).show();
      }
    }
      var $audioCharacter = document.createElement('audio');
            $audioCharacter.setAttribute('src', 'assets/sounds/laugh.mp3');
            $audioCharacter.play();
  });

  $("#sonyaBlade-character").on("click", function () {

    if(characterSelected == false) {

      initializeCharacter(sonyaBlade);
      characterSelected = true;

      $("#sonyaBlade-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);
      $("#sonyaBlade-character").children(".health").html(sonyaBlade.health).show();

      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      if($("#sonyaBlade-character").hasClass("enemy-character")) {

        initializeDefender(sonyaBlade);
        defenderSelected = true;

        $("#sonyaBlade-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
        $("#sonyaBlade-character").children(".health").html(sonyaBlade.health).show();    
      }
    }
      var $audioCharacter = document.createElement('audio');
            $audioCharacter.setAttribute('src', 'assets/sounds/excellent.mp3');
            $audioCharacter.play();
  });

  $("#liuKang-character").on("click", function () {

    if(characterSelected == false) {

      initializeCharacter(liuKang);
      characterSelected = true;

      $("#liuKang-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);
      $("#liuKang-character").children(".health").html(liuKang.health).show();

      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      if($("#liuKang-character").hasClass("enemy-character")) {

        initializeDefender(liuKang);
        defenderSelected = true;
 
        $("#liuKang-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
        $("#liuKang-character").children(".health").html(liuKang.health).show();
      }
    }
      var $audioCharacter = document.createElement('audio');
          $audioCharacter.setAttribute('src', 'assets/sounds/finishHim.mp3');
          $audioCharacter.play();
  });

  $("#attack").on("click", function() {
    console.log("character = " + JSON.stringify(character));
    console.log("defender = " + JSON.stringify(defender));

    // User is ready to attack the defender
    if (characterSelected && defenderSelected && !gameOver) {
      // User attacks the defender and decreases the defender's health points
      defender.health = defender.health - character.attack;
      $(".defender-character").children(".health").html(defender.health);
      $("#game-message").html("<p>You attacked " + defender.name + " for " + character.attack + " damage.<p>");

      // User's attack power increases
      character.attack = character.attack + character.baseAttack;

      // if defender is still alive, they counter attack the user
      if (defender.health > 0) {
        character.health = character.health - defender.baseAttack;
        $(".chosen-character").children(".health").html(character.health);

        // check if the user survives the attack
        if (character.health > 0) {
          $("#game-message").append("<p>" + defender.name + " attacked you back for " + defender.baseAttack + " damage.</p>");
        } else {
          gameOver = true;
          $("#game-message").html("<p>GAME OVER (You Got served!!!)</p><p>Play again?</p>");
          $("#restart").show();
        }
      } else {
        // is the defender is defeated
        enemiesDefeated++;
        defenderSelected = false;
        $("#game-message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
        $(".defender-character").hide();

        // check if the user has won the game
        if (enemiesDefeated === 3) {
          gameOver = true;
          $("#game-message").html("<p>You've WON!!!</p><p>Play again?</p>");
          $("#restart").show();
        }
      }
    } else if (!characterSelected && !gameOver) {
      $("#game-message").html("<p>You must first select your game character.</p>");
    } else if (!defenderSelected && !gameOver) {
      $("#game-message").html("<p>You must choose an enemy to fight.</p>");
    }

    var $audioCharacter = document.createElement('audio');
        $audioCharacter.setAttribute('src', 'assets/sounds/fight.mp3');
        $audioCharacter.play();
  });

  $("#restart").on("click", function() {
    resetGame();
  });

}); 