import React, { Component } from "react";
import ToolSelector from "./ToolSelector";
import BrushSize from "./BrushSize";
import BrushColor from "./BrushColor";
import ResetCanvas from "./ResetCanvas";
import SaveCanvas from "./SaveCanvas";
import ImageStamp from "./ImageStamp";

export default class Sidebar extends Component {
	render() {
		const { tools, actions } = this.props;
		const { brush_size } = tools;
		const { brush_color } = tools;
		const { resetCanvas } = tools;
		const { saveCanvas } = tools;
		const { imageStamp } = tools;
		return (
			<div className="sidebar">
				<section className="section section--tool-selector">
					<h3 className="section__heading">TOOL</h3>
					<ToolSelector
						tool={ tools.tool }
						action={ actions.selectTool }
						/>
				</section>

				<section className="section section--brush-size">
					<h3 className="section__heading">BRUSH SIZE</h3>
					<BrushSize
						brush_size={ brush_size }
						action={ actions.changeSize }
						/>
				</section>
				<section className="section section--brush-color">
					<h3 className="section__heading">BRUSH COLOR</h3>
					<BrushColor
						brush_color={ brush_color }
						action={ actions.changeColor }
						/>
				</section>
				<section className="section section--image-stamp">
					<h3 className="section__heading">IMAGE STAMP</h3>
					<ImageStamp
						imageStamp={ imageStamp }
						action={ actions.imageStamp }
						/>
				</section>
				<section className="section--reset-canvas">
					<h3 className="section__heading">RESET</h3>
					<ResetCanvas resetCanvas={ resetCanvas }
						action={ actions.clearCanvas }
						/>
				</section>
				<section className="section--save-canvas">
					<h3 className="section__heading">SAVE</h3>
					<SaveCanvas
						saveCanvas={ saveCanvas }
						action={ actions.savingCanvas }
						/>
				</section>
			</div>
		)
	}
}
