import React,{memo} from 'react'
// import Memo from './../Memo';

const ChildCallback = ({demo,count}) => {
  console.log("hii");
  return (
    <div>
      {/* <h1>hii</h1> */}
    </div>
  )
}

export default memo(ChildCallback)
