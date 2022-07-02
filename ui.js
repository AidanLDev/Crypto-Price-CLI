"use strict";
const React = require("react");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");

const App = () => (
	<Gradient name="retro">
		<BigText text="Aidans CLI" align="center" font="block" />
	</Gradient>
);

module.exports = App;
