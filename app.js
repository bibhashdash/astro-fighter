const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
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
let facingDirection = "right";
let cursors;
let player;
function preload() {
  this.load.image('sky', './assets/sky.png');
  this.load.spritesheet('dude', './assets/astro.png', {frameWidth: 32, frameHeight: 32});
}

function create() {
  this.add.image(400, 300, 'sky');
  player = this.physics.add.sprite(100, 450, 'dude');
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  cursors = this.input.keyboard.createCursorKeys();

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 9}),
    frameRate: 24,
    repeat: -1
  });

  this.anims.create({
    key: 'faceRight',
    frames: [{key: 'dude', frame: 3}],
    frameRate: 20
  });


  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', {start: 10, end: 19}),
    frameRate: 24,
    repeat: -1
  });

  this.anims.create({
    key: 'faceLeft',
    frames: [{key: 'dude', frame: 13}],
    frameRate: 20
  });

}

function update() {
  if (cursors.left.isDown) {
    facingDirection = "left";
    player.setVelocityX(-160);
    player.anims.play('left', true);
  } else if (cursors.right.isDown) {
    facingDirection = "right";
    player.setVelocityX(160);

    player.anims.play('right', true);
  } else {
    player.setVelocityX(0);

    if (facingDirection === "left") {
      player.anims.play('faceLeft')
    } else player.anims.play("faceRight")
  }

  if (cursors.up.isDown && player.body.touching.down) {
    console.log("pressed up")
    player.setVelocityY(-330);
  }
}