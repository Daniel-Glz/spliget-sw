import WidgetAd from "./WidgetAd";
import WidgetNewsletter from "./WidgetNewsletter";
import WidgetSearch from "./WidgetSearch";
import WidgetTags from "./WidgetTags";

const SidebarTwo = ({ dataPost, tagData }) => {
  return (
    <div className="sidebar-inner">
      <WidgetSearch />
      <WidgetNewsletter />
      <WidgetAd
        url="https://example.com/"
        image="/images/add-banner/banner-01.webp"
        height={236}
        width={390}
      />
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
