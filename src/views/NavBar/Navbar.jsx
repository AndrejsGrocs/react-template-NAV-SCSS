import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
            <ul className='nav-list'>
        {( 
            <>
            <li><Link to='/' activeclassname='active' className='nav-link'> Home</Link></li>
            <li><Link to='/page1' activeclassname='active' className='nav-link'> Page 1</Link></li>
            <li><Link to='/page2' activeclassname='active' className='nav-link'> Page 2</Link></li>
            <li><Link to='/page3' activeclassname='active' className='nav-link'> Page 3</Link></li>
           
        
          
               </>
        )}
       
        </ul>
    
    
    </div>
  )
}
