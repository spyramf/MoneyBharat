import { Helmet } from 'react-helmet-async';

const GoogleAnalytics = () => {
  return (
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-VCL2E76LPC"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VCL2E76LPC');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;
