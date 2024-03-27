import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
// import Coffee from './Coffee';

const Coffee = () => {
  const cof = [
    {
      img:"https://images.pexels.com/photos/4195602/pexels-photo-4195602.jpeg?auto=compress&cs=tinysrgb&w=600",
      h2: 'Americano',
      h3: 'Price : ',
      h33: '$2883',
      butt: 'Buy Now'

    },
    {
      img:'https://images.pexels.com/photos/17428127/pexels-photo-17428127/free-photo-of-flower-and-coffee.jpeg?auto=compress&cs=tinysrgb&w=600',
      h2: 'Cappuccino',
      h3: 'Price : ',
      h33: '$2200',
      butt: 'Buy Now'

    },
    {
      img:'https://images.pexels.com/photos/17406794/pexels-photo-17406794/free-photo-of-flowers-and-coffee-glass-on-book.jpeg?auto=compress&cs=tinysrgb&w=600',
      h2: 'Espresso',
      h3: 'Price : ',
      h33: '$3420',
      butt: 'Buy Now'

    },
    {
      img:'https://images.pexels.com/photos/17401768/pexels-photo-17401768/free-photo-of-croissant-flowers-and-coffee-on-book.jpeg?auto=compress&cs=tinysrgb&w=600',
      h2: 'Lungo',
      h3: 'Price : ',
      h33: '$1520',
      butt: 'Buy Now'

    },
    {
      img:'https://images.pexels.com/photos/17391565/pexels-photo-17391565/free-photo-of-close-up-of-a-white-cup-of-coffee-with-milk.jpeg?auto=compress&cs=tinysrgb&w=600',
      h2: 'Ristretto',
      h3: 'Price : ',
      h33: '$2889',
      butt: 'Buy Now'

    },
    {
      img:'https://images.pexels.com/photos/17366783/pexels-photo-17366783/free-photo-of-heart-on-coffee.jpeg?auto=compress&cs=tinysrgb&w=600',
      h2: 'Kopi Luwak',
      h3: 'Price : ',
      h33: '$42,875',
      butt: 'Buy Now'

    },
  ]
  return (
    <div>
      <Nav/>
      <div className='container'>
        <h2 className='c'># Coffee's Types</h2>
        <h3 className='d'>1. Americano</h3>
        <h3 className='d'>2. cappuccino</h3>
        <h3 className='d'>3. espresso</h3>
        <h3 className='d'>4. lungo</h3>
        <h3 className='d'>5. ristretto</h3>
        <h3 className='d'>6. Kopi Luwak</h3>
      </div>

      <div className='container'>
        <div className='row'>
          {
            cof.map((index) => {
              return (
                <div className='col-lg-6 col-md-12 col-sm-12 p-5'>
                  <div class="card h-100 text-center">
                    <img src={index.img} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h2 class="card-title c">{index.h2}</h2>
                      <div className='d-flex justify-content-evenly'>
                        <div><h3 className='b'>{index.h3}</h3></div>
                        <div><h3>{index.h33}</h3></div>
                      </div>
                      <a href="#" class="btn btn-outline-primary">{index.butt}</a>
                    </div>
                  </div>
                </div>

              )
            })
          }
        </div>
      </div>
          <Footer/>













    </div>
  )
}

export default Coffee
