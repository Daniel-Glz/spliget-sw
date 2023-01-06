import Image from "next/legacy/image";
import Link from 'next/link';
import Footer from "../common/elements/footer/Footer";
import Header from "../common/elements/header/Header";
import HeadTitle from "../common/elements/head/HeadTitle";

const Error404 = () => {
    return (
        <>
            <HeadTitle pageTitle="404 Not Found" />
            <Header pClass="header-light header-sticky header-with-shadow" />
            <div className="error-area" style={{background: '#1A1A1A'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <Image
                                    width={322}
                                    height={131}
                                    src="/images/others/404.webp"
                                    alt="Error Images"
                                />
                                <h1 className="title">Pagina no encontrada!</h1>
                                <p>Lo sentimos, la pagina que estas buscando no ha sido encontrada.</p>
                                <div className="back-totop-button cerchio d-inline-block">
                                <Link legacyBehavior href="/">
                                    <a className="axil-button button-rounded hover-flip-item-wrapper">
                                        <span className="hover-flip-item">
                                            <span data-text="Regresar a inicio">Regresar a inicio</span>
                                        </span>
                                    </a>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Error404;