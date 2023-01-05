import Image from "next/legacy/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="axil-footer-area axil-footer-style-1 footer-variation-2">
      <div className="footer-mainmenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h2 className="title">Tecnologia</h2>
                <div className="inner">
                  <ul className="ft-menu-list">
                    <li>
                      <Link href="#">U.N.</Link>
                    </li>
                    <li>
                      <Link href="#">Conflicts</Link>
                    </li>
                    <li>
                      <Link href="#">Terrorism</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h2 className="title">Software</h2>
                <div className="inner">
                  <ul className="ft-menu-list">
                    <li>
                      <Link href="#">Executive</Link>
                    </li>
                    <li>
                      <Link href="#">Senate</Link>
                    </li>
                    <li>
                      <Link href="#">House</Link>
                    </li>
                    <li>
                      <Link href="#">Judiciary</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h2 className="title">Diseno Web</h2>
                <div className="inner">
                  <ul className="ft-menu-list">
                    <li>
                      <Link href="#">Celebrity News</Link>
                    </li>
                    <li>
                      <Link href="#">Movies</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h2 className="title">Tutoriales</h2>
                <div className="inner">
                  <ul className="ft-menu-list">
                    <li>
                      <Link href="#">Environment</Link>
                    </li>
                    <li>
                      <Link href="#">Conflicts</Link>
                    </li>
                    <li>
                      <Link href="#">Terrorism</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h2 className="title">Gadgets</h2>
                <div className="inner">
                  <ul className="ft-menu-list">
                    <li>
                      <Link href="#">Movies</Link>
                    </li>
                    <li>
                      <Link href="#">Conflicts</Link>
                    </li>
                    <li>
                      <Link href="#">Terrorism</Link>
                    </li>
                    <li>
                      <Link href="#">Disasters</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget">
                <h2 className="title">Programacion</h2>
                <div className="inner">
                  <ul className="ft-menu-list">
                    <li>
                      <Link href="#">U.N.</Link>
                    </li>
                    <li>
                      <Link href="#">Conflicts</Link>
                    </li>
                    <li>
                      <Link href="#">Terrorism</Link>
                    </li>
                    <li>
                      <Link href="#">Disasters</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Footer Top Area  */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="logo">
              <Link href="/">
                  <Image
                    className="dark-logo"
                    src={`/images/logo/logo-spliget.png`}
                    alt="Spliget SW logo"
                    width={110}
                    height={40}
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              {/* Start Post List  */}
              <div className="d-flex justify-content-start mt_sm--15 justify-content-md-end align-items-center flex-wrap">
                <h5 className="follow-title mb--0 mr--20">Siguenos</h5>
                <ul className="social-icon color-tertiary md-size justify-content-start">
                  <li>
                    <a href="https://www.facebook.com/" rel="noreferrer" target="_blank" aria-label="Ir a cuenta de facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{width: 14, height: 14}}>
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" fill="#878787"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" rel="noreferrer" target="_blank" aria-label="Ir a cuenta de Twitter">
                      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{width: 14, height: 14}}>
                        <path d="m459.37 151.72c0.325 4.548 0.325 9.097 0.325 13.645 0 138.72-105.58 298.56-298.56 298.56-59.452 0-114.68-17.219-161.14-47.106 8.447 0.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.27-44.832-46.132-0.975-84.792-31.188-98.112-72.772 6.498 0.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.98v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.26 216.36 109.81-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.93 104.93-104.93 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" fill="#878787"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank" aria-label="Ir a cuenta de Linkedin">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width: 14, height: 14}}>
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" fill="#878787"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              {/* End Post List  */}
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Top Area  */}
      {/* Start Copyright Area  */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-8">
              <div className="copyright-left">
                <ul className="mainmenu justify-content-start">
                  <li>
                    <Link legacyBehavior href="/about">
                      <a className="hover-flip-item-wrapper" rel="noreferrer" target="_blank">
                        <span className="hover-flip-item">
                          <span data-text="Contactanos">Contactanos</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/privacy-policy">
                      <a className="hover-flip-item-wrapper" rel="noreferrer" target="_blank">
                        <span className="hover-flip-item">
                          <span data-text="Politica De Privacidad">Politica De Privacidad</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      <a className="hover-flip-item-wrapper" rel="noreferrer" target="_blank">
                        <span className="hover-flip-item">
                          <span data-text="Publicidad">
                            Publicidad
                          </span>
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="copyright-right text-start text-md-end mt_sm--20">
                <p className="b3">
                  Copyright © {new Date().getFullYear()} - Spliget Software
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Copyright Area  */}
    </footer>
  );
};

export default Footer;
