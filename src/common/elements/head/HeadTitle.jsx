import Head from "next/head";
import { generateArticleJsonLd } from "../../utils";

const HeadTitle = ({pageTitle, pageDescription, articleData}) => {

    const jsonLD = articleData ? generateArticleJsonLd(articleData) : null;

    return ( 
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>{pageTitle ? pageTitle : "Spliget SW - Publicaciones sobre desarrollo web"}</title>
            <meta name="robots" content="NOODP" />
            <meta name="description" content={pageDescription ? pageDescription : "Explora el mundo del desarrollo web con nosotros. Publicaciones detalladas y actualizadas sobre Wordpress, CSS y JavaScript."} />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            {
                jsonLD && (
                    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLD} key="article-jsonld" />
                )
            }
        </Head>
     );
}
 
export default HeadTitle;