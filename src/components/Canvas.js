import React, { PropTypes, Component } from "react";
import { BRUSH, ERASER, STAMP } from "../constants/Tools";

let ctx;

export default class Canvas extends Component {
	constructor(props) {
		super(props);
		this.isDrawing = false;
		this.isErasing = false;
		this.isStamping = false;
		this.start = this.start.bind(this);
		this.end = this.end.bind(this);
		this.draw = this.draw.bind(this);
		this.erase = this.erase.bind(this);
		this.stamp = this.stamp.bind(this);
	}

	componentDidMount() {
		this.refs.canvas.height = window.innerHeight;
		this.refs.canvas.width = window.innerWidth;
		ctx = this.refs.canvas.getContext("2d");
	}

	getStroke() {
		return this.props.tools.brush_size;
	}

	getColor(){
		return this.props.tools.brush_color;
	}

	getX(event) {
		if (event.pageX === undefined) {
			return event.targetTouches[0].pageX - this.refs.canvas.offsetLeft;
		}
		else {
			return event.pageX - this.refs.canvas.offsetLeft;
		}
	}

	getY(event) {
		if (event.pageY === undefined) {
			return event.targetTouches[0].pageY - this.refs.canvas.offsetTop;
		}
		else {
			return event.pageY - this.refs.canvas.offsetTop;
		}
	}

	start(event) {
		if (this.props.tools.tool === BRUSH || this.props.tools.tool === ERASER) {
			this.isDrawing = true;
			ctx.beginPath();
			ctx.moveTo(this.getX(event), this.getY(event));
			event.preventDefault();
		}
	}

	draw(event) {
		if (this.isDrawing) {
			if (this.props.tools.tool === ERASER){
				ctx.strokeStyle = "#ffffff"
			}
			else{
				ctx.strokeStyle = this.getColor();
			}
			ctx.lineTo(this.getX(event), this.getY(event));
			ctx.lineWidth = this.getStroke();

			ctx.lineCap = "round";
			ctx.lineJoin = "round";
			ctx.stroke();
		}
		event.preventDefault();
	}

	end(event) {
		if (this.isDrawing) {
			ctx.stroke();
			ctx.closePath();
			this.isDrawing = false;
		}
		event.preventDefault();
	}
	erase(getX, getY) {
		if (this.props.tools.tool === ERASER) {
			ctx.beginPath();
			ctx.moveTo(this.getX(event), this.getY(event));
			// start = true;
			ctx.lineTo(this.getX(event), this.getY(event));
			ctx.strokeStyle = 'white';
			ctx.lineWidth = this.getStroke();
			ctx.stroke();
		}
	}

	stamp(event){
		if (this.props.tools.tool === STAMP )
		{
			this.isDrawing = false;
			this.isStamping = true;
			this.isErasing = false;
			var canvas = document.getElementById("canvas");
			var ctx = canvas.getContext("2d");
			var img = document.getElementById("imgSource");
			ctx.drawImage(img, this.getX(event), this.getY(event));
			var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
			ctx.putImageData(imgData, 0, 0);
			event.preventDefault();
		}
	}

	render() {
		return (
			<canvas
				className="canvas"
				ref="canvas"
				id="canvas"
				onMouseDown={ this.start }
				onMouseUp={ this.end }
				onMouseMove={ this.draw }
				onClick={ this.stamp}
				></canvas>
		)
	}
}

Canvas.propTypes = {
	tools: PropTypes.object.isRequired
}
