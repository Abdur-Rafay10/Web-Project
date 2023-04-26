import React from 'react'
import Navbar from './Navbar'
import Crauusel from './Crauusel'
import Card from './Card'
import Pagination from './Pagination'
import Footer from './Footer'

export default function Home() {
  return (
   <>
        <Navbar/>
        <Crauusel/>
        <div className="con">
        <Card image = "https://tse2.mm.bing.net/th?id=OIP.stDexrmRf2Dq5sucetkHqQHaEK&pid=Api&P=0" title="Assistant" detail = "Assistant Help you to get rid of problems.One can spend time with it." button = "Add to Cart"/>
        <Card image = "https://tse4.mm.bing.net/th?id=OIP.HnrSqMshZVvp-Cgcks_9nAHaHa&pid=Api&P=0" title="Apple Watch" detail = "Apple Watch is comfortable to wear. It also connects you with Loved ones." button = "Add to Cart"/>
        <Card image = "https://tse3.mm.bing.net/th?id=OIP.WQr8Bd1n47G7akmPDXdaswHaE8&pid=Api&P=0" title="Laptop" detail = "Laptop is need of today. You can carry it with yourself everywhere." button = "Add to Cart"/>
        <Card image = "https://tse4.mm.bing.net/th?id=OIP.SCuaCL__LC2M4e6hgMNaYAHaHa&pid=Api&P=0" title="Maskara" detail = "Makeup." button = "Add to Cart"/>
         <Card image = "https://tse2.mm.bing.net/th?id=OIP.HT4SMFERymOX3vI1HUAtIAHaHa&pid=Api&P=0" title="Eye Lashes" detail = "Makeup." button = "Add to Cart"/>
         <Card image = "https://tse2.mm.bing.net/th?id=OIP.pibPpXz31BdnQ5_S_iHYTgHaE8&pid=Api&P=0" title="Makeup Toolkit" detail = "Makeup." button = "Add to Cart"/>
        </div>
        <Pagination/>
        <Footer/>
   </>
  )
}
