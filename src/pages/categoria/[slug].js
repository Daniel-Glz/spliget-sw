import PostLayoutTwo from '../../common/components/post/layout/PostLayoutTwo';
import BreadcrumbOne from '../../common/elements/breadcrumb/breadcrumbOne';
import Footer from '../../common/elements/footer/Footer';
import HeadTitle from "../../common/elements/head/HeadTitle";
import Header from '../../common/elements/header/Header';
import SidebarOne from "../../common/components/sidebar/SidebarOne";
import categories from '../../data/categories/categories.json';
import { gql } from '@apollo/client';
import client from '../../../lib/apollo-client';
import { formatPosts } from '../../common/utils';


const PostCategory = ({ posts, categorySlug }) => {
	const category = categories.find(category => category.slug === categorySlug);

	return (
		<>
			<HeadTitle pageTitle="a" />
			<Header postData={posts} />
			<BreadcrumbOne title={category.name} />
			<div className="axil-post-list-area axil-section-gap bg-color-white">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-xl-8">
							<PostLayoutTwo dataPost={posts} show="5" />
						</div>
						<div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
							<SidebarOne dataPost={posts} />
						</div>
					</div>
				</div>
			</div>
			<Footer />

		</>
	);
}

export default PostCategory;


export async function getStaticProps({ params }) {
	const { data } = await client.query({
		query: gql`
		{
			posts(first: 40, where: {categoryName: "${params.slug}"}) {
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
		props: { 
			posts,
			categorySlug: params.slug
		}
	}
}


export async function getStaticPaths() {
	const paths = categories.map(category => ({
		params: {
			slug: category.slug
		}
	}))

	return {
		paths,
		fallback: false,
	}
}
