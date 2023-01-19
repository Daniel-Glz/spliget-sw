import React from 'react';
import Link from 'next/link'

const Nav = () => {

    return (
        <ul className="mainmenu">
            <li className="menu-item-has-children">
                <Link href="/">
                    Inicio
                </Link>
            </li>
            <li className="menu-item-has-children">
                <Link href="/categoria/wordpress">
                    Wordpress
                </Link>
            </li>
            <li className="menu-item-has-children">
                <Link href="/categoria/javascript">
                    Javascript
                </Link>
            </li>
            <li className="menu-item-has-children">
                <Link href="/categoria/css">
                    CSS
                </Link>
            </li>
        </ul>
    );
}

export default Nav;
