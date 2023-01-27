import React, { useEffect } from 'react'
import Apiservices from '../../services/ApiServices'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <form onSubmit={handelSearch} className="search-from">
      <input
        value={textSearch}
        onChange={(e) => setTextSearch(e.target.value)}
        placeholder={t("search")}
        type="text"
      />
      <button>{t("search")}</button>
    </form>
  )
}

export default InputSearch
