import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Detail from './Detail';
export default function Card(props) {
  function goto(){
    <Link to='/Detail'></Link>
  }
  return (
    <>
    <div className="containerr">
    <div className="card" >
 <Link to="/Detail"> <img src={props.image} className="card-img-top" alt="..."/></Link>
  <div className="card-body">
  <Link to="/Detail">  <h5 style={{cursor:'pointer'}} className="card-title">{props.title}</h5> </Link>
    <p className="card-text">{props.detail}</p>
    <Link to="/Cart" className="btn btn-primary">{props.button}</Link>
  </div>
</div>




</div>
    </>
  )
}
