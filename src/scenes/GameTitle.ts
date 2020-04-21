class GameTitle extends Phaser.Scene {

	create() {

	}

	startGame() {
		this.game.scene.start("Main");
	}

}

export default GameTitle;