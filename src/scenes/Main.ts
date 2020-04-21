import ExampleObject from '../objects/ExampleObject';

class Main extends Phaser.Scene {

	create() {

        console.log("Running main scene")

		//Example of including an object
		let exampleObject = new ExampleObject(this.game);
	}

	update() {
		
	}

}

export default Main;