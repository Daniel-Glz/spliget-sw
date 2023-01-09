import HeadTitle from '../../common/elements/head/HeadTitle';
import Header from '../../common/elements/header/Header';
import Footer from '../../common/elements/footer/Footer';
import PostFormatVideo from '../../common/components/post/format/PostFormatVideo';
import PostFormatGallery from '../../common/components/post/format/PostFormatGallery';
import PostFormatAudio from '../../common/components/post/format/PostFormatAudio';
import { getAllPosts, getPostBySlug } from '../../../lib/api';
import { markdownToHtml } from '../../common/utils';

const PostDetails = ({ post, footerPosts }) => {
	
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
			<HeadTitle pageTitle={post.title} pageDescription={post.metaDescription} />
			<Header pClass="header-light header-sticky header-with-shadow"/>
			<PostFormatHandler />
			<Footer postsData={footerPosts}/>
		</>
	);
}

export default PostDetails;

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, [
		'postFormat',
        'slug',
        'title',
        'metaDescription',
		'content',
        'date',
        'lastMod',
        'featuredImage',
        'featuredImageAlt',
        'authorName',
        'authorImage',
        'category',
	]);
	
	const footerPosts = getAllPosts([
		'slug',
		'title',
		'category'
	]);

	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			post: {
				...post,
				content,
			},
			footerPosts,
		},
		revalidate: 60 * 5,
	}
}


export async function getStaticPaths() {
	const posts = getAllPosts(['slug']);
	
	const paths = posts.map(post => ({
		params: {
			slug: post.slug,
			revalidate: 60 * 10,
		}
	}));

	return {
		paths,
		fallback: false,
	}
}
