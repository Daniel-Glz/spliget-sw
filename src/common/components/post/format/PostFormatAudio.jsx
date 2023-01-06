import ReactAudioPlayer from 'react-audio-player';
import SidebarTwo from "../../sidebar/SidebarTwo";
import PostMetaTwo from "./element/PostMetaTwo";

const PostFormatAudio = ({ postData }) => {

    const basePathLink = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? "" : "";
  
  	const postContent = postData.content.replaceAll('/images/', basePathLink + '/images/');

  return (
    <>
      <div className="post-single-wrapper axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <PostMetaTwo metaData={postData} />
              <div className="axil-post-details">
              {
                postData.audio ? (
                  <ReactAudioPlayer
                    src={postData.audio}
                    autoPlay={false}
                    controls
                  />
                ) : null
              }
                <div
                  className="post-details-content"
                  dangerouslySetInnerHTML={{ __html: postContent }}
                ></div>
              </div>
            </div>
            <div className="col-lg-4">
              <SidebarTwo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFormatAudio;
