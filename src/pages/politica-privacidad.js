import Footer from "../common/elements/footer/Footer";
import Header from "../common/elements/header/Header";
import HeadTitle from "../common/elements/head/HeadTitle";
import { gql } from "@apollo/client";
import client from "../../lib/apollo-client";
import { formatPosts, markdownToHtml } from "../common/utils";

const PrivacyPolicy = ({ privacyData }) => {
    
    return ( 
        <>
        <HeadTitle pageTitle="Politica de privacidad"/>
        <Header pClass="header-light header-sticky header-with-shadow"/>
        <div className="axil-privacy-area axil-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="content">
                    <div className="inner">
                        <div className="section-title">
                        <h4 className="title">{privacyData.data.sTitle}</h4>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: privacyData.content}} />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <Footer bgColor="bg-color-black" darkLogo="/images/logo/logo-white2.webp"/>
        </>
    );
}
 
export default PrivacyPolicy;


export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
        {
            posts(first: 15) {
                nodes {
                  title
                  slug
                  date
                  author {
                    node {
                      name
                    }
                  }
                  categories {
                    edges {
                      isPrimary
                      node {
                        name
                        slug
                      }
                    }
                  }
                  featuredImage {
                    node {
                      sourceUrl
                      altText
                      srcSet
                    }
                  }
                }
              }
            }
        `
    });

    const allPosts = formatPosts(data.posts.nodes);

    const content = await markdownToHtml("")

    return {
        props: {
            privacyData: {
                data: {
                    sTitle: "Politica de privacidad"
                },
                content
            },
            allPosts
        },
        revalidate: 60
    }
}
