import React from 'react';

const Directions = ({ dirs }) => {
    return dirs.map(dir => <h5 key={dir.id}>{dir.text}</h5>);
}

export default Directions;