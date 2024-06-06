import React, { useState,useEffect } from 'react'



const One = () => {
    const [count,setcount]=useState([])

  // const Data =[
  //   {
  //     url:require('../../../Assets/pexels-photo-7455371.jpeg'),
  //     h5:'Card title',
  //       p:'Some quick example',
  //       bu:'Go somewhere',
  //   },
  //   {
  //     url:require('../../../Assets/pexels-photo-7455371.jpeg'),
  //     h5:'Card title',
  //       p:'Some quick example',
  //       bu:'Go somewhere',
  //   },
  //   {
  //     url:require('../../../Assets/pexels-photo-7455371.jpeg'),
  //     h5:'Card title',
  //       p:'Some quick example',
  //       bu:'Go somewhere',
  //   },
  // ]

  const getApi= (()=>{
   try {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("https://fakestoreapi.com/products", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setcount(result)
      })
      .catch((error) => console.error(error));
   } catch (error) {
    console.log("error")
   }
  })

    useEffect(()=>{
      getApi()
    },[])
  return (

      
    <div>


      
      {
        count.map((index) => {
          return (

            <div class="card w-25 p-5 m-5" >
                <h5 class="card-title">{index.id}</h5>
              <img  src={index.image} class="card-img-top " alt="..." />
              <div class="card-body">
                <p class="card-text">{index.title}</p>
                <p class="card-text">{index.description}</p>
                <p class="card-text">{index.category}</p>
                <a href="#" class="btn btn-primary">{index.rating.rate}</a>  
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default One