import React from 'react';
import Link from 'next/link'

const Nav = () => {

    return (
        <ul className="mainmenu">
            <li className="menu-item-has-children">
                <Link href="/categoria/tecnologia">
                    Tecnologia
                </Link>
            </li>
            <li className="menu-item-has-children">
                <Link href="/categoria/gadgets">
                    Gadgets
                </Link>
            </li>
            <li className="menu-item-has-children">
                <Link href="/categoria/programacion">
                    Programacion
                </Link>
            </li>
            <li className="menu-item-has-children">
                <Link href="/cateogria/diseno_web">
                    Diseño Web
                </Link>
            </li>
        </ul>
    );
}

export default Nav;
