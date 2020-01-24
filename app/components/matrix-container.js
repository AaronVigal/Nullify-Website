import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
	
	matrix(){
		// Select the canvas
		var matrix = $("#matrix")[0];
		var wrapper = $("#wrapper");

		// Make canvas fill the screen
		var matrixWidth = matrix.width = wrapper.width();
		var matrixHeight = matrix.height = wrapper.height();

		// Define variables
		var fontSize = 20;
		var charSet = ["1", "0"];
		var columns = matrixWidth / fontSize;
		var rows = matrixHeight / fontSize;

		// Get canvas context
		var ctx = matrix.getContext('2d');

		// Set font size
		ctx.font = fontSize + "px Arial";

		// One drop per column, row set randomly
		var drops = [];
		for (var column = 0; column < columns; column++) {
			drops[column] = Math.floor(Math.random() * (rows + 1));
		}

		function rain() {
			// Clear the screen with opacity of 0.05
			ctx.fillStyle = 'rgba(35, 35, 35, 0.2)';
			ctx.fillRect(0, 0, matrixWidth, matrixHeight);

			for (var column = 0; column < drops.length; column++) {
				ctx.fillStyle = '#00FF98';
				ctx.fillText(charSet[Math.floor(Math.random() * charSet.length)], column * fontSize, drops[column] * fontSize); // Draw random char
				if (Math.random() > 0.98) { drops[column] = 0; } // Randomly reset drop back to top row
				drops[column]++; // Move drop down a row
			}
		}

		function run() {
			setInterval(rain, 100);
		}
		run();
	},

	didInsertElement(){
		this._super();
		this.matrix();
	},
	
});
