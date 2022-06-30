import React from "react";
import { Card }  from './Card'
import {cards} from '../data/data.js'

export const ListOfCards = () => {
    

    return (
        <div>
            {cards.map(({image, title, information, link, classCard}) => <Card key={title} image = {image} title = {title} information = {information} link = {link} classCard = {classCard}/>)}
        
        </div>
    );
};
