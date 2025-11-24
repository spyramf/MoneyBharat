import { Helmet } from "react-helmet-async";

/**
 * Google Analytics 4 Tracking Component
 * Loads GA4 script globally across all pages
 * Measurement ID: G-VCL2E76LPC
 */
const GA4Tracking = () => {
  return (
    <Helmet>
      {/* Google Analytics 4 */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VCL2E76LPC"
      />
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

export default GA4Tracking;
