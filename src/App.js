import logo from "./logo.svg";
import Vector from "./components/Vector";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
} from "@material-ui/core";
import { PlayArrowTwoTone, GitHub } from "@material-ui/icons";
import "./App.css";

function App() {
	return (
		<div className="App">
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6">
						Vector Manipulation Visualization
					</Typography>
					<PlayArrowTwoTone />
					<IconButton
						href="https://github.com/xnought/vectorv"
						edge="end"
						color="white"
						aria-label="menu"
					>
						<GitHub />
					</IconButton>
				</Toolbar>
			</AppBar>
			<header className="App-header">
				<Vector />
			</header>
		</div>
	);
}

export default App;
