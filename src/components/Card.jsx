import React from 'react'

const Card = () => {
  return (
    <div>
        <div className="card" style={{ width: "18rem" }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrD61WPfd_39zCAKmo0DatnyZf9VZXiNqvA&s" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            this is some important text
          </p>
          <div className="container w-100">
            <select className="m-2 h-100  bg-success rounded" id="">
              {Array.from(Array(6) , (e,i)=>{
                return(
                  <option key={i+1} value={i+1}>{i+1}</option>
                )
              })}
            </select>
            <select className="m-2 h-100  bg-success rounded" id="">
         <option value="half">half</option>
         <option value="full">full</option>
            </select>
            <div className="d-inline h-full fs-5">Total Price </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Card
