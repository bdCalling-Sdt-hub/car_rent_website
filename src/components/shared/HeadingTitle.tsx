import React from 'react'

const HeadingTitle = ({ title }: { title: string }) => {
    return (
        <div className="relative inline-block px-2"> 
            <span className="text-5xl font-bold text-black relative z-10 font-lora">
                {title}
            </span>
            <span className="absolute inset-0 bg-blue-100 h-3/5 bottom-0  top-6  z-0"></span>
        </div>
    )
}

export default HeadingTitle