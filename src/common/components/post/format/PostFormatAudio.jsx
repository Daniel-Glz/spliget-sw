import ReactAudioPlayer from 'react-audio-player';
import ReactMarkdown from 'react-markdown';
import SidebarTwo from "../../sidebar/SidebarTwo";
import PostMetaTwo from "./element/PostMetaTwo";
import Image from 'next/image';

const PostFormatAudio = ({ postData }) => {

  const imgFormat = {
    img: function ({ ...props }) {
      const substrings = props.alt?.split('{{');
      const alt = substrings[0].trim();

      const width = substrings[1] ? substrings[1].match(/(?<=w:\s?)\d+/g)[0] : 810;
      const height = substrings[1] ? substrings[1].match(/(?<=h:\s?)\d+/g)[0] : 425;

      return <Image src={props.src} alt={alt} width={width} height={height} quality={85} placeholder="blur" blurDataURL={props.src} />;
    },
  }

  return (
    <>
      <div className="post-single-wrapper axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <main className="col-lg-8">
              <PostMetaTwo metaData={postData} />
              <div className="axil-post-details mb_sm--40">
              {
                postData.audio ? (
                  <ReactAudioPlayer
                    src={postData.audio}
                    autoPlay={false}
                    controls
                  />
                ) : null
              }
                <ReactMarkdown components={imgFormat}>
                  {postData.content}
                </ReactMarkdown>
              </div>
            </main>
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
