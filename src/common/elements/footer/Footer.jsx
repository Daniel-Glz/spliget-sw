import Image from "next/legacy/image";
import Link from "next/link";
import { orderPostsByCategory } from "../../utils";

const Footer = ({postsData}) => {
  postsData = orderPostsByCategory(postsData, ["Recientes", "Wordpress", "Javascript", "CSS"]);

  return (
    <footer className="axil-footer-area axil-footer-style-1 footer-variation-2">
      <div className="footer-mainmenu">
        <div className="container">
          <div className="row">
            {
              postsData.map((item, index) => {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                    <div className="footer-widget">
                      <strong>
                        <span className="title">
                          <Link href={item.category === 'Recientes' ? `/` : `/categoria/${item.category.toLowerCase()}`}>
                            {item.category}
                          </Link>
                        </span>
                      </strong>
                      <div className="inner">
                        <ul className="ft-menu-list">
                          {
                            item.posts.map((post, index) => {
                              return (
                                <li key={index}>
                                  <Link href={`/articulo/${post.slug}`}>{post.title}</Link>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })
            }
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
                    <Link legacyBehavior href="mailto:spliget.software@gmail.com">
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
