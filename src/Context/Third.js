import React from 'react'
import  {mycontext,mycontext2} from './Usecontext'

const Third = () => {
  return (
    <div>
      <mycontext.Consumer>
        {
          (name)=>{
            return(
              <mycontext2.Consumer>
                {
                  (lastname)=>{
                    return(
                      <div>
                      <h1>{name}</h1>
                       <h1>{lastname}</h1>
                      </div>
                    )
                  }
                }

              </mycontext2.Consumer>

            )

          }
        }

      </mycontext.Consumer>
    </div>
  )
}

export default Third
