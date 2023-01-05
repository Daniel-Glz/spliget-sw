import { useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { SectionTitleOne } from "../../elements/sectionTitle/SectionTitle";
import categories from "../../../data/categories/categories.json";

const activeCategorySlug = categories[0].slug;

const PostSectionTen = ({ postData }) => {
  const defaultData = postData.filter(
    (post) => post.primaryCategory.slug === activeCategorySlug
  );

  const [activeNav, setActiveNav] = useState(activeCategorySlug);
  const [tabPostData, setTabPostData] = useState(defaultData);

  const handleChange = (e) => {
    let selectedCategory = categories.find((category) => category.name === e.target.textContent);
    setActiveNav(selectedCategory.slug);

    let tempData = postData.filter((post) => {
      let textCategories = '';
      post.categories.map((category) => textCategories += " " + category.name);
      
      return textCategories.includes(selectedCategory.name);
    });
    setTabPostData(tempData);
  };

  let firstPost = tabPostData[0];

  return (
    <div className="axil-post-grid-area axil-section-gap bg-color-white">
      <div className="container">
        <SectionTitleOne />
        <div className="row">
          <div className="col-lg-12">
            <Tab.Container id="axilTab" defaultActiveKey={activeNav}>
              <Nav className="axil-tab-button nav nav-tabs mt--20">
                {categories.map((category) => (
                  <Nav.Item key={category.slug}>
                    <Nav.Link
                      onClick={handleChange}
                      eventKey={category.slug}
                    >
                      {category.name}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>

              <Tab.Content className="grid-tab-content mt--10">
                <Tab.Pane className="single-post-grid" eventKey={activeNav}>
                  <div className="row mt--40">
                    <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                        {tabPostData.slice(1, 5).map((data) => (
							<div className="content-block post-medium post-medium-border border-thin" key={data.slug}>
								<div className="post-thumbnail">
								<Link href={`/articulo/${data.slug}`}>
									<Image
										src={data.featuredImage.sourceUrl}
										alt={data.title}
										height={100}
										width={100}
										priority={true}
									/>
								</Link>
								</div>
								<div className="post-content">
									<div className="post-cat">
									<div className="post-cat-list">
										<Link
                    legacyBehavior
										href={`/categoria/${data.slug}`}
										>
										<a className="hover-flip-item-wrapper">
											<span className="hover-flip-item">
											<span data-text={data.primaryCategory.name}>
												{data.primaryCategory.name}
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
							</div>
                        ))}
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-12 col-12 mt_md--40 mt_sm--40">
                      <div className="content-block content-block post-grid post-grid-transparent">
					  {firstPost.featuredImage ? (
                          <div className="post-thumbnail">
                            <Link href={`/articulo/${firstPost.slug}`}>
                                <Image
                                  src={firstPost.featuredImage.sourceUrl}
                                  alt={firstPost.featuredImage.altText}
                                  height={660}
                                  width={705}
                                  priority={true}
                                />
                            </Link>
                          </div>
                        ) : ""}
                        <div className="post-grid-content">
                          <div className="post-content">
                            <div className="post-cat">
                              <div className="post-cat-list">
							  <Link
                                  legacyBehavior
                                  href={`/categoria/${firstPost.primaryCategory.slug}`}
                                >
                                  <a className="hover-flip-item-wrapper">
                                    <span className="hover-flip-item">
                                      <span data-text={firstPost.primaryCategory.name}>
                                        {firstPost.primaryCategory.name}
                                      </span>
                                    </span>
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <h3 className="title">
								<Link href={`/articulo/${firstPost.slug}`}>
									{firstPost.title}
								</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionTen;
