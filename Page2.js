import React from 'react'
import Navbar from './Navbar'
import  Crauusel from './Crauusel'
import Card from './Card'
import Pagination from './Pagination'
import Footer from './Footer'

export default function Page2() {
  return (
   <>
   <Navbar/>
        <Crauusel/>
        <div className='con'>
       
        <Card image = "https://tse2.mm.bing.net/th?id=OIP.Kmrw7B9i7NrH0JOa4RjoWgHaE7&pid=Api&P=0" title="CPU" detail = "CPU is powerful to perform operations." button = "Add to Cart"/>
        <Card image = "https://tse3.mm.bing.net/th?id=OIP.VJvfikWQ_YOdY8lr6uxoIQHaGp&pid=Api&P=0" title="ToolBox" detail = "ToolBox help you to carry things with you." button = "Add to Cart"/>
        <Card image = "https://tse3.mm.bing.net/th?id=OIP.Up2pycgipPhxm0ZF3RF5GAHaHa&pid=Api&P=0" title="3D Motion" detail = "You enjoy 3d Motion Rides and Animations." button = "Add to Cart"/>
        <Card image = "https://tse3.mm.bing.net/th?id=OIP.-bEAhaYbzChg6LXpZeXXIQHaF3&pid=Api&P=0" title="USB" detail = "USB used to share data to Another device." button = "Add to Cart"/>
         <Card image = "https://tse4.mm.bing.net/th?id=OIP.YZaTYfw6hbXjrAov_jzxkgHaHa&pid=Api&P=0" title="Towels" detail = "Towel is important need of House." button = "Add to Cart"/>
         <Card image = "https://tse4.mm.bing.net/th?id=OIP.FOIRriF2wzEO2kbgV0NItAHaE7&pid=Api&P=0" title="MAT" detail = "It help you to do Exercise." button = "Add to Cart"/>
        </div>
        <Pagination/>
        <Footer/>
   </>
  )
}
