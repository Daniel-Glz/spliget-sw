import Image from "next/legacy/image";
import PostAuthor from "./element/PostAuthor";
import SidebarTwo from "../../sidebar/SidebarTwo";
import PostMetaTwo from "./element/PostMetaTwo";
import PostComment from "./element/PostComment";
import Slider from "react-slick";

const PostFormatGallery = ({ postData, allData }) => {
	const basePathLink = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? "" : "";
  
  	const postContent = postData.content.replaceAll('/images/', basePathLink + '/images/');
	
  const SlideGallery = () => {
	function SlickNextArrow(props) {
		const { className, onClick } = props;
		return (
		  <button
			className={`slide-arrow next-arrow ${className}`}
			onClick={onClick}
		  >
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          		<path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/>
        	</svg>
		  </button>
		);
	}
	
	function SlickPrevArrow(props) {
	const { className, onClick } = props;
	return (
		<button
		className={`slide-arrow prev-arrow ${className}`}
		onClick={onClick}
		>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/>
        </svg>
		</button>
	);
	}
	
	const slideSettings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SlickNextArrow />,
		prevArrow: <SlickPrevArrow />,
	};
    return (
		<Slider {...slideSettings} className="post-gallery-activation axil-slick-arrow arrow-between-side">
			{postData.gallery.map((data, index) => (
				<div className="post-images" key={index}>
					<Image
					src={data}
					alt={postData.title}
					height={500}
					width={810}
					priority={true}
					/>
				</div>
			))}
		</Slider>
    );
  };

  return (
    <>
      <div className="post-single-wrapper axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <PostMetaTwo metaData={postData} />
              <div className="axil-post-details">
                {postData.gallery ? <SlideGallery /> : ""}
                <div
                  className="post-details-content"
                  dangerouslySetInnerHTML={{ __html: postContent }}
                ></div>
                <PostAuthor dataAuthor={postData} />
                <PostComment />
              </div>
            </div>
            <div className="col-lg-4">
              <SidebarTwo dataPost={allData} tagData={postData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFormatGallery;
