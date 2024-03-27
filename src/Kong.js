import React from 'react'
// import './component/Kong.module.css'
import "./App.css"

const Kong = () => {
  return (
    <div>



      <div className='container-fluid' style={{height:"100vh",overflowY:"hidden"}} >
        <div className='row'>
          <div className='col-lg-2 kak ' style={{borderRight:'1px solid rgb(178, 178, 178)' }} >
            <div>
              <div className='container text-center py-2'>

                <div>
                  <div className='col-2 '><h4 className='d-flex'><i class="fa-regular fa-square text-primary"></i>TaskMinder.</h4></div>
                  <div >
                    <button style={{ padding: '10px 40px', border: '0', marginTop: '6vh', backgroundColor: 'rgb(238, 242, 252)', color: 'rgb(102, 125, 171)' }}><i class="fa-brands fa-slack"></i>Dashboard</button>
                  </div>
                  <div>
                    <button style={{ padding: '10px 47px', border: '0', marginTop: '5vh', backgroundColor: 'rgb(238, 242, 252)', color: 'rgb(102, 125, 171)' }}><i class="fa-solid fa-folder-open"></i>Projects</button>
                  </div>
                  <div>
                    <button style={{ padding: '10px 57px', border: '0', marginTop: '5vh', backgroundColor: 'rgb(37, 99, 220)', color: 'white' }}><i class="fa-solid fa-list-check"></i>Tasks</button>
                  </div>
                  <div>
                    {/* const ref = React.createRef() */}
                    <button style={{ padding: '10px 45px', border: '0', marginTop: '5vh', backgroundColor: 'rgb(238, 242, 252)', color: 'rgb(102, 125, 171)' }}><i class="fa-solid fa-calendar"></i>Calender</button>
                  </div>
                  <div>
                    <button style={{ padding: '5px 45px', border: '0', marginTop: '40vh', backgroundColor: 'rgb(253, 240, 236)', color: 'rgb(144, 66, 41)' }}><i class="fa-solid fa-arrow-left"></i>Log out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-10 ' style={{height:"100vh",overflowY:"auto"}} >
            <div className='col-12 sticky top-0 '>
              <nav class="container-fluid navbar navbar-expand-lg bg-body-tertiary" style={{borderBottom:'1px solid rgb(178, 178, 178)'}}>
                <div class="container">
                <input className='px-3' style={{width:'60vw',height:'7vh'}} type='text' placeholder='Search' />
                  <button class="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                        <div className=' d-flex gap-3 '>
                      <div><i class="fa-regular fa-bell"></i>
                      </div>
                      <div><img style={{ width: "30px", borderRadius: "30%" }} src='https://s3-alpha-sig.figma.com/img/27b9/c1fb/d923aea2c9f6ef3ae9d600875eee5090?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mIdoujUtUZ0VSqhxxMwE~yycaZvC1v7BRXNmTXNYkFFSpn6dsgmyOGpXqsYNDGzzFg3GsslXmF4rEttX93fSaBexO~WR8G50AeY1Bou2LBMa7mVIC-AcXx4rMIUbIAvgpeDOIETHHl1meDzDPeS~5DPZTPShxJJ4P9fgDsGqrGXV5KRaaPL1IC4wCTXxrPfoIolX9LT7pQSUy2FFyg3x2Su6bD7G6E7FHEQfW5vH1LUg9uEhJaR2JvoiovAaY-N2bp7F8puLzp9-ix83kELc5Is474v0jKn93FdGh~bMhSI5GX~sYq1OUrLAuvBm81eqTbkL51oFbAhB9YmaNzZOYQ__' /></div>

                    </div>
                        </a>
                      </li>
                      {/* <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </nav>


            </div>

            <div className='col-lg-12 align-item-center ' style={{ marginTop: "25vh" }}>
              <div className='row'>
                <div className='col-lg-8'><h3>Tasks</h3></div>
                <div className='col-lg-4'>
                  <div className=' d-flex gap-4'><div><i class="fa-solid fa-arrow-left"></i></div><div><i class="fa-solid fa-arrow-right"></i></div><div><i class="fa-solid fa-user"></i></div><div><i class="fa-solid fa-list"></i></div><div><button className='btn btn-primary'>New Task <i class="fa-solid fa-plus"></i></button></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 sc' style={{rowGap:'3'}} >
              <div className='row'>
                <div className='col-lg-4 mt-5' >
                  <div>
                    <div class="container card pt-2" style={{ backgroundColor: 'rgb(238, 242, 252)' }} >
                      <h5 class="card-title" style={{ color: 'rgb(20, 54, 123)' }} ><i class="fa-regular fa-square "></i>To do</h5>
                      <div className='bg-white p-2'>
                        <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                        <div class="card-body">
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                      <div className='bg-white p-2 mt-3'>
                        <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                        <div class="card-body">
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                      <div className='bg-white p-2 mt-3'>
                        <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                        <div class="card-body">
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                      <div className='bg-white p-2 mt-3'>
                        <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                        <div class="card-body">
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                      <div className='bg-white p-2 mt-3'>
                        <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                        <div class="card-body">
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                      <div className='bg-white p-2 mt-3'>
                        <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                        <div class="card-body">
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  {/* <div className='col-lg-4' > */}

                  <div className='mt-5'>
                    <div class="container card pt-2" style={{ backgroundColor: 'rgb(255, 246, 235)' }} >
                      <h5 class="card-title" style={{ color: 'rgb(143, 79, 0)' }} ><i class="fa-solid fa-bars-progress"></i> In progress</h5>
                      <div className='bg-white p-2'>
                        <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                        <div class="card-body">
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                      <div className='bg-white p-2 mt-3'>
                        <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                        <div class="card-body">
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                      <div className='bg-white p-2 mt-3'>
                        <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                        <div class="card-body">
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                      <div className='bg-white p-2 mt-3'>
                        <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                        <div class="card-body">
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                      <div className='bg-white p-2 mt-3'>
                        <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                        <div class="card-body">
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                      <div className='bg-white p-2 mt-3'>
                        <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                        <div class="card-body">
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
                <div className='col-lg-4' style={{ marginTop: "35px" }}>
                  <div class="container card mt-2 pt-2" style={{ backgroundColor: 'rgb(253, 240, 236)' }} >
                    <h5 class="card-title" style={{ color: 'rgb(160, 91, 70)' }} ><i class="fa-regular fa-square-check"></i> Done</h5>
                    <div className='bg-white p-2'>
                      <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                      <div class="card-body">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                    <div className='bg-white p-2 mt-3'>
                      <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                      <div class="card-body">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                    <div className='bg-white p-2 mt-3'>
                      <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                      <div class="card-body">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                    <div className='bg-white p-2 mt-3'>
                      <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                      <div class="card-body">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                    <div className='bg-white p-2 mt-3'>
                      <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                      <div class="card-body">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                    <div className='bg-white p-2 mt-3'>
                      <div className='d-flex justify-content-between'><div><img style={{ width: '30px', borderRadius: '30px' }} src="https://s3-alpha-sig.figma.com/img/ac4a/a684/1db0843a7aa0de3a51d8daccee7471c7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BTNnhMJy6U--yqx~klV3j9wy7sjijcIGMWJYERCEIjGCbkGiLKhkXXFWwVyaVepGCnEHzYVoA75gIGYuXEdFJ4gWn~CRSSOvvCagAzBrx3LhpdfLSeVwYZBFE99A0HjqfZvM-5dUzBN4wBxAVOsUWQxP2A9RkqcRxByz~6KuRZlX-amcUkgZ6yz-RNktjRWQeDe88R5ghDjGjkdMDcPGSwh5xpiLnXHfTDwRIFJ92ScOhjzoLQ9jxIHlGn75jHeHnA99PzLYQ0VJlCkVAEmH1llVmsInJbxVqn0dl1VWOAmYYAEDlxrA-6v9oGsz43mILNUInSOlipb5TTal-qXA__" class="card-img-top" alt="..." /></div><div><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash"></i></div></div>
                      <div class="card-body">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>




          </div>


        </div>

      </div>
    </div>
  )
}

export default Kong
