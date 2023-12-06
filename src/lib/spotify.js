import axios from 'axios';
import { getAccessToken } from './getAccessToken.js';
import dotenv from 'dotenv';

dotenv.config();

const getArtistInfo = async (accessToken, artistId) => {
    try {
        const response = await axios({
            method: 'get',
            url: `https://api.spotify.com/v1/artists/${artistId}`,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        console.log(response.data);
    } catch (error) {
        console.error(
            'Error fetching artist information:',
            error.response ? error.response.data : error.message
        );
    }
};

// const artistId = '4iHNK0tOyZPYnBU7nGAgpQ'; // mariah carey
// const accessToken = await getAccessToken();
// getArtistInfo(accessToken, artistId);
