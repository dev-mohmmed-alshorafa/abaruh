import React from 'react'
import useOutsideClick from '../../hook/UseOutsideClick';
import InputSearch from './InputSearch';

function Search({isSearch,setIsSearch,textSearch,setTextSearch,setProducts,setIsLoading}) {
  const handleClickOutside = () => {
    setIsSearch('search')
  };
  const openSearch=()=>{
    setIsSearch('search-continuer')
  }
  const ref = useOutsideClick(handleClickOutside);

  return (
 <div className={isSearch} >

 <div ref={ref} >
      <button style={{display: isSearch==='search-continuer'?'none':'block'}}
       onClick={openSearch} htmlFor="inputSearch">   
         <img src="./icons/search.png" alt="" />
      </button>
{isSearch==='search-continuer'?<InputSearch
setIsSearch={setIsSearch}
 textSearch={textSearch}
 setIsLoading={setIsLoading}
        setProducts={setProducts}
         setTextSearch={setTextSearch}/>:''}
     
 
    </div>
    </div>
   
   
  )
}

export default Search
