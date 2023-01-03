import Link from "next/link";
import Image from "next/legacy/image";

const WidgetPostList = ({ postData }) => {
  return (
    <div className="axil-single-widget widget widget_postlist mb--30">
      <h5 className="widget-title">Articulos que te pueden interesar</h5>
      <div className="post-medium-block">
        {postData.slice(0, 3).map((data) => (
          <div className="content-block post-medium mb--20" key={data.slug}>
			  {data.featuredImage ? 
            <div className="post-thumbnail">
              <Link href={`/articulo/${data.slug}`}>
                  <Image
                    src={data.featuredImage.sourceUrl}
                    alt={data.featuredImage.altText}
                    height={100}
                    width={100}
                    priority={true}
                  />
              </Link>
            </div>
			:""}
            <div className="post-content">
              <h6 className="title">
                <Link href={`/articulo/${data.slug}`}>
                  {data.title}
                </Link>
              </h6>
              <div className="post-meta">
                <ul className="post-meta-list">
                  <li>{data.date}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WidgetPostList;
