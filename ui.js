"use strict";
const React = require("react");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");
const importJsx = require("import-jsx");

const Table = importJsx("./src/components/Table");

const App = () => (
	<>
		<Gradient name="retro">
			<BigText text="Aidans CLI" align="center" font="block" />
		</Gradient>
		<Table />
	</>
);

module.exports = App;
