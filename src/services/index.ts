import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;

export async function getGameList() {
  try {
    const { data } = await axios.get<string[]>(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?rapidapi-key=${API_KEY}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}
