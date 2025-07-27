import React from "react";

const Carousel = () => {
  return (
    <div className="w-full max-h-[400px]" overflow-hidden style={{objectFit: "contain !important"}}>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide h-[20vh]"
        data-ride="carousel"
      >
        <div className="carousel-inner  h-[20vh]">
          <div className="carousel-caption ">
         <form className="flex items-center space-x-2">
  <input
    className="form-control mr-sm-2 w-[200px]"
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
    Search
  </button>
</form>

          </div>
          <div className="carousel-item active  h-[20vh]">
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1500&q=80"
              className="d-block w-100  h-[20vh] object-cover"
              alt="Mountain Landscape"
            />
          </div>
          <div className="carousel-item  h-[20vh]">
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1500&q=80"
              className="d-block w-100  h-[20vh] object-cover"
              alt="Beach View"
            />
          </div>
          <div className="carousel-item  h-[20vh]">
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1500&q=80"
              className="d-block w-100  h-[20vh] object-cover"
              alt="City Skyline"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
