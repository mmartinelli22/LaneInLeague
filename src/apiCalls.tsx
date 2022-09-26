import { Champion } from "./appFolder/app";

const fetchData = async () => {
    const response = await fetch("http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json");
    const json = await response.json();
    console.log('HERE');
    const data = Object.keys(json.data).map((x) => json.data[x]) as Champion[];
    return data;
};

export { fetchData };

// http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/Zyra.png
// http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zyra_0.png
// http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg
// http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/Zyra.png