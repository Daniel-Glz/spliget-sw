import Link from "next/link";
import Image from "next/legacy/image";
import { removeDuplicates } from "../../utils";

const WidgetCategory = ({ catData }) => {

  const uniqueCategory = removeDuplicates(catData, "primaryCategory");

  return (
    <div className="axil-single-widget widget widget_categories mb--30">
      <ul>
        {uniqueCategory.slice(0, 4).map((data) => (
          <li className="cat-item" key={data.slug}>
            <Link legacyBehavior href={`/categoria/${data.slug}`}>
              <a className="inner">
                <div className="thumbnail">
                  <Image
                    src={"/images/add-banner/banner-01.webp"}
                    alt={"a"}
                    height={50}
                    width={50}
                    priority={true}
                  />
                </div>
                <div className="content">
                  <h5 className="title">{data.primaryCategory.name}</h5>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetCategory;
