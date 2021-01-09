
import React from 'react'

import './Layout.css'

const Layout = ({children}) => {
    return (
       <div className = 'app_container'>
            {children}
       </div>
    )
}

export default Layout