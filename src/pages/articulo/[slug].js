import HeadTitle from '../../common/elements/head/HeadTitle';
import Header from '../../common/elements/header/Header';
import Footer from '../../common/elements/footer/Footer';
import PostFormatVideo from '../../common/components/post/format/PostFormatVideo';
import PostFormatGallery from '../../common/components/post/format/PostFormatGallery';
import PostFormatAudio from '../../common/components/post/format/PostFormatAudio';
import { getAllPosts, getPostBySlug } from '../../../lib/api';
import { markdownToHtml } from '../../common/utils';

const PostDetails = ({ post }) => {
	
	const PostFormatHandler = () => {
		switch (post.format) {
			case 'video':
				return <PostFormatVideo postData={post} />
			case 'gallery':
				return <PostFormatGallery postData={post} />
			default:
				return <PostFormatAudio postData={post} />
		}
	}

	return (
		<>
			<HeadTitle pageTitle={post.title} />
			<Header pClass="header-light header-sticky header-with-shadow"/>
			<PostFormatHandler />
			<Footer />
		</>
	);
}

export default PostDetails;

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, [
		'postFormat',
        'slug',
        'title',
        'description',
		'content',
        'date',
        'lastMod',
        'featuredImage',
        'featuredImageAlt',
        'authorName',
        'authorImage',
        'category',
	]);
	
	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			post: {
				...post,
				content,
			}
		},
	}
}


export async function getStaticPaths() {
	const posts = getAllPosts(['slug']);
	
	const paths = posts.map(post => ({
		params: {
			slug: post.slug
		}
	}));

	return {
		paths,
		fallback: false,
	}
}
