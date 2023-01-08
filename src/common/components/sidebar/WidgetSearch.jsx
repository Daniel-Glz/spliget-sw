const WidgetSearch = () => {
  return (
    <div className="axil-single-widget widget widget_search mb--30">
      <div className="widget-title h5">Buscar articulos</div>
      <form action="#">
        <div className="axil-search form-group">
          <button type="submit" className="search-button" title="Boton de busqueda">
            <svg enableBackground="new 0 0 129 129" version="1.1" viewBox="0 0 129 129" xmlns="http://www.w3.org/2000/svg">
              <path d="m51.6 96.7c11 0 21-3.9 28.8-10.5l35 35c0.8 0.8 1.8 1.2 2.9 1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-35-35c6.5-7.8 10.5-17.9 10.5-28.8 0-24.9-20.2-45.1-45.1-45.1-24.8 0-45.1 20.3-45.1 45.1 0 24.9 20.3 45.1 45.1 45.1zm0-82c20.4 0 36.9 16.6 36.9 36.9 0 20.4-16.5 36.9-36.9 36.9s-36.9-16.6-36.9-36.9 16.6-36.9 36.9-36.9z" fill="#FFF"/>
            </svg>
          </button>
          <input type="text" className="form-control" aria-label="Buscar"/>
        </div>
      </form>
    </div>
  );
};

export default WidgetSearch;
