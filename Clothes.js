import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Card from './Card'
import Pagination from './Pagination'
import Crauusel from './Crauusel'
export default function Clothes() {
  return (
    <>
    <Navbar/>
    <Crauusel/>
    <div className='con'>
    <Card image = 'https://tse3.mm.bing.net/th?id=OIP.obi3X73hahF9hBFIWf53nAHaJM&pid=Api&P=0' title = 'Dress Shirt' detail = 'Dress Shirt' button = 'Add to Cart'/>
    <Card image = 'https://tse4.mm.bing.net/th?id=OIP.N3y0neokyrmg4y-pKWKffQHaLV&pid=Api&P=0' title = 'Frock' detail = 'Frock' button = 'Add to Cart'/>
    <Card image = 'https://tse3.mm.bing.net/th?id=OIP.5OQHtEWyZwlKEzDALeJeVwHaLH&pid=Api&P=0' title = 'Kurta' detail = 'Kurta' button = 'Add to Cart'/>
    </div>

    <Pagination/>
    <Footer/>
    </>
  )
}
