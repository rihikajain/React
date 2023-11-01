// src/components/DestinationList.js
import React from 'react';
import DestinationCard from './DestinationCard';

const DestinationList = ({ destinations }) => {
    return (
        <div className="destination-list">
            {destinations.map((destination, index) => (
                <DestinationCard key={index} destination={destination} />
            ))}
        </div>
    );
};

export default DestinationList;
