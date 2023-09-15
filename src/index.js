import Phaser from "phaser";

const config = {
  // WebGL is the default renderer. JS API for rendering 2D and 3D graphics
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  }
}


new Phaser.Game(config);