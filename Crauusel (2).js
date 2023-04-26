import React from 'react'

export default function crausel() {
  return (
    <>
    <div className="container" >
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img id='img1' src="https://tse1.mm.bing.net/th?id=OIP.29w_-FKG94i8vYJVVG_EBwHaEK&pid=Api&P=0" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img id='img1' src="https://tse3.mm.bing.net/th?id=OIP.7q-WfBZdAb6hLCPJBfn9SQHaEK&pid=Api&P=0" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img id='img1' src="https://tse1.mm.bing.net/th?id=OIP.5DpCX5iv4DmxRAE86zkosQHaEO&pid=Api&P=0" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img id='img1' src="https://tse1.mm.bing.net/th?id=OIP.pNq-VLw3GgwK8JxxXTYFeAHaEK&pid=Api&P=0" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img id='img1' src="https://tse4.mm.bing.net/th?id=OIP.VjPMP_zF913JbJFsW4oPqgHaEK&pid=Api&P=0" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    </>
  )
}
