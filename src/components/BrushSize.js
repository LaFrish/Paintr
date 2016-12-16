import React, { PropTypes } from "react";

export default function BrushSize(props) {
	const { action, brush_size } = props;
	return (
		<div className="brush-size-container">
			<input
				type="number"
				className="number-input"
				defaultValue={brush_size}
				onChange={ (e) => {
					action(e.target.value)
				}}
				/>
		</div>
	);
}

BrushSize.propTypes = {
	brush_size: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
};
