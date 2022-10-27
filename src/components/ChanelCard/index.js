import React from 'react';
import './chanelCard.scss';

const ChanelCard = ({card}) => {
    return (
        <div className="chanelCard">
            <img src={card.image} alt=""/>
            <span className="chanelCard__title">{card.title}</span>
        </div>
    );
};

export default ChanelCard;