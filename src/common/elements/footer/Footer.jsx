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
                    <Link legacyBehavior href="/contacto">
                      <a className="hover-flip-item-wrapper" rel="noreferrer" target="_blank">
                        <span className="hover-flip-item">
                          <span data-text="Contacto">Contacto</span>
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
                  Copyright © {new Date().getFullYear()} - Spliget SW
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
