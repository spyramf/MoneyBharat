
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, FileText, FileCheck } from "lucide-react";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Money Bharat Finance</title>
        <meta
          name="description"
          content="Terms of Service for Money Bharat Finance - Please read these terms carefully before using our services."
        />
      </Helmet>

      <Navbar />

      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <FileCheck className="text-fintech-blue h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fintech-purple to-fintech-blue">
              Terms of Service
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">
            <p className="text-gray-500 mb-8 pb-4 border-b border-gray-100">
              Last Updated: May 19, 2025
            </p>
            
            <div className="prose max-w-none text-gray-600">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-fintech-blue/10 text-fintech-blue p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Acceptance of Terms
                </h2>
                <p className="mb-4">
                  By accessing or using the Money Bharat Finance website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-fintech-blue/10 text-fintech-blue p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Use License
                </h2>
                <p className="mb-4">
                  Permission is granted to temporarily access the materials on Money Bharat Finance's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-fintech-blue/10 text-fintech-blue p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Disclaimer
                </h2>
                <p className="mb-4">
                  The materials on Money Bharat Finance's website are provided on an 'as is' basis. Money Bharat Finance makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-fintech-blue/10 text-fintech-blue p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Limitations
                </h2>
                <p className="mb-4">
                  In no event shall Money Bharat Finance or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Money Bharat Finance's website, even if Money Bharat Finance or a Money Bharat Finance authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-fintech-blue/10 text-fintech-blue p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Accuracy of Materials
                </h2>
                <p className="mb-4">
                  The materials appearing on Money Bharat Finance's website could include technical, typographical, or photographic errors. Money Bharat Finance does not warrant that any of the materials on its website are accurate, complete or current. Money Bharat Finance may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-fintech-blue/10 text-fintech-blue p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Links
                </h2>
                <p className="mb-4">
                  Money Bharat Finance has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Money Bharat Finance of the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-fintech-blue/10 text-fintech-blue p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Modifications
                </h2>
                <p className="mb-4">
                  Money Bharat Finance may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-fintech-blue/10 text-fintech-blue p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Governing Law
                </h2>
                <p className="mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-fintech-blue/10 text-fintech-blue p-2 rounded-full mr-3">
                    <FileText size={18} />
                  </span>
                  Contact Us
                </h2>
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:legal@moneybharat.com" className="text-fintech-blue hover:text-fintech-purple underline">
                    legal@moneybharat.com
                  </a>.
                </p>
              </section>
            </div>
            
            <div className="mt-12 pt-4 border-t border-gray-100">
              <a href="/" className="inline-flex items-center text-fintech-blue hover:text-fintech-purple transition-colors">
                <ArrowRight size={16} className="mr-2" /> Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsOfService;
