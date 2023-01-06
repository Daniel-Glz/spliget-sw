import WidgetNewsletter from "./WidgetNewsletter";
import WidgetSearch from "./WidgetSearch";

const SidebarTwo = () => {
  return (
    <aside className="sidebar-inner">
      <WidgetSearch />
      <WidgetNewsletter />
    </aside>
  );
};

export default SidebarTwo;
