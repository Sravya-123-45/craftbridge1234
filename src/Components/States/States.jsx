import React from 'react';
import './States.css';
// import { AP } from './AP/AP';
import  StateCard  from '../StateCard/StateCard'
import SearchResults from '../Search/SearchResults';
import { useSearch } from '../Search/SearchContext';

export const States = () => {
  const { searchQuery } = useSearch();
  const stateNames=["AP", "Karnataka", "Kerela", "Maharashtra", "Odisha", "Rajasthan", "TamilNadu","Goa","Assam","Punjab","Chattisgarh","West-Bengal","Gujarat","Bihar","Arunachal-Pradesh","Jharkhand","Sikkim","Meghalaya","UttarPradesh","Mizoram","Nagaland","MadhyaPradesh","Delhi"]
  return (
    <>
    {searchQuery.trim() ? (
      <SearchResults />
    ) : (
      <div className='d-flex flex-wrap'>
      {stateNames.map((stateName) => {
          return (<StateCard style={{}} stateName={stateName}/>)
      })}
      </div>
    )}
      {/* <li className='Andhra Pradesh'>
        <Link className="Andhra Pradesh" to="/AP">Andhra Pradesh</Link>
      </li>

      <li className='Karnataka'>
        <Link className="Karnataka" to="/Karnataka">Karnataka</Link>
      </li>

      <li className='Kerala'>
        <Link className="Kerala" to="/Kerala">Kerala</Link>
      </li>

      <li className='Maharashtra'>
        <Link className="Maharashtra" to="/Maharashtra">Maharashtra</Link>
      </li>

      <li className='Rajasthan'>
        <Link className="Rajasthan" to="/Rajasthan">Rajasthan</Link>
      </li>

      <li className='Tamil Nadu'>
        <Link className="Tamil Nadu" to="/TamilNadu">Tamil Nadu</Link>
      </li>

      <li className='Odisha'>
        <Link className="Odisha" to="/Odisha">Odisha</Link>
      </li> */}


    </>
  )
}