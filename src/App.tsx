import React, { useState, useEffect } from "react";
// import { Switch, Route } from "react-router-dom";
import { fetchData } from "./apiCalls";
//{"Aatrox":{"version":"12.18.1","id":"Aatrox","key":"266","name":"Aatrox"
// ,"title":"the Darkin Blade",
// "blurb":"Once honored defenders of Shurima against the Void, Aatrox and his brethren would 
// eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...",
// "info":{"attack":8,"defense":4,"magic":3,"difficulty":4},
// "image":{"full":"Aatrox.png","sprite":"champion0.png",
// "group":"champion","x":0,"y":0,"w":48,"h":48},"tags":["Fighter","Tank"],
// "partype":"Blood Well","stats":{"hp":650,"hpperlevel":114,"mp":0,"mpperlevel":0,"movespeed":345,
// "armor":38,"armorperlevel":4.45,"spellblock":32,"spellblockperlevel":2.05,"attackrange":175,
// "hpregen":3,"hpregenperlevel":1,"mpregen":0,"mpregenperlevel":0,"crit":0,
// "critperlevel":0,"attackdamage":60,"attackdamageperlevel":5,
// "attackspeedperlevel":2.5,"attackspeed":0.651}}
// Champion: {
//     version: string,
//     id: string,
//     key: string,
//     name: string,
//     title: string,
//     blurb: string,
//     info: {
//         attack: number,
//         defense: number,
//         magic: number,
//         difficulty: number
//     },
//     image: {
//         full: string,
//         sprite: string
//     },
//     group: string,
//     partype: string,
//     stats: {
//         hp: string,
//         hpperlevel: number,
//         mp: number,
//         mpperlevel: number,
//         movespeed: number,
//         armor: number,
//         armorperlevel: number,
//         spellblock: number,
//         spellblockperlevel: number,
//         attackrange: number,
//         hpregen: number,
//         hpregenperlevel: number,
//         mpregen: number,
//         mpregenperlevel: number,
//         crit: number,
//         critperlevel: number,
//         attackdamage: number,
//         attackdamageperlevel: number,
//         attackspeedperlevel: number,
//         attackspeed: number
//     },
interface AppProps {
    Champions: []
}
const App: React.FC = () => {
    const [appState, setAppState] = useState<AppProps>({
        Champions: []

    })
    useEffect(() => {
        fetchData().then((json) =>
            setAppState({ Champions: json.data })
        );
    }, []);
    return (
        <div className="App">
            <h1>It's kind of working!</h1>
        </div>
    )
}
export default App;