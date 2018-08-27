var Enemy = function() {
    this.x = this.randomX();
    this.y = this.randomY();
    this.speed = this.randomSpeed();
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if (this.x < 500) {
        this.x += 4 * this.speed * dt;
    } else {
        this.x = this.randomX();
        this.y = this.randomY();
        this.speed = this.randomSpeed();
    };
};

// Places an enemy a random distance off screen when spawned.
Enemy.prototype.randomX = function() {
    return (Math.floor(Math.random() * -600) - 100);
};

// Places an enemy on a random track.
Enemy.prototype.randomY = function() {
    let randomNumber = Math.random();
    if (0 <= randomNumber && randomNumber < 0.33) {
        return 60;
    } else if (0.33 <= randomNumber && randomNumber < 0.66) {
        return 143;
    } else if ( 0.66 <= randomNumber && randomNumber < 1) {
        return 226;
    };
};

// Enemies will spawn with different speeds at load and respawn.
Enemy.prototype.randomSpeed = function() {
    return (Math.floor(Math.random() * 150) + 20);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor () {
        this.start();
        this.sprite = 'images/char-boy.png';
    }

    start() {
        this.x = 200;
        this.y = 400;
    }

    update() {

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput() {

    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [new Enemy(), new Enemy(), new Enemy()];
let player = new Player();


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
