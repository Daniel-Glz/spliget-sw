import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.scss';
import { SSRProvider } from 'react-bootstrap';


function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
		  <Component {...pageProps} />
    </SSRProvider>
  )
}

export default MyApp
