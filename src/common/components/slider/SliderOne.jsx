import Link from "next/link";
import Image from "next/legacy/image";
import Slider from "react-slick";
import { slugify } from "../../utils";

const SliderOne = ({ postData }) => {

  const slidePost = postData.filter(post => post.slidePost === true);

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
    speed: 800,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
  };
  return (
    <div className="slider-area bg-color-grey">
      <div className="axil-slide slider-style-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Slider {...slideSettings} className="slider-activation axil-slick-arrow">
               
                {slidePost.slice(0, 3).map((data) => (
                  <div className="content-block" key={data.slug}>
                    {/* Start Post Thumbnail  */}
                    {data.featureImg ? 
                    <div className="post-thumbnail">
                        <Link href={`/articulo/${data.slug}`}>
                                <Image
                                    src={data.featureImg}
                                    alt={data.title}
                                    height={615}
                                    width={1230}
                                    priority
                                    placeholder="blur"
                                    blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcXw8AAgMBQLfkYc4AAAAASUVORK5CYII=`}
                                />
                        </Link>
                    </div>
                    :""}
                    {/* End Post Thumbnail  */}
                    {/* Start Post Content  */}
                    <div className="post-content">
                      <div className="post-cat">
                        <div className="post-cat-list">
                            <Link legacyBehavior href={`/category/${slugify(data.cate)}`}>
                                <a className="hover-flip-item-wrapper">
                                    <span className="hover-flip-item">
                                        <span data-text={data.cate}>{data.cate}</span>
                                    </span>
                                </a>
                            </Link>
                        </div>
                      </div>
                      <h2 className="title">
                            <Link href={`/articulo/${data.slug}`}>
                                {data.title}
                            </Link>
                      </h2>
                      {/* Post Meta  */}
                      <div className="post-meta-wrapper with-button">
                        <div className="post-meta">
                          <div className="post-author-avatar border-rounded">
                          <Image
                                src={data.author_img}
                                alt={data.author_name}
                                height={50}
                                width={50}
                                placeholder="blur"
                                blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcXw8AAgMBQLfkYc4AAAAASUVORK5CYII=`}
                            />
                          </div>
                          <div className="content">
                            <h6 className="post-author-name">
                                <Link legacyBehavior href={`/author/${slugify(data.author_name)}`}>
                                    <a className="hover-flip-item-wrapper">
                                        <span className="hover-flip-item">
                                            <span data-text={data.author_name}>
                                                {data.author_name}
                                            </span>
                                        </span>
                                    </a>
                                </Link>
                            </h6>
                            <ul className="post-meta-list">
                              <li>{data.date}</li>
                              <li>{data.post_views}</li>
                            </ul>
                          </div>
                        </div>
                        <ul className="social-share-transparent justify-content-end">
                        </ul>
                        <div className="read-more-button cerchio">
                            <Link legacyBehavior href={`/articulo/${data.slug}`}>
                                <a className="axil-button button-rounded hover-flip-item-wrapper">
                                    <span className="hover-flip-item">
                                        <span data-text="Read Post">Read Post</span>
                                    </span>
                                </a>
                            </Link>
                        </div>
                      </div>
                    </div>
                    {/* End Post Content  */}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderOne;
