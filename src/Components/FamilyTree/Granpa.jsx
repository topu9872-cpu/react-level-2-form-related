import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Granpa = ({asset}) => {
    return (
        <div>
            <h2>Granpa</h2>
            <section className='flex'>
                <Dad asset={asset}></Dad>
                <Uncle></Uncle>
                <Aunt asset={ asset}></Aunt>
            </section>
        </div>
    );
};

export default Granpa;