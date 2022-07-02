const React = require("react");
const { Box, Text, Newline } = require("ink");
const axios = require("axios");

const { useState, useEffect } = React; //  Deconstruct the functions from the react package

const Table = () => {
	const [cryptoPriceData, setCryptoPriceData] = useState([]);
	const coinGeckoUrl =
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cchainlink%2Clitecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false";

	useEffect(() => {
		axios
			.get(coinGeckoUrl)
			.then((res) => setCryptoPriceData(res.data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<Box borderStyle="single" padding={2} flexDirection="column">
			<Box>
				<Box width="25%">
					<Text>COIN</Text>
				</Box>
				<Box width="25%">
					<Text>PRICE</Text>
				</Box>
				<Box width="25%">
					<Text>24 HOUR CHANGE</Text>
				</Box>
				<Box width="25%">
					<Text>ALL TIME HIGH</Text>
				</Box>
			</Box>
			<Newline />
			{cryptoPriceData.map(
				({ id, name, current_price, price_change_percentage_24h, ath }) => (
					<Box key={id}>
						<Box width="25%">
							<Text color="cyan">{name}</Text>
						</Box>
						<Box width="25%">
							<Text color="cyan">${current_price}</Text>
						</Box>
						<Box width="25%">
							<Text
								backgroundColor={
									Math.sign(price_change_percentage_24h) < 0 ? "red" : "green"
								}
							>
								{price_change_percentage_24h.toFixed(2)}%
							</Text>
						</Box>
						<Box width="25%">
							<Text color="green">${ath}</Text>
						</Box>
					</Box>
				)
			)}
		</Box>
	);
};

module.exports = Table;
