import 'phaser';
import Boot from './scenes/Boot';
import Preload from './scenes/Preload';
import GameTitle from './scenes/GameTitle';
import Main from './scenes/Main';
import GameOver from './scenes/GameOver';

class Game extends Phaser.Game {

	constructor() {

        const config = {
            type: Phaser.AUTO,
            backgroundColor: '#125555',
            width: window.innerWidth,
            height: window.innerHeight
        };

		super(config);

		this.scene.add('Boot', Boot, false);
		this.scene.add('Preload', Preload, false);
		this.scene.add('GameTitle', GameTitle, false);
		this.scene.add('Main', Main, false);
		this.scene.add('GameOver', GameOver, false);

		this.scene.start('Boot');
	}

}

new Game();