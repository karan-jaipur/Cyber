import React from 'react'
import './component/Kings.module.css'

const King = () => {
  return (
    
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2' style={{borderRight:'1px solid #EFEFEF'}}>
            <div ><h4 ><i class="fa-regular fa-square"></i>TaskMinder</h4></div>
          </div>
          
          <div className='container col-lg-7'>
            <div style={{ border: '1px solid #EFEFEF'}}><input style={{ border: '0', width: '46vw',height:'6vh' }} type='text' placeholder='Search' /><i class="fa-solid fa-magnifying-glass"></i></div>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-1'>
            <div></div>
            <div  ><i class="fa-regular fa-bell"></i><img style={{ borderRadius: '30px', width: '30px', marginLeft: '20px' }} src='https://s3-alpha-sig.figma.com/img/27b9/c1fb/d923aea2c9f6ef3ae9d600875eee5090?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mIdoujUtUZ0VSqhxxMwE~yycaZvC1v7BRXNmTXNYkFFSpn6dsgmyOGpXqsYNDGzzFg3GsslXmF4rEttX93fSaBexO~WR8G50AeY1Bou2LBMa7mVIC-AcXx4rMIUbIAvgpeDOIETHHl1meDzDPeS~5DPZTPShxJJ4P9fgDsGqrGXV5KRaaPL1IC4wCTXxrPfoIolX9LT7pQSUy2FFyg3x2Su6bD7G6E7FHEQfW5vH1LUg9uEhJaR2JvoiovAaY-N2bp7F8puLzp9-ix83kELc5Is474v0jKn93FdGh~bMhSI5GX~sYq1OUrLAuvBm81eqTbkL51oFbAhB9YmaNzZOYQ__' /></div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-2 mySidebar' style={{borderRight:'1px solid #EFEFEF',background:"aqua"}}>
            <button style={{ padding: '10px 40px', border: '0', marginTop: '5vh' }}><i class="fa-brands fa-slack"></i>Dashboard</button>
            <button style={{ padding: '10px 47px', border: '0', marginTop: '5vh' }}><i class="fa-solid fa-folder-open"></i>Projects</button>
            <button style={{ padding: '10px 57px', border: '0', marginTop: '5vh' }}><i class="fa-solid fa-list-check"></i>Tasks</button>
            <button style={{ padding: '10px 45px', border: '0', marginTop: '5vh' }}><i class="fa-solid fa-calendar"></i>Calender</button>
            <button style={{ padding: '10px 45px', border: '0', marginTop: '40vh' }}><i class="fa-solid fa-arrow-left"></i>Log out</button>
          </div>
          <div className='col-lg-10' style={{ marginTop: '15vh' }}>
            <div className='row'>
              <div className='col-lg-4' >
                <div><h3>Tasks</h3></div>
                <div>
                  <div class="container card pt-2" style={{ backgroundColor: 'rgb(238, 242, 252)' }} >
                    <h5 class="card-title"><i class="fa-regular fa-square"></i>To do</h5>
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
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                {/* <div className='col-lg-4' > */}

                <div className='mt-5'>
                  <div class="container card pt-2" style={{ backgroundColor: 'rgb(255, 246, 235)' }} >
                    <h5 class="card-title"><i class="fa-solid fa-bars-progress"></i> In progress</h5>
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
                  </div>
                </div>
                {/* </div> */}
              </div>
              <div className='col-lg-4'>
                <div className=' d-flex gap-4'><div><i class="fa-solid fa-arrow-left"></i></div><div><i class="fa-solid fa-arrow-right"></i></div><div><i class="fa-solid fa-user"></i></div><div><i class="fa-solid fa-list"></i></div><div><button className='btn btn-primary'>New Task <i class="fa-solid fa-plus"></i></button></div>
                  <div>
                  </div>
                  </div>
                  <div class="container card mt-2 pt-2" style={{ backgroundColor: 'rgb(253, 240, 236)' }} >
                    <h5 class="card-title"><i class="fa-regular fa-square-check"></i> Done</h5>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='container d-flex justify-content-between' style={{ marginTop: '15vh' }}> */}







        </div>
      </div>
    // </div>
    // </div>














    // </div>






  )
}

export default King
