import React, { PropTypes, Component} from 'react';

export default class ResetCanvas extends Component {
	constructor(props) {
		super(props);
		this.resetCanvas = this.resetCanvas.bind(this);
	}

	resetCanvas(){
		const canvas = document.querySelector('canvas');
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0,0, window.innerWidth,  window.innerHeight);
	}

	render() {

		return (
			<div className="reset-container" >
				<button id="reset-select"
					onClick={ this.resetCanvas }
					>RESET</button>
			</div>
		)
	}
}

ResetCanvas.propTypes = {
	resetCanvas: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
}
