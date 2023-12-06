import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const getAccessToken = async () => {
	const response = await axios({
		method: 'post',
		url: 'https://accounts.spotify.com/api/token',
		params: {
			grant_type: 'client_credentials'
		},
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
		}
	});

	const accessToken = response.data.access_token;
	console.log(`Access Token: ${accessToken}`);
	return accessToken;
};

export { getAccessToken };