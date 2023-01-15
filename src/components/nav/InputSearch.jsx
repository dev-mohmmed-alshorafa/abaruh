import React, { useEffect } from 'react'
import Apiservices from '../../services/ApiServices'

function InputSearch({ textSearch, setTextSearch, setProducts, setIsSearch,setIsLoading }) {
  const handelSearch = (e) => {
    e.preventDefault()
    if (textSearch !== '') {
      setIsLoading(true)
      Apiservices.get(`/product?name[regex]=${textSearch}`).then((res) => {
        setProducts(res.data.data)
        setTextSearch('')
        setIsSearch('search')
        setIsLoading(false)
      })
    }
  }
  return (
    <form onSubmit={handelSearch} className="search-from">
      <input
        value={textSearch}
        onChange={(e) => setTextSearch(e.target.value)}
        placeholder="Search"
        type="text"
      />
      <button>search</button>
    </form>
  )
}

export default InputSearch
