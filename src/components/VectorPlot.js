import React, { Component } from "react";
import Plot from "react-plotly.js";

class VectorPlot extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Plot
					data={[
						{
							x: [0, this.props.data[0][0]],
							y: [0, this.props.data[0][1]],
							z: [0, this.props.data[0][2]],
							type: "scatter3d",
							mode: "lines+markers",
							line: {
								width: 6,
								color: "red",
								reversescale: false,
							},
							name: this.props.names[0],
						},
						{
							x: [0, this.props.data[1][0]],
							y: [0, this.props.data[1][1]],
							z: [0, this.props.data[1][2]],
							type: "scatter3d",
							mode: "lines+markers",
							line: {
								width: 6,
								color: "blue",
								reversescale: false,
							},
							name: this.props.names[1],
						},
						{
							x: [0, this.props.data[2][0]],
							y: [0, this.props.data[2][1]],
							z: [0, this.props.data[2][2]],
							type: "scatter3d",
							mode: "lines+markers",
							line: {
								width: 6,
								color: "pink",
								opacity: 0.5,
								reversescale: false,
							},
							name: this.props.names[2],
						},
					]}
					//layout={{
					//width: 1500,
					//height: 750,
					//}}
				/>
			</div>
		);
	}
}

export default VectorPlot;
