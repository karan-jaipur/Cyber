import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '../src/Assets/Animation - 1711099544429.json'
import lottieJson1 from '../src/Assets/Animation - 1711099876349.json'

const Lot = () => {
  return (
    <div>
        <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 1000, height: 600 }}
    />
        <Lottie
      loop
      animationData={lottieJson1}
      play
      style={{ width: 1000, height: 600 }}
    />
    </div>
  )
}

export default Lot
