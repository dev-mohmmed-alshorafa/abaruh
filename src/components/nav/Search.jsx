import React from 'react'
import useOutsideClick from '../../hook/UseOutsideClick';
import InputSearch from './InputSearch';
import { useState } from 'react';

function Search({isSearch,setIsSearch}) {
  const handleClickOutside = () => {
    setIsSearch('search')

  };
  const openSearch=(e)=>{
    e.preventDefault()
    setIsSearch('search-active')
  }
  const ref = useOutsideClick(handleClickOutside);

  return (
    <div   ref={ref} >
      <form className={isSearch} action="">
      <input className='input-search'  id="inputSearch" name="inputSearch" type="text" />

      <label onClick={openSearch} htmlFor="inputSearch">   
         <img src="./icons/search.png" alt="" />
</label>
     
      </form>
      <InputSearch/>
 
    </div>
   
  )
}

export default Search
