import React, { Component } from "react";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { Button, TextField, Box, Typography } from "@material-ui/core";
import { dot, cross, sum, square, sqrt, acos } from "mathjs";
import VectorPlot from "./VectorPlot";

function magnitudeHelper(vector) {
	const vectorSquared = square(vector);
	const sumSquared = sum(vectorSquared);
	return { squared: sumSquared, result: sqrt(sumSquared) };
}

class Vector extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dot: "",
			cross: [],
			arr1: "",
			arr2: "",
			numSum: {
				sumu: null,
				sumv: null,
			},
			sqrtSum: {
				sumu: null,
				sumv: null,
			},
			ucpy: {
				u1: "0",
				u2: "0",
				u3: "0",
			},
			vcpy: {
				v1: "0",
				v2: "0",
				v3: "0",
			},
			uComponents: {
				u1: "0",
				u2: "0",
				u3: "0",
			},
			vComponents: {
				v1: "0",
				v2: "0",
				v3: "0",
			},
			angle: null,
			crossMagnitude: {
				sqrtSum: null,
				numSum: null,
			},
			add: [],
			sub: [],
			proj: {
				udotv: null,
				uMagSquared: null,
				result: [],
			},
			calculate: 0,
		};
		this.dotProduct = this.dotProduct.bind(this);
		this.projuV = this.projuV.bind(this);
		this.addAndSub = this.addAndSub.bind(this);
		this.crossProduct = this.crossProduct.bind(this);
		this.magnitude = this.magnitude.bind(this);
		this.crossMagnitude = this.crossMagnitude.bind(this);
		this.angleBetween = this.angleBetween.bind(this);
		this.allCalculations = this.allCalculations.bind(this);
	}

	dotProduct(vectoru, vectorv) {
		const d = dot(vectoru, vectorv);
		this.setState({ dot: `${d}` });
	}
	projuV(vectoru) {
		const udotv = this.state.dot;
		const uMagSquared = this.state.numSum.sumu;
		const fraction = udotv / uMagSquared;
		const result = [
			fraction * vectoru[0],
			fraction * vectoru[1],
			fraction * vectoru[2],
		];

		this.setState({ proj: { udotv, uMagSquared, result } });
	}
	addAndSub(vectoru, vectorv) {
		this.setState({
			add: [
				vectoru[0] + vectorv[0],
				vectoru[1] + vectorv[1],
				vectoru[2] + vectorv[2],
			],
			sub: [
				vectoru[0] - vectorv[0],
				vectoru[1] - vectorv[1],
				vectoru[2] - vectorv[2],
			],
		});
	}
	crossProduct(vectoru, vectorv) {
		const c = cross(vectoru, vectorv);
		this.setState({ cross: c });
	}
	crossMagnitude() {
		const cm = magnitudeHelper(this.state.cross);
		this.setState({
			crossMagnitude: { numSum: cm.squared, sqrtSum: cm.result },
		});
	}

	magnitude(vectoru, vectorv) {
		/*TODO: Also return the total */
		let magValuesu = magnitudeHelper(vectoru);
		let magValuesv = magnitudeHelper(vectorv);

		this.setState({
			numSum: { sumu: magValuesu.squared, sumv: magValuesv.squared },
			sqrtSum: { sumu: magValuesu.result, sumv: magValuesv.result },
		});
	}

	angleBetween() {
		const { sumu, sumv } = this.state.sqrtSum;
		this.setState({
			angle: (180 / Math.PI) * acos(this.state.dot / (sumu * sumv)),
		});
	}

	async allCalculations() {
		this.setState({ calculate: 1 });
		const { u1, u2, u3 } = this.state.uComponents;
		const { v1, v2, v3 } = this.state.vComponents;
		this.setState({ ucpy: { u1, u2, u3 }, vcpy: { v1, v2, v3 } });
		const vectoru = [parseInt(u1), parseInt(u2), parseInt(u3)];
		const vectorv = [parseInt(v1), parseInt(v2), parseInt(v3)];

		await this.magnitude(vectoru, vectorv);
		await this.crossProduct(vectoru, vectorv);
		await this.dotProduct(vectoru, vectorv);
		await this.addAndSub(vectoru, vectorv);
		await this.projuV(vectoru);
		await this.angleBetween();
		await this.crossMagnitude();
	}

	render() {
		const { u1, u2, u3 } = this.state.ucpy;
		const { v1, v2, v3 } = this.state.vcpy;
		const { numSum, sqrtSum, crossMagnitude, proj } = this.state;

		const input = (
			<div>
				<Box display="flex" justifyContent="center" marginTop={5}>
					<Typography variant="h2">
						<InlineMath math="\vec{u} = \langle i,j,k\rangle =  " />{" "}
					</Typography>
					<Box display="flex" marginX={3}>
						<Typography variant="h2">
							<InlineMath math="\langle" />{" "}
						</Typography>

						<TextField
							label={
								<InlineMath math="\text{input } i \text{ here}" />
							}
							onChange={(e) => {
								this.setState((prevState) => ({
									uComponents: {
										...prevState.uComponents,
										u1: e.target.value,
									},
								}));
							}}
							type="number"
						></TextField>
						<Typography variant="h2">
							<InlineMath math=", " />{" "}
						</Typography>
						<TextField
							label={
								<InlineMath math="\text{input } j \text{ here}" />
							}
							onChange={(e) => {
								this.setState((prevState) => ({
									uComponents: {
										...prevState.uComponents,
										u2: e.target.value,
									},
								}));
							}}
							type="number"
						></TextField>
						<Typography variant="h2">
							<InlineMath math=", " />{" "}
						</Typography>
						<TextField
							label={
								<InlineMath math="\text{input } k \text{ here}" />
							}
							onChange={(e) => {
								this.setState((prevState) => ({
									uComponents: {
										...prevState.uComponents,
										u3: e.target.value,
									},
								}));
							}}
							type="number"
						></TextField>
						<Typography variant="h2">
							<InlineMath math="\rangle" />{" "}
						</Typography>
					</Box>
				</Box>
				<Box display="flex" justifyContent="center">
					<Typography variant="h2">
						<InlineMath math="\vec{v} = \langle l,m,n\rangle =  " />{" "}
					</Typography>

					<Box display="flex" marginX={3}>
						<Typography variant="h2">
							<InlineMath math="\langle" />{" "}
						</Typography>
						<TextField
							label={
								<InlineMath math="\text{input } l \text{ here}" />
							}
							onChange={(e) => {
								this.setState((prevState) => ({
									vComponents: {
										...prevState.vComponents,
										v1: e.target.value,
									},
								}));
							}}
							type="number"
						></TextField>
						<Typography variant="h2">
							<InlineMath math="," />{" "}
						</Typography>
						<TextField
							label={
								<InlineMath math="\text{input } m \text{ here}" />
							}
							onChange={(e) => {
								this.setState((prevState) => ({
									vComponents: {
										...prevState.vComponents,
										v2: e.target.value,
									},
								}));
							}}
							type="number"
						></TextField>
						<Typography variant="h2">
							<InlineMath math="," />{" "}
						</Typography>
						<TextField
							label={
								<InlineMath math="\text{input } n \text{ here}" />
							}
							onChange={(e) => {
								this.setState((prevState) => ({
									vComponents: {
										...prevState.vComponents,
										v3: e.target.value,
									},
								}));
							}}
							type="number"
						></TextField>
						<Typography variant="h2">
							<InlineMath math="\rangle" />{" "}
						</Typography>
					</Box>
				</Box>
				<Box display="flex" justifyContent="center" marginTop={4}>
					<Button
						color="primary"
						variant="contained"
						onClick={this.allCalculations}
					>
						<Typography variant="h4">
							<InlineMath math="\text{click to calculate}" />
						</Typography>
					</Button>
				</Box>
			</div>
		);
		if (this.state.calculate === 0) {
			return <div>{input}</div>;
		} else {
			return (
				<div>
					{input}

					<BlockMath
						math={`\\text{Given: } \\vec{u} =  \\langle${
							u1 + ", " + u2 + ", " + u3
						}\\rangle \\ \\text{ and } \\  \\vec{v} =   \\langle${
							v1 + ", " + v2 + ", " + v3
						}\\rangle`}
					/>
					<BlockMath
						math={`\\vec{u} + \\vec{v} = \\ \\langle${this.state.add.toString()}\\rangle`}
					/>

					<BlockMath
						math={`\\vec{u} - \\vec{v} = \\ \\langle${this.state.sub.toString()}\\rangle`}
					/>

					<BlockMath
						math={`|{\\vec{u}}| = \\sqrt{${numSum.sumu}} = ${sqrtSum.sumu} `}
					/>
					<BlockMath
						math={`|{\\vec{v}}| = \\sqrt{${numSum.sumv}} = ${sqrtSum.sumv}`}
					/>

					<BlockMath
						math={`\\hat{u} =	\\frac{1}{\\sqrt{${
							numSum.sumu
						}}} \\langle${u1 + ", " + u2 + ", " + u3}\\rangle`}
					/>
					<BlockMath
						math={`\\hat{v} =	\\frac{1}{\\sqrt{${
							numSum.sumv
						}}} \\langle${v1 + ", " + v2 + ", " + v3}\\rangle`}
					/>
					<BlockMath
						math={`\\vec{u} \\cdot \\vec{v} = \\ ${this.state.dot}`}
					/>

					<BlockMath
						math={`\\theta = cos^{-1}\\left(\\frac{${
							this.state.dot
						}}{\\sqrt{${numSum.sumu * numSum.sumv}}}\\right) = ${
							this.state.angle
						}^{\\circ} `}
					/>

					<BlockMath
						math={`\\vec{u} \\times \\vec{v} = \\ \\langle${this.state.cross.toString()}\\rangle`}
					/>
					<BlockMath
						math={`|\\vec{u} \\times \\vec{v}| = \\sqrt{${crossMagnitude.numSum}} = ${crossMagnitude.sqrtSum} `}
					/>

					<BlockMath
						math={`\\text{proj}_u v = \\left(  \\frac{${
							proj.udotv
						}}{${proj.uMagSquared}} \\right) \\langle${
							u1 + ", " + u2 + ", " + u3
						} \\rangle  = \\langle${proj.result.toString()} \\rangle  `}
					/>

					<Box display="flex" justifyContent="center">
						<VectorPlot
							names={["Vector u", "Vector v", "Addition"]}
							data={[[u1, u2, u3], [v1, v2, v3], this.state.add]}
						/>
					</Box>
					<Box display="flex" justifyContent="center">
						<VectorPlot
							names={["Vector u", "Vector v", "Subtraction"]}
							data={[[u1, u2, u3], [v1, v2, v3], this.state.sub]}
						/>
					</Box>
					<Box display="flex" justifyContent="center">
						<VectorPlot
							names={[
								"Vector u",
								"Vector v",
								"Unit Vector of Vector u",
							]}
							data={[
								[u1, u2, u3],
								[v1, v2, v3],
								[
									u1 / sqrtSum.sumu,
									u2 / sqrtSum.sumu,
									u3 / sqrtSum.sumu,
								],
							]}
						/>
					</Box>
					<Box display="flex" justifyContent="center">
						<VectorPlot
							names={[
								"Vector u",
								"Vector v",
								"Unit Vector of Vector v",
							]}
							data={[
								[u1, u2, u3],
								[v1, v2, v3],
								[
									v1 / sqrtSum.sumv,
									v2 / sqrtSum.sumv,
									v3 / sqrtSum.sumv,
								],
							]}
						/>
					</Box>
					<Box display="flex" justifyContent="center">
						<VectorPlot
							names={[
								"Vector u",
								"Vector v",
								"Vector Orthogonal to vector u and v",
							]}
							data={[
								[u1, u2, u3],
								[v1, v2, v3],
								this.state.cross,
							]}
						/>
					</Box>
					<Box display="flex" justifyContent="center">
						<VectorPlot
							names={[
								"Vector u",
								"Vector v",
								"Vector v project onto Vector u",
							]}
							data={[[u1, u2, u3], [v1, v2, v3], proj.result]}
						/>
					</Box>
				</div>
			);
		}
	}
}

export default Vector;
