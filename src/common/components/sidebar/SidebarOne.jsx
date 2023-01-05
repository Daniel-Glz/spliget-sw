import WidgetSearch from "./WidgetSearch";
import WidgetNewsletter from "./WidgetNewsletter";

const SidebarOne = () => {
  return (
    <div className="sidebar-inner">
      <WidgetSearch />
      <WidgetNewsletter />
    </div>
  );
};

export default SidebarOne;
