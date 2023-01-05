import WidgetSearch from "./WidgetSearch";
import WidgetNewsletter from "./WidgetNewsletter";

const SidebarOne = () => {
  return (
    <aside className="sidebar-inner">
      <WidgetSearch />
      <WidgetNewsletter />
    </aside>
  );
};

export default SidebarOne;
