const fetchData = async () => {
    const response = await fetch("http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json");
    const json = await response.json();
    console.log('HERE');
    const data = Object.keys(json.data).map((x) => json.data[x])
    return data;
};

export { fetchData };