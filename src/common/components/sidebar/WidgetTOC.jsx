import React from "react";
import Toc from "react-toc";

const WidgetTOC = ({ postData, hideOnMobile, hideOnDesktop }) => {
    return (
        <nav className={`axil-single-widget widget mb--30 ${hideOnMobile ? 'd-none d-lg-block' : null} ${hideOnDesktop && 'd-block d-lg-none'}`}>
            <div className="widget-title h5">Tabla de contenidos</div>
            <Toc markdownText={postData.content} className="widget-list" />
        </nav>
    )
}

export default WidgetTOC;