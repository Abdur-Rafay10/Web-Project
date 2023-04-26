import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Card from './Card'
import Pagination from './Pagination'
import Crauusel from './Crauusel'
export default function Makeup() {
  return (
    <>
    <Navbar/>
    <Crauusel/>
    <div className='con'>
    <Card image = 'https://tse2.mm.bing.net/th?id=OIP.XsqqM8UYmLykSZlOkUkOxAHaEK&pid=Api&P=0' title = 'Lipstick' detail = 'Lipstick' button = 'Add to Cart'/>
    <Card image = 'https://tse2.mm.bing.net/th?id=OIP.TNY9rfHKOqzGgKDVdOZlRQHaFj&pid=Api&P=0' title = 'Eye Liner' detail = 'Eye Liner' button = 'Add to Cart'/>
    <Card image = 'https://tse1.mm.bing.net/th?id=OIP.1QamKGJ2tOfg4fVomQxCIAHaHa&pid=Api&P=0' title = 'MakeUp Toolkit' detail = 'MakeUp Toolkit' button = 'Add to Cart'/>
    </div>

    <Pagination/>
    <Footer/>
    </>
  )
}
