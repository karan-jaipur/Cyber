import React from 'react'
import Home from './Holi/Home'
import Coffee from './Holi/Coffee'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Coffee' element={<Coffee/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



// import React from 'react'
// import Prop from './Prop'
// import Memo from './component/Memo'
// import Callback from './component/Callback/Callback'
// import Call1 from './component/Callback/Call1'
// import Lot from './Lot'

// // import Lottie from 'react-lottie-player'

// const App = () => {
//   return (
//     <div>
//      <Lot/>
//             {/* <Call1/> */}
//       {/* <Callback/> */}
//       {/* <Memo/> */}
//     </div>
//   ) 
// }

// export default App




// // import React from 'react'
// // // import Card from './component/Card'
// // // import Card2 from './component/Card2'
// // // import UseState from './component/Usestate'
// // // import Props from './component/Props'
// // // import King from './King'
// // // import Kong from './Kong'
// // import Third from './component/Third'
// // import Useeffect from './component/Useeffect'
// // import Useefftabs from './component/Useefftabs'
// // import Useeffect_form from './component/Useeffect_form'
// // import Memo from './component/Memo'


// // const App = () => {
// //   return (
// //     <div>
// //      {/* <Memo/> */}
// //       {/* <Useeffect_form/> */}
// //       <Useefftabs/>
// //       {/* <Useeffect/> */}
// //       {/* <Useeffect/> */}
// //       {/* <Third/> */}
// //       {/* <UseState/> */}
// //       {/* <Card2/>   */}
// //       {/* <Props /> */}
// //       {/* <King /> */}
// //       {/* <Kong/> */}
// //     </div>
// //   )
// // }

// // export default App


// // ----------------------------------------------------------------
// // import React from 'react'
// // import Hello from './component/Hello'
// // import Karan from './component/Karan'
// // import Second from './component/Second'

// // import { BrowserRouter,Routes,Route} from 'react-router-dom'

// // const App = () => {
// //   return (
// //     <>
//     // <BrowserRouter>
//     // <Routes>
//     //   <Route path='/' element={<Hello/>}/>
//     //   <Route path='/karan' element={<Karan/>}/>
//     //   <Route path='/sec' element={<Second/>}/>
//     // </Routes>
//     // </BrowserRouter>
// //     </>
// //   )
// // }

// // export default App