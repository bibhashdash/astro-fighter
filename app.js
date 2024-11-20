const config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 800,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 310},
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};
const game = new Phaser.Game(config);
let player;
function preload() {
  this.load.image('sky', './assets/sky.png');
  this.load.spritesheet('dude', './assets/astro.png', {frameWidth: 32, frameHeight: 32});
}

function create() {
  this.add.image(600, 400, 'sky');
  player = this.physics.add.sprite(100, 450, 'dude');
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
}

function update() {

}