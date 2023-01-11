import React, { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";

const Header = ({ isHome }) => {
  const [showMMenu, SetShowMMenu] = useState(false);

  const MobileShowHandler = () => SetShowMMenu(true);
  const MobileHideHandler = () => SetShowMMenu(false);

  const [togglaClass, setTogglaClass] = useState(false);

  const toggleHandler = () => {
        setTogglaClass(active => !active);
  }

  return (
    <>
      <header className="header axil-header header-style-3  header-light header-sticky">
        <div className="header-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8 col-sm-12">
                <div className="header-top-bar d-flex flex-wrap align-items-center justify-content-center justify-content-md-start">
                  <ul className="header-top-nav liststyle d-flex flrx-wrap align-items-center">
                    <li className="header-top-nav__first">
                      <Link href="mailto:spliget.software@gmail.com">
                        Publicidad
                      </Link>
                    </li>
                    <li>
                      <Link href="/contacto">
                        Contactanos
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-4 col-sm-12">
              </div>
            </div>
          </div>
        </div>

        <div className="header-middle">
          <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="logo">
                        <Link href="/">
                                <Image
                                width={165}
                                height={59.58}
                                src={`/images/logo/logo-spliget.png`}
                                alt="Spliget SW Logo"
                                layout=""
                                priority={true}
                                />
                        </Link>
                        {
                          isHome && <h1 className="visually-hidden">Spliget SW</h1>
                        }
                    </div>
                </div>     
                <div className="col-lg-9 col-md-8 col-sm-6" style={{display: 'none'}}>
                    <div className="banner-add text-end">
                    <a href="#">
                        <Image
                        src="/images/others/add-01.webp"
                        width={728}
                        height={92}
                        alt="Add images"
                        />
                    </a>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-7 col-12">
                <div className="mainmenu-wrapper d-none d-xl-block">
                  <nav className="mainmenu-nav">
                  <Nav />
                  </nav>
                </div>
              </div>
              <div className="col-xl-5 col-12">
                <div className="header-search d-flex flex-wrap align-items-center justify-content-center justify-content-xl-end">
                  <form className="header-search-form d-sm-block d-none" action="/">
                    <div className="axil-search form-group">
                      <button type="submit" className="search-button" title="Boton de busqueda">
                        <svg enableBackground="new 0 0 129 129" version="1.1" viewBox="0 0 129 129" xmlns="http://www.w3.org/2000/svg">
                          <path d="m51.6 96.7c11 0 21-3.9 28.8-10.5l35 35c0.8 0.8 1.8 1.2 2.9 1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-35-35c6.5-7.8 10.5-17.9 10.5-28.8 0-24.9-20.2-45.1-45.1-45.1-24.8 0-45.1 20.3-45.1 45.1 0 24.9 20.3 45.1 45.1 45.1zm0-82c20.4 0 36.9 16.6 36.9 36.9 0 20.4-16.5 36.9-36.9 36.9s-36.9-16.6-36.9-36.9 16.6-36.9 36.9-36.9z" fill="#FFF"/>
                        </svg>
                      </button>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Buscar"
                          aria-label="Buscar"
                          name="busqueda"
                        />
                    </div>
                  </form>
                  <div className="mobile-search-wrapper d-sm-none d-block">
                    <button className="search-button-toggle" onClick={toggleHandler} title="Boton de busqueda">
                      <svg enableBackground="new 0 0 129 129" version="1.1" viewBox="0 0 129 129" xmlns="http://www.w3.org/2000/svg">
                        <path d="m51.6 96.7c11 0 21-3.9 28.8-10.5l35 35c0.8 0.8 1.8 1.2 2.9 1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-35-35c6.5-7.8 10.5-17.9 10.5-28.8 0-24.9-20.2-45.1-45.1-45.1-24.8 0-45.1 20.3-45.1 45.1 0 24.9 20.3 45.1 45.1 45.1zm0-82c20.4 0 36.9 16.6 36.9 36.9 0 20.4-16.5 36.9-36.9 36.9s-36.9-16.6-36.9-36.9 16.6-36.9 36.9-36.9z"/>
                      </svg>
                    </button>
                    <form className={`header-search-form ${togglaClass ? "open": ""}`}>
                      <div className="axil-search form-group">
                        <button type="submit" className="search-button" title="Boton de busqueda">
                          <svg enableBackground="new 0 0 129 129" version="1.1" viewBox="0 0 129 129" xmlns="http://www.w3.org/2000/svg">
                            <path d="m51.6 96.7c11 0 21-3.9 28.8-10.5l35 35c0.8 0.8 1.8 1.2 2.9 1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-35-35c6.5-7.8 10.5-17.9 10.5-28.8 0-24.9-20.2-45.1-45.1-45.1-24.8 0-45.1 20.3-45.1 45.1 0 24.9 20.3 45.1 45.1 45.1zm0-82c20.4 0 36.9 16.6 36.9 36.9 0 20.4-16.5 36.9-36.9 36.9s-36.9-16.6-36.9-36.9 16.6-36.9 36.9-36.9z"/>
                          </svg>
                        </button>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Buscar"
                          name="busqueda"
                        />
                      </div>
                    </form>
                  </div>
                  {/* Start Hamburger Menu  */}
                  <div className="hamburger-menu d-block d-xl-none">
                    <div className="hamburger-inner">
                      <div className="icon" onClick={MobileShowHandler}>
                        <svg viewBox="0 0 50 50" enableBackground="new 0 0 50 50" fill="#878787" style={{width: 24}}>
                          <path d="M8.667,15h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,15,8.667,15z"/>
                          <path d="M8.667,37h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,37,8.667,37z"/>
                          <path d="M8.667,26h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,26,8.667,26z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* End Hamburger Menu  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu menuShow={showMMenu} menuHide={MobileHideHandler} />
    </>
  );
};

export default Header;
