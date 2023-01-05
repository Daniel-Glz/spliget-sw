import HeadTitle from '../../common/elements/head/HeadTitle';
import { formatPosts } from '../../common/utils';
import Header from '../../common/elements/header/Header';
import Footer from '../../common/elements/footer/Footer';
import PostFormatStandard from '../../common/components/post/format/PostFormatStandard';
import PostFormatVideo from '../../common/components/post/format/PostFormatVideo';
import PostFormatGallery from '../../common/components/post/format/PostFormatGallery';
import PostFormatAudio from '../../common/components/post/format/PostFormatAudio';
import PostFormatQuote from '../../common/components/post/format/PostFormatQuote';
import { gql } from "@apollo/client";
import client from "../../../lib/apollo-client";

const PostDetails = ({ post, posts }) => {
	
	const PostFormatHandler = () => {
		switch ("audio") {
			case 'video':
				return <PostFormatVideo postData={post} allData={posts}/>
			case 'gallery':
				return <PostFormatGallery postData={post} allData={posts}/>
			case 'audio':
				return <PostFormatAudio postData={post} allData={posts}/>
			case 'quote':
				return <PostFormatQuote postData={post} allData={posts}/>
			default:
				return <PostFormatStandard postData={post} allData={posts}/>
		}
	}

	return (
		<>
			<HeadTitle pageTitle={post.title} />
			<Header postData={posts} pClass="header-light header-sticky header-with-shadow"/>
			<PostFormatHandler />
			<Footer />
		</>
	);
}

export default PostDetails;

export async function getStaticProps({ params }) {

	const { data } = await client.query({
		query: gql`
		{
			post(id: "${params.slug}", idType: SLUG) {
			  slug
			  title
			  date
			  content
			  tags {
				nodes {
				  name
				  slug
				}
			  }
			  featuredImage {
				node {
				  sourceUrl
				  altText
				  srcSet
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
			}
			posts(first: 40) {
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

	const post = formatPosts(data.post)[0];
	const posts = formatPosts(data.posts.nodes);

	return {
		props: {
			post,
			posts
		},
		revalidate: 60
	}
}


export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`
		{
			posts {
			  nodes {
				slug
			  }
			}
		}`
	});

	const posts = data.posts.nodes;
	
	const paths = posts.map(post => ({
		params: {
			slug: post.slug
		}
	}))

	return {
		paths,
		fallback: false,
	}
}
