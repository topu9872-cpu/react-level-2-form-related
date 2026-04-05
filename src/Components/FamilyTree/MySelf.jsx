import React from 'react';
import Special from './Special';

const MySelf = ({ asset}) => {
    return (
        <div>
            <h2>MySelf is here</h2>
            <Special asset={ asset}></Special>
        </div>
    );
};

export default MySelf;