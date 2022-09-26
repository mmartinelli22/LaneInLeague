import React from "react";
import { Champion } from "../appFolder/app";
import "./single-champion.css";
export interface IndividualChampionProps {
    champion: Champion;
    index: number;
}

export const IndividualChampion: React.FC<IndividualChampionProps> = ({ champion, index }) => {
    const imgPrefix = 'http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/';
    return (
        <div className="single-champion">
            <h1>{champion.name}</h1>
            <h2>{champion.title}</h2>
            <img className="champion-img"
                key={`${champion.id}-${index}`}
                id={champion.id}
                title={champion.title}
                src={`${imgPrefix}${champion.image.full}`}
            />

        </div>
    )
}
export default IndividualChampion;