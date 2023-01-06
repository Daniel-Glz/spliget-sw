import Image from "next/legacy/image";
import Link from "next/link";
import { slugify } from "../../../../utils";

const PostMetaOne = ({metaData}) => {

    return (
      <div className="banner banner-single-post post-formate post-standard alignwide">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Start Single Slide  */}
              <div className="content-block">
                {/* Start Post Thumbnail  */}
                <div className="post-thumbnail">
                <Image
                    src={metaData.featuredImage}
                    alt={metaData.featuredImageAlt}
                    height={720}
                    width={1440}
                  />
                </div>
                {/* End Post Thumbnail  */}
                {/* Start Post Content  */}
                <div className="post-content">
                  <div className="post-cat">
                    <div className="post-cat-list">
                        <Link legacyBehavior href={`/categoria/${slugify(metaData.category)}`}>
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                <span data-text={metaData.category}>{metaData.category}</span>
                                </span>
                            </a>
                        </Link>
                    </div>
                  </div>
                  <h1 className="title">{metaData.title}</h1>
                  {/* Post Meta  */}
                  <div className="post-meta-wrapper">
                    <div className="post-meta">
                      <div className="post-author-avatar border-rounded">
                      <Image
                            src={"/images/add-banner/banner-01.webp"}
                            alt={"/images/author/author-1.jpg"}
                            height={50}
                            width={50}
                        />
                      </div>
                      <div className="content">
                        <h6 className="post-author-name">
                            <Link legacyBehavior href={`/author/`}>
                                <a
                                    className="hover-flip-item-wrapper">
                                    <span className="hover-flip-item">
                                    <span data-text={metaData.authorName}>{metaData.authorName}</span>
                                    </span>
                                </a>
                            </Link>
                        </h6>
                        <ul className="post-meta-list">
                          <li>{metaData.date}</li>
                          <li>{"post views"}</li>
                        </ul>
                      </div>
                    </div>
                    <ul className="social-share-transparent justify-content-end">
                    
                    </ul>
                  </div>
                </div>
                {/* End Post Content  */}
              </div>
              {/* End Single Slide  */}
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default PostMetaOne;