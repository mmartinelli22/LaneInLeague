import React from "react";
import { Champion } from "../appFolder/app";
import IndividualChampion from "../individual-champion/single-champion";
export interface LoadCharactersProps {
    characters: Champion[];
}

export const ChampionsLoad: React.FC<LoadCharactersProps> = ({ characters }) => {
    const featureChampions = characters.map((character, index,) => {
        return (
            <IndividualChampion
                champion={character}
                index={index}
                key={`${character.id}-${index}`}

            />
        )
    })
    return <div className="champion-container">{featureChampions}</div>;
}