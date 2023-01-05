import { useRouter } from 'next/router'
import Footer from '../../common/elements/footer/Footer';
import Header from '../../common/elements/header/Header';
import PostLayoutTwo from '../../common/components/post/layout/PostLayoutTwo';
import SidebarOne from "../../common/components/sidebar/SidebarOne";
import BreadcrumbOne from '../../common/elements/breadcrumb/breadcrumbOne';
import { formatPosts } from '../../common/utils';
import { gql } from '@apollo/client';
import client from '../../../lib/apollo-client';


const TagsArchive = ({ tagPosts }) => {

    const router = useRouter()

    const BreadCrumbTitle = (router.query.slug);

    return (
        <>
            <Header />
            <BreadcrumbOne title={BreadCrumbTitle.replace('-', ' ')} />
            <div className="axil-post-list-area axil-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xl-8">
                            <PostLayoutTwo dataPost={tagPosts} show="5" />
                        </div>
                        <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
                            <SidebarOne />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TagsArchive;


export async function getStaticProps({ params }) {

    const pageParams = params.slug;

    const { data } = await client.query({
        query: gql`
        {
            tagPosts: posts(first: 40, where: {tag: "${pageParams.slug}"}) {
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
          }`
    });

    const tagPosts = formatPosts(data.tagPosts.nodes);
    const allPosts = formatPosts(data.posts.nodes);

    return {
        props: {
            tagPosts,
            allPosts
        },
        revalidate: 3 * 60 * 60
    }

}

export async function getStaticPaths() {
    
    const { data } = await client.query({
        query: gql`
        {
            tags {
              nodes {
                name
                slug
              }
            }
          }
        `
    });

    const paths = data.tags.nodes.map((tag) => ({
        params: { 
            slug: tag.slug 
        },
    }))

    return {
        paths,
        fallback: false,
    }
}


