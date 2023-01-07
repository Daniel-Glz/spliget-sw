import Link from "next/link";
import Image from "next/legacy/image";
const PostLayoutTwo = ({ dataPost, postStart, show, bgColor }) => { 
  return (
    <>
      {dataPost.slice(postStart || 0, show).map((data, index) => (
        <div
          className={`content-block post-list-view axil-control mt--30 ${bgColor || ""}`}
          key={data.slug}
        >
			{data.featuredImage && 
			<div className="post-thumbnail">
				<Link href={`/articulo/${data.slug}`}>
					<Image
					src={data.featuredImage}
					alt={data.featuredImageAlt}
					height={250}
					width={295}
					priority={index < 4}
					/>
				</Link>
			</div>
      }

          <div className="post-content">
            <div className="post-cat">
              <div className="post-cat-list">
                <Link legacyBehavior href={`/categoria/${data.slug}`}>
                  <a className="hover-flip-item-wrapper">
                    <span className="hover-flip-item">
                      <span data-text={data.category}>{data.category}</span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
			{data.postFormat === 'quote' ? 
			<blockquote>
				<h4 className="title">
				<Link href={`/articulo/${data.slug}`}>
					{data.title}
				</Link>
				</h4>
			</blockquote> : 
			<h2 className="title teaser-title">
              <Link href={`/articulo/${data.slug}`}>
                {data.title}
              </Link>
      </h2>}
            <div className="post-meta-wrapper">
              <div className="post-meta">
                <div className="content">
                  <h6 className="post-author-name">
                    <Link legacyBehavior href={`/author/`}>
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text={data.authorName}>
                            {data.authorName}
                          </span>
                        </span>
                      </a>
                    </Link>
                  </h6>
                  <ul className="post-meta-list">
                    <li>{data.date}</li>
                  </ul>
                </div>
              </div>
              <ul className="social-share-transparent justify-content-end">
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostLayoutTwo;
