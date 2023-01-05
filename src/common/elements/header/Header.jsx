import React, { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
import SocialData from "../../../data/social/SocialData.json";

const Header = ({ postData }) => {
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
                      <Link href="#">
                        Politica de privacidad
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Contactanos
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-4 col-sm-12">
                <ul className="social-share-transparent md-size justify-content-center justify-content-md-end">
                  <li>
                    <a href={SocialData.fb.url} arial-label="Ir a cuenta de facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="social-share__item">
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" fill="#878787"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={SocialData.twitter.url} aria-label="Ir a cuenta de Twitter">
                      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="social-share__item">
                        <path d="m459.37 151.72c0.325 4.548 0.325 9.097 0.325 13.645 0 138.72-105.58 298.56-298.56 298.56-59.452 0-114.68-17.219-161.14-47.106 8.447 0.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.27-44.832-46.132-0.975-84.792-31.188-98.112-72.772 6.498 0.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.98v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.26 216.36 109.81-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.93 104.93-104.93 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" fill="#878787"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={SocialData.linked.url} aria-label="Ir a cuenta de Linkedin">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="social-share__item">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" fill="#878787"/>
                      </svg>
                    </a>
                  </li>
                </ul>
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
                                className="dark-logo"
                                width={165}
                                height={59.58}
                                src={`/images/logo/logo-spliget.png`}
                                alt="Spliget SW Logo"
                                />
                        </Link>
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
                  <Nav posts={postData}/>
                  </nav>
                </div>
              </div>
              <div className="col-xl-5 col-12">
                <div className="header-search d-flex flex-wrap align-items-center justify-content-center justify-content-xl-end">
                  <form className="header-search-form d-sm-block d-none">
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
                          placeholder="Search"
                        />
                      </div>
                    </form>
                  </div>
                  <ul className="metabar-block">
                    <li className="icon">
                      <Link href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{height: 14, fill: '#FFF'}}>
                            <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"/>
                          </svg>
                      </Link>
                    </li>
                    <li className="icon">
                      <Link href="#" aria-label="Boton para ver notificaciones">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{height: 14, fill: '#FFF'}}>
                            <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"/>
                          </svg>
                      </Link>
                    </li>
                  </ul>
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
