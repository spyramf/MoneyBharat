
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Money Bharat Finance</title>
        <meta
          name="description"
          content="Privacy Policy for Money Bharat Finance - Learn how we collect, use, and protect your personal information."
        />
      </Helmet>

      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">Last Updated: May 19, 2025</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Money Bharat Finance ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect personal information that you provide to us, such as:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name, email address, phone number, and other contact details</li>
              <li>Financial information needed to provide our services</li>
              <li>Information provided when you contact our customer service</li>
              <li>Information you provide when filling out forms on our website</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We may use the information we collect for various purposes, including to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates to our terms and policies</li>
              <li>Respond to comments, questions, and requests</li>
              <li>Provide customer service and support</li>
              <li>Send promotional communications about new services, features, or offers</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Information Sharing</h2>
            <p className="mb-4">
              We may share your personal information with third parties in certain circumstances, such as:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>With your consent or at your direction</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Security</h2>
            <p className="mb-4">
              We have implemented appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or restrict processing of your personal information.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at privacy@moneybharat.com.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
