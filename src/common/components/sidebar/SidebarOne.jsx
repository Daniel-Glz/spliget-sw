import WidgetCategory from "./WidgetCategory";
import WidgetPostList from "./WidgetPostList";
import WidgetSearch from "./WidgetSearch";
import WidgetSocialShare from "./WidgetSocialShare";

const SidebarOne = ({dataPost}) => {
  return (
    <div className="sidebar-inner">
      <WidgetCategory catData={dataPost}/>
      <WidgetSearch />
      <WidgetPostList postData={dataPost}/>
      <WidgetSocialShare />
    </div>
  );
};

export default SidebarOne;
