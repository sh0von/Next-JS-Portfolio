// app.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';

// Initialize Google Analytics with your Measurement ID
ReactGA.initialize('G-7Q9W5EGHMG', {
  debug: process.env.NODE_ENV === 'development', // Enable debug mode in development
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Set up Google Analytics to track page changes
    const handleRouteChange = (url) => {
      ReactGA.set({ page: url });
      ReactGA.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Remove the event listener when the component is unmounted
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
