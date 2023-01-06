import PostLayoutTwo from '../../common/components/post/layout/PostLayoutTwo';
import BreadcrumbOne from '../../common/elements/breadcrumb/breadcrumbOne';
import Footer from '../../common/elements/footer/Footer';
import HeadTitle from "../../common/elements/head/HeadTitle";
import Header from '../../common/elements/header/Header';
import SidebarOne from "../../common/components/sidebar/SidebarOne";
import { getPostsByCategory, getAllPosts } from '../../../lib/api';
import { slugify } from '../../common/utils';


const PostCategory = ({ allPosts, categoryName }) => {

	return (
		<>
			<HeadTitle pageTitle={`Lista de articulos ${categoryName}`} />
			<Header />
			<BreadcrumbOne title={categoryName} />
			<div className="axil-post-list-area axil-section-gap bg-color-white">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-xl-8">
							<PostLayoutTwo dataPost={allPosts} show="5" />
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

export default PostCategory;

export async function getStaticProps({ params }) {
	const categoryName = params.slug;

	const allPosts = getPostsByCategory(categoryName, [
		'postFormat',
        'slug',
        'title',
        'description',
        'date',
        'lastMod',
        'featuredImage',
        'featuredImageAlt',
        'authorName',
	]);
	
	return {
		props: {
			allPosts,
			categoryName
		}
	}
}


export async function getStaticPaths() {
	const posts = getAllPosts(['category']);

	const paths = posts.map(post => ({
		params: {
			slug: slugify(post.category)
		}
	}))

	return {
		paths,
		fallback: false,
	}
}
