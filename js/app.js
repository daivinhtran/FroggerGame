// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = Math.round(x*101 - 101);
    this.y = Math.round(y*83 - 97);
    this.speed = Math.floor(Math.random()*(350-250)) + 250;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x > 505)
        this.x = 0;
    else
        this.x = this.x + dt*this.speed;
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var OwnPlayer = function (x,y){
    
    // Variables applied to the player
    this.x = x*101 - 101;
    this.y = y*83 - 97;
    this.lives = 5;
    
    // load image for the player
    this.sprite = 'images/char-boy.png';
}

// Update the player's position, required method for game
OwnPlayer.prototype.update = function(direction) {
    // update the position after any of the arrow keys is pressed
    // make sure the sprite is in the boundary
    if(direction === "left" && this.x >= 101){
        this.x -= 101;
    }
    else if(direction === "right" && this.x <= 303){
        this.x += 101;
    }

    else if(direction === "up" && this.y >= 69){
        this.y -= 83;

    }
    else if(direction === "down" && this.y <= 318){
        this.y = Math.round(this.y + 83);
    }
};

// Draw the player on the screen, required method for game
OwnPlayer.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// The function is called when after the arrow key is pressed and released
OwnPlayer.prototype.handleInput = function(keyCode){
    this.update(keyCode);
};

// Reset the position of the player
OwnPlayer.prototype.reset = function(){
    this.y = 6*83 - 97;
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
allEnemies = [new Enemy(-2,2), new Enemy(-2,3), new Enemy(-2,4), new Enemy(0,2), new Enemy(0,3), new Enemy(0,4)];

player = new OwnPlayer(3,6);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
