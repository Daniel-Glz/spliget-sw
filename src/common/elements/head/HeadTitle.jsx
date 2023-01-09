import Head from "next/head";

const HeadTitle = ({pageTitle, pageDescription}) => {
    return ( 
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>{pageTitle ? pageTitle : "Spliget SW - Publicaciones de software"}</title>
            <meta name="description" content={pageDescription ? pageDescription : "Explora el mundo del software con nosotros. Publicaciones detalladas y actualizadas sobre Wordpress, NextJS y JavaScript."} />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="robots" content="noodp" />
        </Head>
     );
}
 
export default HeadTitle;