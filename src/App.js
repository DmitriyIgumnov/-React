import logo from "./logo.svg";
import "./App.css";

const date = new Date() // императивный подход
const year = date.getFullYear() // императивный подход

export const App = () => { 
	return (
		<div className="App"> {/* делкларативный подход */}
			<header className="App-header"> {/* делкларативный подход */}
				<img src={logo} className="App-logo" alt="logo" /> {/* делкларативный подход */}
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a> {/* императивный подход */}
				<div> {year} </div>  {/* делкларативный подход */}
			</header>
		</div>
	);
};
