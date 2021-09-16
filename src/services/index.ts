import axios from 'axios';

export async function getGameList() {
  try {
    const { data } = await axios.get<string[]>(
      'https://free-to-play-games-database.p.rapidapi.com/api/games?rapidapi-key=3cf7f88022msha14dd59eaf4f22ap199bafjsnd949c9895df1'
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}
