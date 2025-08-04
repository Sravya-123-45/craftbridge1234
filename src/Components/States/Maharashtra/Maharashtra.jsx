import React from 'react';
// import './AP.css'
import '../States';
import ArtworkCard from '../../ArtworkCard/ArtworkCard';

export const Maharashtra = () => {
    const artNames=["Warli Paintings","Ganjifa Cards","Jewellery of Kolhapur","Kolhapuri Chappals","Paithani Sari"];
    const desc=["asfsaf","agfasf","agfasf","agfasf","agfasf"]
    return (
        
        <div className='d-flex flex-wrap justify-content-center mx-5'>
         {artNames.map((artName,idx)=>{
            return (<ArtworkCard  currState="Maharashtra" desc={desc[idx]} idx={idx} artName={artName}/>)
        })}
        </div>
        
    )
}