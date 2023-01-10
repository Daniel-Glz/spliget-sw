import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link'
import MenuData from '../../../data/mobilemenu/MenuData.json';

const MobileMenu = ({menuShow, menuHide}) => {
   const MenuToggleHandler = (e) => {
        let selectElm = e.target.nextSibling;
        selectElm.classList.toggle("open");
   }

    return (
      <div className={`popup-mobilemenu-area ${menuShow ? "show" : ""}`}>
        <div className="inner">
          <div className="mobile-menu-top">
            <div className="logo">
                <Link href="/">
                        <Image
                        width={110}
                        height={40}
                        src={`/images/logo/logo-spliget.png`}
                        alt="Spliget SW Logo"
                        />
                </Link>
            </div>
            <div className="mobile-close" onClick={menuHide}>
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{height: 22}}>
                  <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
                </svg>
              </div>
            </div>
          </div>

         <ul className="mainmenu">
            {MenuData.map((data, index) => (
                <li className={`${data.submenu ? "menu-item-has-children" :""}`} key={index}>
                <a href={data.path} onClick={MenuToggleHandler}>{data.label}</a>
                {data.submenu ? 
                <ul className="axil-submenu">
                    {data.submenu.map((submenu, index)=> (
                        <li key={index}>
                            <Link legacyBehavior href={submenu.subpath}>
                                <a className="hover-flip-item-wrapper">
                                    <span className="hover-flip-item">
                                        <span data-text={submenu.sublabel}>{submenu.sublabel}</span>
                                    </span>
                                </a>
                            </Link>
                        </li>
                      ))}
                </ul> : "" }
             </li>
            ))}
        </ul>
        </div>
      </div>
    );
}
 
export default MobileMenu;