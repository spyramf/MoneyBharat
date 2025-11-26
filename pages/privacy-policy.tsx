import { ArrowRight, FileText, Shield } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import { getSeoMetadata } from "@/constants/seoMetadata";

const PrivacyPolicy = () => {
  const seo = getSeoMetadata("privacyPolicy");
  return (
    <>
      <SEOHead {...seo} />

      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Shield className="text-fintech-purple h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fintech-purple to-fintech-blue">
              Privacy Policy
            </h1>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">
            <p className="text-gray-500 mb-8 pb-4 border-b border-gray-100">Last Updated: May 19, 2025</p>

            <div className="prose max-w-none text-gray-600">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-fintech-purple/10 text-fintech-purple p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Introduction
                </h2>
                <p className="mb-4">
                  Money Bharat Finance ("we", "our", or "us") is committed to protecting your privacy. This Privacy
                  Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                  website or use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-fintech-purple/10 text-fintech-purple p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Information We Collect
                </h2>
                <p className="mb-4">We may collect personal information that you provide to us, such as:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Name, email address, phone number, and other contact details</li>
                  <li>Financial information needed to provide our services</li>
                  <li>Information provided when you contact our customer service</li>
                  <li>Information you provide when filling out forms on our website</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-fintech-purple/10 text-fintech-purple p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  How We Use Your Information
                </h2>
                <p className="mb-4">We may use the information we collect for various purposes, including to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative information, such as updates to our terms and policies</li>
                  <li>Respond to comments, questions, and requests</li>
                  <li>Provide customer service and support</li>
                  <li>Send promotional communications about new services, features, or offers</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-fintech-purple/10 text-fintech-purple p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Information Sharing
                </h2>
                <p className="mb-4">
                  We may share your personal information with third parties in certain circumstances, such as:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>With service providers who perform services on our behalf</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect and defend our rights and property</li>
                  <li>With your consent or at your direction</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-fintech-purple/10 text-fintech-purple p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Data Security
                </h2>
                <p className="mb-4">
                  We have implemented appropriate security measures to protect your personal information from
                  unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
                  the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-fintech-purple/10 text-fintech-purple p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Your Rights
                </h2>
                <p className="mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, such as
                  the right to access, correct, delete, or restrict processing of your personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-fintech-purple/10 text-fintech-purple p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Changes to This Privacy Policy
                </h2>
                <p className="mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-fintech-purple/10 text-fintech-purple p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Contact Us
                </h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a
                    href="mailto:privacy@moneybharatfinance.com"
                    className="text-fintech-blue hover:text-fintech-purple underline"
                  >
                    privacy@moneybharatfinance.com
                  </a>
                  .
                </p>
              </section>
            </div>

            <div className="mt-12 pt-4 border-t border-gray-100">
              <a
                href="/"
                className="inline-flex items-center text-fintech-blue hover:text-fintech-purple transition-colors"
              >
                <ArrowRight size={16} className="mr-2" /> Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
