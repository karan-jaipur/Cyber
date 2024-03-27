import React from 'react'

const Footer = () => {
  return (
    <div className='footbg'>
      <div className='container py-4'>
        <div className='row'>
          <div className='col-lg-4 col-md-12 col-sm-12'>
          <img className='rounded-5' style={{width:'180px'}} src='https://images.pexels.com/photos/7176246/pexels-photo-7176246.jpeg?auto=compress&cs=tinysrgb&w=600' />
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <h2 className='c'>Home</h2>
            <h3 className='d'>Colours</h3>

          </div>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <h2 className='c'>Coffee</h2>
            <h3 className='d'>Americano</h3>
            <h3 className='d'>cappuccino</h3>
            <h3 className='d'>espresso</h3>
            <h3 className='d'>lungo</h3>
            <h3 className='d'>ristretto</h3>
          </div>
          {/* <div className='col-lg-3 col-md-12 col-sm-12'></div> */}
        </div>
      </div>
    </div>
  )
}

export default Footer
