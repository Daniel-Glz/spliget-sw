import WidgetAd from "./WidgetAd";
import WidgetCategory from "./WidgetCategory";
import WidgetNewsletter from "./WidgetNewsletter";
import WidgetPostList from "./WidgetPostList";
import WidgetSearch from "./WidgetSearch";
import WidgetSocialShare from "./WidgetSocialShare";
import WidgetTags from "./WidgetTags";

const SidebarTwo = ({ dataPost, tagData }) => {
  return (
    <div className="sidebar-inner">
      <WidgetCategory catData={dataPost} />
      <WidgetSearch />
      <WidgetPostList postData={dataPost} />
      <WidgetNewsletter />
      <WidgetAd
        url="https://example.com/"
        image="/images/add-banner/banner-01.webp"
        height={236}
        width={390}
      />
      <WidgetSocialShare />
      <WidgetTags postTag={tagData}/>
      <WidgetAd
        url="https://example.com/"
        image="/images/add-banner/banner-02.webp"
        height={778}
        width={390}
      />
    </div>
  );
};

export default SidebarTwo;
