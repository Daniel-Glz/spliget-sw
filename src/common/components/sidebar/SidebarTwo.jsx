import WidgetNewsletter from "./WidgetNewsletter";
import WidgetSearch from "./WidgetSearch";
import WidgetTOC from "./WidgetTOC";

const SidebarTwo = ({ postData }) => {
  return (
    <aside className="sidebar-inner">
      <WidgetSearch />
      <WidgetNewsletter />
      <WidgetTOC postData={postData} hideOnMobile />
    </aside>
  );
};

export default SidebarTwo;
