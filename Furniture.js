import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Card from './Card'
import Pagination from './Pagination'
import Crauusel from './Crauusel'
export default function Furniture() {
  return (
    <>
    <Navbar/>
    <Crauusel/>
    <div className='con'>
    <Card image = 'https://tse3.mm.bing.net/th?id=OIP.vtyeQtqG2Sy2a8LS5suacgHaEo&pid=Api&P=0' title = 'Round Couch' detail = 'Round Couch' button = 'Add to Cart'/>
    <Card image = 'https://tse2.mm.bing.net/th?id=OIP.sjxMNCL6Y7vzoYapEL2q-gHaFP&pid=Api&P=0' title = 'Bed' detail = 'Bed' button = 'Add to Cart'/>
    <Card image = 'https://tse2.mm.bing.net/th?id=OIP._Ll_DEQo9rFBvlb_lCDc0QHaEo&pid=Api&P=0' title = 'Table' detail = 'Table' button = 'Add to Cart'/>
    </div>

    <Pagination/>
    <Footer/>
    </>
  )
}
