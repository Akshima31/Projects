import React from 'react'
function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer className='footer '>
            <p className='footer-p'>&copy; Ink n Eternity. All Rights Reserved | Code by Akshima Kakkar</p>
        </footer>
    )
}

export default Footer