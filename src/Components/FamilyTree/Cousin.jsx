import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>{name}</h2>
            {
                name==='Tom' && <Special asset={ asset}></Special>
            }
            {
                name==='Jarrey' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;