import React from 'react'
import Navbar from './Navbar'
import  Crauusel from './Crauusel'
import Card from './Card'
import Pagination from './Pagination'
import Footer from './Footer'

export default function Page3() {
  return (
    <>
    <Navbar/>
         <Crauusel/>
         <div className='con'>
        
        
         <Card image = "https://tse3.mm.bing.net/th?id=OIP.GdsmEn8czSf5NC2Onj9I2wAAAA&pid=Api&P=0" title="Dress Shirt" detail = "Dress Shirt." button = "Add to Cart"/>
         <Card image = "https://tse2.mm.bing.net/th?id=OIP.bZ5n6Jn96lAuBVTk2_1z2QHaJn&pid=Api&P=0" title="Frock" detail = "Ladies Frock." button = "Add to Cart"/>
         <Card image = "https://tse4.mm.bing.net/th?id=OIP.ULCLJqRwGAleDiKJTbCFuQHaJ4&pid=Api&P=0" title="Maksi" detail = "Ladies Maksi." button = "Add to Cart"/>
         <Card image = "https://tse4.mm.bing.net/th?id=OIP.d5eetRRlOrS5dDSN1PRoSAHaHa&pid=Api&P=0" title="Short Frock" detail = "Short Frock." button = "Add to Cart"/>
         <Card image = "https://tse1.mm.bing.net/th?id=OIP.bxJl3gp6I3Jg5O1U3UBVcgHaE7&pid=Api&P=0" title="Eye Shade" detail = "Makeup." button = "Add to Cart"/>
         <Card image = "https://tse1.mm.bing.net/th?id=OIP.zv10bWPwmFbuHgKGfK9gWgHaFj&pid=Api&P=0" title="Lipstick" detail = "Makeup." button = "Add to Cart"/>
         <Card image = "https://tse4.mm.bing.net/th?id=OIP.SCuaCL__LC2M4e6hgMNaYAHaHa&pid=Api&P=0" title="Maskara" detail = "Makeup." button = "Add to Cart"/>
         <Card image = "https://tse2.mm.bing.net/th?id=OIP.HT4SMFERymOX3vI1HUAtIAHaHa&pid=Api&P=0" title="Eye Lashes" detail = "Makeup." button = "Add to Cart"/>
         <Card image = "https://tse2.mm.bing.net/th?id=OIP.pibPpXz31BdnQ5_S_iHYTgHaE8&pid=Api&P=0" title="Makeup Toolkit" detail = "Makeup." button = "Add to Cart"/>
         </div>
         <Pagination/>
         <Footer/>
    </>
      )
}
