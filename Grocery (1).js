import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Card from './Card'
import Pagination from './Pagination'
import Crauusel from './Crauusel'

export default function Grocery() {
  return (
    <>
    <Navbar/>
    <Crauusel/>
    <div className='con'>
    <Card image = 'https://tse4.mm.bing.net/th?id=OIF.ojfSNVX9fuFAr72NHQkPJQ&pid=Api&P=0' title = 'Food Preparation' detail = 'Food Preparation' button = 'Add to Cart'/>
    <Card image = 'https://tse1.mm.bing.net/th?id=OIP.zMuzDttI_WWW8yK-J5aZPAHaEo&pid=Api&P=0' title = 'JAM' detail = 'JAM keep your Breakfast healthy' button = 'Add to Cart'/>
    <Card image = 'https://tse4.mm.bing.net/th?id=OIP.37PbILp53aPsJUu-TrLjcgHaEK&pid=Api&P=0' title = 'Lays' detail = 'Lays' button = 'Add to Cart'/>
    </div>

    <Pagination />
    <Footer/>
    </>
  )
}
