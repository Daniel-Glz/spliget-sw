import Footer from "../common/elements/footer/Footer";
import Header from "../common/elements/header/Header";
import WidgetSearch from "../common/components/sidebar/WidgetSearch";
import WidgetPostList from "../common/components/sidebar/WidgetPostList";
import FormOne from "../common/components/form/FormOne";
import HeadTitle from "../common/elements/head/HeadTitle";
import { getAllPosts } from "../../lib/api";
import { sortingByDate } from "../common/utils";

const ContactUs = ({ allPosts }) => {
  return (
    <>
      <HeadTitle pageTitle="Spliget SW - Contacto" pageDescription="¿Tienes alguna pregunta o sugerencia para nosotros? ¡No dudes en ponerte en contacto! En esta página encontrarás nuestros datos de contacto, incluyendo nuestro número de teléfono y correo electrónico, así como un formulario de contacto para que puedas enviarnos tu mensaje de manera rápida y sencilla. ¡Estamos deseando escuchar de ti!"/>
      <Header pClass="header-light header-sticky header-with-shadow" />
      <div className="axil-post-list-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-8">
              {/* Start About Area  */}
              <h1>Contacto</h1>
              <div className="axil-about-us">
                <div className="inner">
                  <p>Hola! Bienvenido a la página de contacto de Spliget SW. Nos especializamos en proporcionar tutoriales detallados y respuestas a preguntas comunes sobre Javascript, Next.js y WordPress. Nuestra finalidad es ayudar a nuestros lectores a mejorar sus habilidades y resolver problemas en estas áreas de tecnología. </p>
                  <p>Si también desea colaborar con nosotros, proponer un tutorial o compartir sus conocimientos, estaremos encantados de escucharlo.</p>
                  <p>Gracias por visitar nuestra página y por considerar Spliget Sw como una fuente confiable de tutoriales sobre Javascript, Next.js y WordPress. ¡Esperamos seguir siendo de su interés!</p>
                  <p>Email: <a href="mailto:spliget.software@gmail.com">spliget.software@gmail.com</a></p>
                </div>
                <FormOne />
              </div>
              {/* End About Area  */}
            </div>
            <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
              <div className="sidebar-inner">
                <WidgetSearch />
                <WidgetPostList postData={allPosts} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer postsData={allPosts}/>
    </>
  );
}

export default ContactUs;


export async function getStaticProps() {
  const allPosts = getAllPosts([
    'postFormat',
    'slug',
    'title',
    'description',
    'date',
    'lastMod',
    'featuredImage',
    'featuredImageAlt',
    'authorName',
    'authorImage',
    'category',
  ])

  sortingByDate(allPosts);

  return {
    props: { allPosts },
  }
}

