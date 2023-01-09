import PostLayoutTwo from '../../common/components/post/layout/PostLayoutTwo';
import BreadcrumbOne from '../../common/elements/breadcrumb/breadcrumbOne';
import Footer from '../../common/elements/footer/Footer';
import HeadTitle from "../../common/elements/head/HeadTitle";
import Header from '../../common/elements/header/Header';
import SidebarOne from "../../common/components/sidebar/SidebarOne";
import { getPostsByCategory, getAllPosts } from '../../../lib/api';
import categories from '../../data/categories/categories.json';


const PostCategory = ({ allPosts, footerPosts, category }) => {

	return (
		<>
			<HeadTitle pageTitle={`${category.label} - Lista de articulos`} pageDescription={category.metaDescription} />
			<Header />
			<BreadcrumbOne title={category.label} />
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
			<Footer postsData={footerPosts}/>

		</>
	);
}

export default PostCategory;

export async function getStaticProps({ params }) {
	const category = categories.find(category => category.dir === params.slug);

	const allPosts = getPostsByCategory(category, [
		'postFormat',
        'slug',
        'title',
        'date',
        'lastMod',
        'featuredImage',
        'featuredImageAlt',
        'authorName',
		'category'
	]);

	const footerPosts = getAllPosts([
		'slug',
		'title',
		'category'
	]);
	
	return {
		props: {
			allPosts,
			footerPosts,
			category: category
		},
	}
}


export async function getStaticPaths() {
	const paths = categories.map(category => ({
		params: {
			slug: category.dir
		}
	}))

	return {
		paths,
		fallback: false,
	}
}
