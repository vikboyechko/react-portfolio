// This component is the navigation bar that is displayed on every page of the website. It uses the Link component from react-router-dom to navigate between pages.

import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    const currentPage = useLocation().pathname;

    return (
        <>
            <nav className='menu'>
                <h2 className='title-item'>Vik Boyechko</h2>
                <ul>

                    {/* Home page */}
                    <li className='nav-item'>
                        <Link to='/' className={currentPage === '/' ? 'nav-link-active' : 'nav-link'}>About</Link>
                    </li>

                    {/* Portfolio page */}
                    <li className='nav-item'>
                        <Link to='/Portfolio' className={currentPage === '/Portfolio' ? 'nav-link-active' : 'nav-link'}>Portfolio</Link>
                    </li>

                    {/* Resume page */}
                    <li className='nav-item'>
                        <Link to='/Resume' className={currentPage === '/Resume' ? 'nav-link-active' : 'nav-link'}>Resume</Link>
                    </li>

                    {/* Contact page */}
                    <li className='nav-item'>
                        <Link to='/Contact' className={currentPage === '/Contact' ? 'nav-link-active' : 'nav-link'}>Contact</Link>
                    </li>
                </ul >
            </nav>
        </>
    )
}