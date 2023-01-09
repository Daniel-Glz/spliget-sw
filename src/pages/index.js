import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import Footer from "../common/elements/footer/Footer";
import Header from "../common/elements/header/Header";
import SidebarOne from "../common/components/sidebar/SidebarOne";
import PostLayoutTwo from "../common/components/post/layout/PostLayoutTwo";
import HeadTitle from "../common/elements/head/HeadTitle";
import { getAllPosts } from "../../lib/api";
import { sortingByDate } from "../common/utils";

const PostListPage = ({ allPosts }) => {
    const router = useRouter();
    const search = router.query['busqueda'] || '';
    allPosts = allPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
    const [blogs] = useState(allPosts);
    const [pageNumber, setPageNumber] = useState(0);

    const blogsPerPage = 5;
    const pageVisited = pageNumber * blogsPerPage;
    
    const pageCount = Math.ceil(blogs.length / blogsPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    return (
        <>
        <HeadTitle />
            <Header pClass="header-light header-sticky header-with-shadow" isHome />
            <h2 className="visually-hidden">Ultimos articulos</h2>
            <div className="axil-post-list-area axil-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xl-8">
                            <PostLayoutTwo dataPost={allPosts} show={pageVisited + blogsPerPage} postStart={pageVisited} />
                            <ReactPaginate
                                previousLabel={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/>
                                    </svg>
                                }
                                nextLabel={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/>
                                    </svg>
                                }
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"pagination"}
                                previousLinkClassName={"prev"}
                                nextLinkClassName={"next"}
                                disabledClassName={"disabled"}
                                activeClassName={"current"}
                            />
                        </div>
                        <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
                            <SidebarOne />
                        </div>
                    </div>
                </div>
            </div>
            <Footer postsData={allPosts}/>
        </>
    );
}

export default PostListPage;


export async function getStaticProps() {
    const allPosts = getAllPosts([
        'postFormat',
        'slug',
        'title',
        'description',
        'date',
        'lastMod',
        'featuredImage',
        'featuredImageAlt',
        'authorName',
        'authorImage',
        'category',
    ]);

    sortingByDate(allPosts);

    return {
        props: { allPosts },
        revalidate: 60 * 5
    }
}