import Link from "next/link";
import Image from "next/legacy/image";
import { slugify } from "../../utils";
import { SectionTitleOne } from "../../elements/sectionTitle/SectionTitle";
import AddBanner from "../ad-banner/AddBanner";

const PostSectionThree = ({ postData, adBanner, bgColor, heading }) => {

  const firstPost = postData[0];

  return (
    <div className={`axil-video-post-area axil-section-gap ${bgColor || "bg-color-black"}`}>
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
        {heading ? <SectionTitleOne title={heading} /> : ""}
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-md-6 col-12">
            <div className="content-block post-default image-rounded mt--30">
            {firstPost.featureImg ? 
              <div className="post-thumbnail">
                <Link href={`/articulo/${firstPost.slug}`}>
                    <Image
                      src={firstPost.featureImg}
                      alt={firstPost.title}
                      height={500}
                      width={600}
                      priority={true}
                    />
                </Link>
                {firstPost.postFormat === 'video' ? <Link legacyBehavior href={`/articulo/${firstPost.slug}`}>
                  <a className="video-popup position-top-center">
                    <span className="play-icon" />
                  </a>
                </Link> : ""}
               
              </div>:""}
              <div className="post-content">
                <div className="post-cat">
                  <div className="post-cat-list">
                    <Link legacyBehavior href={`/categoria/${slugify(firstPost.cate)}`}>
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text={firstPost.cate}>
                            {firstPost.cate}
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
                <div className="post-meta-wrapper">
                  <div className="post-meta">
                    <div className="content">
                      <h6 className="post-author-name">
                        <Link legacyBehavior href={`/author/${slugify(firstPost.author_name)}`}>
                          <a className="hover-flip-item-wrapper">
                            <span className="hover-flip-item">
                              <span data-text={firstPost.author_name}>
                                {firstPost.author_name}
                              </span>
                            </span>
                          </a>
                        </Link>
                      </h6>
                      <ul className="post-meta-list">
                        <li>{firstPost.date}</li>
                        <li>{firstPost.read_time}</li>
                      </ul>
                    </div>
                  </div>
                  <ul className="social-share-transparent justify-content-end">
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-md-6 col-12">
            <div className="row">
              {postData.slice(1, 5).map((data) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={data.slug}>
                  <div className="content-block post-default image-rounded mt--30">
                  {data.featureImg ? 
                    <div className="post-thumbnail">
                      <Link href={`/articulo/${data.slug}`}>
                        <Image
                          src={data.featureImg}
                          alt={data.title}
                          height={190}
                          width={285}
                          priority={true}
                        />
                    </Link>
                    {data.postFormat === 'video' ? <Link legacyBehavior href={`/articulo/${data.slug}`}>
                      <a className="video-popup size-medium position-top-center">
                        <span className="play-icon" />
                      </a>
                    </Link> : ""}
                    
                    </div>
                    :""}
                    <div className="post-content">
                      <div className="post-cat">
                        <div className="post-cat-list">
                        <Link legacyBehavior href={`/categoria/${slugify(data.cate)}`}>
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
                      <h5 className="title">
                      <Link href={`/articulo/${data.slug}`}>
                        {data.title}
                      </Link>
                      </h5>
                    </div>
                  </div>
                </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionThree;
