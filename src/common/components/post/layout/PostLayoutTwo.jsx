import Link from "next/link";
import Image from "next/legacy/image";
import categories from "../../../../data/categories/categories.json";

const PostLayoutTwo = ({ dataPost, postStart, show, bgColor }) => {
  return (
    <>
      {
        dataPost.length > 0 ?
          dataPost.slice(postStart || 0, show).map((data, index) => (
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
                      placeholder="blur"
                      blurDataURL={data.featuredImage}
                      quality={85}
                    />
                  </Link>
                </div>
              }

              <div className="post-content">
                <div className="post-cat">
                  <div className="post-cat-list">
                    <Link legacyBehavior href={`/categoria/${categories.find((cateData) => cateData.label === data.category).dir}`}>
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
                  <h3 className="title teaser-title">
                    <Link href={`/articulo/${data.slug}`}>
                      {data.title}
                    </Link>
                  </h3>}
                <div className="post-meta-wrapper">
                  <div className="post-meta">
                    <div className="content">
                      <div className="post-author-name h6">
                        <span className="hover-flip-item">
                          <span data-text={data.authorName}>
                            {data.authorName}
                          </span>
                        </span>
                      </div>
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
          ))
          :
          <div className="no-search-container">
            <h3>No se han encontrado articulos</h3>
            <Link href="/">
              <button className="axil-button button-rounded no-search-button">Reiniciar busqueda</button>
            </Link>
          </div>
      }
    </>
  );
};

export default PostLayoutTwo;
