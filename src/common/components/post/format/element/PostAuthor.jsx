import Link from "next/link";
import Image from "next/legacy/image";

const PostAuthor = ({dataAuthor}) => {
  return (
    <div className="about-author">
      <div className="media">
        <div className="thumbnail">
            <Link href="#">
                    <Image
                    src={"/images/author/author-01.jpg"}
                    alt={""}
                    height={105}
                    width={105}
                  />
            </Link>

        </div>
        <div className="media-body">
          <div className="author-info">
            <h5 className="title">
            <Link legacyBehavior href="#">
                <a className="hover-flip-item-wrapper">
                    <span className="hover-flip-item">
                    <span data-text={dataAuthor.author_name}>{dataAuthor.author_name}</span>
                    </span>
                </a>
            </Link>
            </h5>
            <span className="b3 subtitle">{dataAuthor.author_designation}</span>
          </div>
          <div className="content">
            <p className="b1 description">
                {dataAuthor.author_bio}
            </p>
            <ul className="social-share-transparent size-md">
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAuthor;
