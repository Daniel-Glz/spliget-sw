import ReactMarkdown from 'react-markdown';
import SidebarTwo from "../../sidebar/SidebarTwo";
import PostMetaTwo from "./element/PostMetaTwo";
import Image from 'next/image';
import WidgetTOC from '../../sidebar/WidgetTOC';
import { slugify } from '../../../utils';

const PostFormatStandard = ({ postData }) => {

  const formatMarkdown = {
    img: function ({ ...props }) {
      const substrings = props.alt?.split('{{');
      const alt = substrings[0].trim();
      const width = substrings[1] ? substrings[1].match(/(?<=w:\s?)\d+/g)[0] : 810;
      const height = substrings[1] ? substrings[1].match(/(?<=h:\s?)\d+/g)[0] : 425;
      let src = props.src;

      if (process.env.NODE_ENV === 'production') {
        let extension = src.split('.').pop();
        let srcName = src.split('/').pop().split('.').slice(0, -1).join('.');

        src = `_next/static/chunks/images/images/posts/${srcName}_${850}_${85}.${extension}`;
      }

      return <Image src={props.src} alt={alt} width={width} height={height} quality={85} placeholder="blur" className='axil-post-details-img' />;
    },
    h2: ({ ...props }) => (<h2 id={slugify(props.children[0])}>{props.children}</h2>),
    h3: ({ ...props }) => (<h3 id={slugify(props.children[0])}>{props.children}</h3>),
    h4: ({ ...props }) => (<h4 id={slugify(props.children[0])}>{props.children}</h4>),
    a:  ({...props}) => (<a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>)
  }

  return (
    <>
      <div className="post-single-wrapper axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <main className="col-lg-8">
              <PostMetaTwo metaData={postData} />
              <div className="axil-post-details mb_sm--40">
                <p>
                  <Image src={postData.featuredImage} alt={postData.featuredImageAlt} width={810} height={425} quality={85} priority placeholder="blur" />
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

export default PostFormatStandard;
