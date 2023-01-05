import Footer from "../common/elements/footer/Footer";
import Header from "../common/elements/header/Header";
import HeadTitle from "../common/elements/head/HeadTitle";
import { formatPosts } from "../common/utils";
import PostSectionNine from '../common/components/post/PostSectionNine';
import CategoryListSlide from '../common/components/category/CategoryListSlide';
import PostSectionFour from '../common/components/post/PostSectionFour';
import PostSectionTen from '../common/components/post/PostSectionTen';
import categories from '../data/categories/categories.json';
import { gql } from "@apollo/client";
import client from "../../lib/apollo-client";

const HomeDefault = ({ posts }) => {

    return ( 
        <>
        <HeadTitle />
        <Header postData={posts}/>
        <PostSectionNine postData={posts}/>
        <CategoryListSlide categories={categories} />
        <PostSectionTen postData={posts} />
        <PostSectionFour postData={posts} adBanner={true}/>
        <Footer />
        </>
     );
}
 
export default HomeDefault;  


export async function getStaticProps() {

    const { data } = await client.query({
      query: gql`
      {
        posts (first: 40) {
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
    
    const posts = formatPosts(data.posts.nodes);
    return {
      props: { posts },
      revalidate: 60
    }
}