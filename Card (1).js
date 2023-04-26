import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default function Card(props) {
  return (
    <>
    <div className="containerr">
    <div className="card" >
  <img src={props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.detail}</p>
    <Link to="/Cart" className="btn btn-primary">{props.button}</Link>
  </div>
</div>




</div>
    </>
  )
}
