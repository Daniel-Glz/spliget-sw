import ReactAudioPlayer from 'react-audio-player';
import ReactMarkdown from 'react-markdown';
import SidebarTwo from "../../sidebar/SidebarTwo";
import PostMetaTwo from "./element/PostMetaTwo";
import Image from 'next/image';
import WidgetTOC from '../../sidebar/WidgetTOC';
import { slugify } from '../../../utils';

const PostFormatAudio = ({ postData }) => {

  const formatMarkdown = {
    img: function ({ ...props }) {
      const substrings = props.alt?.split('{{');
      const alt = substrings[0].trim();
      const width = substrings[1] ? substrings[1].match(/(?<=w:\s?)\d+/g)[0] : 810;
      const height = substrings[1] ? substrings[1].match(/(?<=h:\s?)\d+/g)[0] : 425;

      return <Image src={props.src} alt={alt} width={width} height={height} quality={85} placeholder="blur" blurDataURL={props.src} />;
    },
    h2: ({ ...props }) => (<h2 id={slugify(props.children[0])}>{props.children}</h2>),
    h3: ({ ...props }) => (<h3 id={slugify(props.children[0])}>{props.children}</h3>),
    h4: ({ ...props }) => (<h4 id={slugify(props.children[0])}>{props.children}</h4>),
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
                <p>
                  <Image src={postData.featuredImage} alt={postData.featuredImageAlt} width={810} height={425} quality={85} placeholder="blur" blurDataURL={postData.featuredImage} />
                </p>
                <WidgetTOC postData={postData} hideOnDesktop />
                <ReactMarkdown components={formatMarkdown}>
                  {postData.content}
                </ReactMarkdown>
              </div>
            </main>
            <div className="col-lg-4">
              <SidebarTwo postData={postData}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFormatAudio;
