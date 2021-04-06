import logo from "./logo.svg";
import Vector from "./components/Vector";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";

import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { GitHub } from "@material-ui/icons";
import "./App.css";

function App() {
	return (
		<div className="App">
			<AppBar position="static">
				<Toolbar>
					<IconButton
						href="https://github.com/xnought/vectorv"
						edge="end"
						color="white"
						aria-label="menu"
					>
						<GitHub />
					</IconButton>{" "}
					<Typography variant="h6">
						<InlineMath math="\ \vec{v} \text{ and } \vec{u} \text{ calculations} \nearrow" />
					</Typography>
				</Toolbar>
			</AppBar>
			<header className="App-header">
				<Vector />
			</header>
		</div>
	);
}

export default App;
