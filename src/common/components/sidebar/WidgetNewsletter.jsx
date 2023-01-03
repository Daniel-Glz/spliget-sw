const WidgetNewsletter = () => {
  return (
    <div className="axil-single-widget widget widget_newsletter mb--30">
      <div className="newsletter-inner text-center">
        <h4 className="title mb--15">No te pierdas un articulo!</h4>
        <p className="b2 mb--30">
          Registrate y se el primero en enterarte de las novedades.
        </p>
        <form action="#">
          <div className="form-group">
            <input type="text" placeholder="Escribe tu correo " />
          </div>
          <div className="form-submit">
            <button className="cerchio axil-button button-rounded">
              <span>Subscribirte</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WidgetNewsletter;
