import Footer from '@/components/shared/Footer'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=' mx-auto'>
            <h2>Navbar</h2>
            {children}
            <Footer />
        </div>
    )
}

export default layout 