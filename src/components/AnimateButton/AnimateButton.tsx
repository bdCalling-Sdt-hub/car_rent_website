import React from 'react'
import {motion} from 'framer-motion'

const AnimateButton = ({children} : {children : React.ReactNode}) => {
  return (
    <motion.button 
    animate={{
      scale: [1, 1.2, 1, 1.2, 1], 
    
    }}
    whileTap={{
      scale: 0.95,
      backgroundColor: "#0CB5E8",
    }}
    transition={{
      duration: 5, 
      repeat: Infinity, 
      repeatType: "loop", 
      ease: "easeInOut", 
    }}
    className="px-6 py-3 bg-[#0CFEE8] text-black rounded-md shadow-lg  border-2 border-transparent hover:border-[#0CFEE8] focus:outline-none transform origin-center"
  >
    {children}
  </motion.button>
  )
}

export default AnimateButton