const fetchData = async () => {
    try {
        const response = await fetch("http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json");
        const json = await response.json();
        console.log(json.data.Ahri);
        return json;
    } catch (error) {
        console.log("error", error);
    }
};

export { fetchData };