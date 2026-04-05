import React, { createContext, useState } from 'react';
import Granpa from './Granpa';
import './FamilyTree.css'

export const AssestContext=createContext('');
export const MoneyContext= createContext(0);

const FamilyTree = () => {
    const [money, setMoney]=useState(0)
    const asset ='diamond';
    const newAsset='gold'
    return (
        <div className='family-tree'>
          <h2>Family Tree</h2>
        <h3>Total Family Money: {money}</h3>
        <MoneyContext value={[money, setMoney]}>
              <AssestContext.Provider value={newAsset}>
    <Granpa  asset={asset}></Granpa> 
    </AssestContext.Provider> 
        </MoneyContext>
        
        </div>
    );
};

export default FamilyTree;



/****
 * 1. create a context using createContext with a default value
 * make sure you export the context to be used in other files.
 * 
 * 
 * 
 * 
 */

