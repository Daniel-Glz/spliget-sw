import Link from "next/link";
import Image from "next/legacy/image";
import { slugify } from "../../utils";

const PostSectionTwelve = ({ postData }) => {

  const firstPost = postData[0];

  return (
    <div className="slider-area bg-color-grey container">
      <div className="axil-slide slider-style-2 plr_lg--30 plr_md--30 plr_sm--0">
        <div className="row row--10">
          <div className="col-lg-12 col-xl-6 col-md-12 col-12 mt--20">
            <div className="content-block post-grid post-grid-transparent post-overlay-bottom">
            {firstPost.featureImg ? 
              <div className="post-thumbnail">
                <Link href={`/articulo/${firstPost.slug}`}>
                    <Image
                      src={firstPost.featureImg}
                      alt={firstPost.title}
                      height={467}
                      width={615}
                      priority={true}
                    />
                </Link>
              </div>:""}
              <div className="post-grid-content">
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
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 col-md-12 col-12 mt_lg--20 mt_md--20 mt_sm--20">
            <div className="row row--10">
              {postData.slice(1, 5).map((data) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--20" key={data.slug}>
                  <div className="content-block post-grid post-grid-transparent post-grid-small post-overlay-bottom">
                  {data.featureImg ? 
                    <div className="post-thumbnail">
                      <Link href={`/articulo/${data.slug}`}>
                        <Image
                          src={data.featureImg}
                          alt={data.title}
                          height={225}
                          width={300}
                          priority={true}
                        />
                    </Link>
                    </div>
                    :""}
					<div className="post-grid-content">
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
                </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionTwelve;
