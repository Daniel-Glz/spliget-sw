import React, { useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { SectionTitleOne } from "../../elements/sectionTitle/SectionTitle";
import AddBanner from "../ad-banner/AddBanner";
import Slider from "react-slick";
import { slugify } from "../../utils";

const filters = [
 
  {
    id: 1,
    cate: "Gadget",
  },
  {
    id: 2,
    cate: "Design",
  },
  {
    id: 3,
    cate: "Marketing",
  },
  {
    id: 4,
    cate: "Technology",
  },
];
const defaultActiveCat = slugify(filters[0].cate);

const PostSectionTwo = ({ postData, adBanner, headingTitle }) => {
  const defaultData = postData.filter(
    (post) => slugify(post.cate) === defaultActiveCat
  );

  const [activeNav, setActiveNav] = useState(defaultActiveCat);
  const [tabPostData, setTabPostData] = useState(defaultData);

  const handleChange = (e) => {
    let filterText = slugify(e.target.textContent);
    setActiveNav(filterText);

    let tempData = [];

    for (let i = 0; i < postData.length; i++) {
      const element = postData[i];
      let categories = element["cate"];

      if (slugify(categories).includes(filterText)) {
        tempData.push(element);
      }
    }

    setTabPostData(tempData);
  };

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
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,	
        },
      },
    ],
  };

  return (
    <div className="axil-tab-area axil-section-gap bg-color-white">
      <div className="wrapper">
        <div className="container">
			{adBanner === true ?  
			<div className="row">
            <div className="col-lg-12">
              <AddBanner
                img="/images/add-banner/banner-03.webp"
                pClass="mb--30"
              />
            </div>
          </div> : ""}
         
          <SectionTitleOne title={ headingTitle || "Innovation & Tech"} />
          <div className="row">
            <div className="col-lg-12">
              <Tab.Container id="axilTab" defaultActiveKey={activeNav}>
                <Nav className="axil-tab-button nav nav-tabs mt--20">
                  {filters.map((data) => (
                    <Nav.Item key={data.id}>
                      <Nav.Link
                        onClick={handleChange}
                        eventKey={slugify(data.cate)}
                      >
                        {data.cate}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey={activeNav} className="single-tab-content">
                    <Slider
                      {...slideSettings}
                      className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side"
                    >
                      {tabPostData.map((data) => (
                        <div className="slick-single-layout" key={data.slug}>
                          <div className="content-block modern-post-style text-center content-block-column">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <Link
                                    legacyBehavior
                                    href={`/categoria/${slugify(data.cate)}`}
                                  >
                                    <a className="hover-flip-item-wrapper">
                                      <span className="hover-flip-item">
                                        <span data-text={data.cate}>
                                          {data.cate}
                                        </span>
                                      </span>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                              <h4 className="title">
                                <Link href={`/articulo/${data.slug}`}>
                                  {data.title}
                                </Link>
                              </h4>
                            </div>
                            {data.featureImg ? 
                            <div className="post-thumbnail">
                              <div className="round-shape">
                                <Image
                                    src="/images/icons/shape-01.webp"
                                    alt="Round Shape"
                                    height={77}
                                    width={390}
                                    priority={true}
                                  />
                              </div>
                              <Link href={`/articulo/${data.slug}`}>
                                  <Image
                                    src={data.featureImg}
                                    alt={data.title}
                                    height={260}
                                    width={390}
                                    priority={true}
                                  />
                              </Link>
                            </div>
                            :""}
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionTwo;
