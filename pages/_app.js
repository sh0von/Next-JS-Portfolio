import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/styles.css'; // Adjust the path to your CSS file

import '../styles/themes.css'; // Adjust the path to your CSS file
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
