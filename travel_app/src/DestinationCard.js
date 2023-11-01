// src/components/DestinationCard.js
import React from 'react';

const DestinationCard = ({ destination }) => {
    return (
        <div className="destination-card">
            <img src={destination.imageUrl} alt={destination.name} />
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
        </div>
    );
};

export default DestinationCard;
