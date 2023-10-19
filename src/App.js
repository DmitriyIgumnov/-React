// import logo from "./logo.svg";
// import "./App.css";

// const date = new Date()
// const year = date.getFullYear()

// export const App = () => {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<div> {year} </div>
// 			</header>
// 		</div>
// 	);
// };

import logo from "./logo.svg";
import "./App.css";

const date = new Date();
const year = date.getFullYear();

export const App = () => {
	const appContainer = document.createElement("div");
	appContainer.className = "App-header";
	const img = document.createElement("img");
	img.src = logo;
	img.className = "App-logo";
	img.alt = "logo";
	const appParagraph = document.createElement("p");
	appParagraph.textContent = "Edit and save to reload";
	const appCode = document.createElement("code");
	appCode.textContent = "src/App.js";

	appParagraph.append(appCode);

	const appLink = document.createElement("a");
	appLink.className = "App-link";
	appLink.href = "https://reactjs.org";
	appLink.target = "_blank";
	appLink.rel = "noopener noreferrer";
	appLink.textContent = "Learn React";

	const appYaer = document.createElement("div");
	appYaer.textContent = year;

	appContainer.append(img, appParagraph, appLink, appYaer);
	return document.body.append(appContainer);
};
