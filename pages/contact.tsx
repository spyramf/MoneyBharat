import Head from 'next/head';
import StructuredData from '@/components/seo/StructuredData';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactFAQ from '@/components/contact/ContactFAQ';
import SupportChannels from '@/components/contact/SupportChannels';
import ContactLegal from '@/components/contact/ContactLegal';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contact Us - Money Bharat Finance | Get Expert Financial Advice</title>
        <meta name="description" content="Contact Money Bharat Finance for personalized financial advice on mutual funds, insurance, and loans. Call +91 9970735694 or email contact@moneybharatfinance.com. Free consultation available." />
        <meta name="keywords" content="contact money bharat, financial advisor contact, mutual fund advice, insurance consultation, loan assistance, financial planning help" />
      </Head>

      <StructuredData
        page="about"
        faqData={[
          {
            question: "How can I contact Money Bharat Finance?",
            answer:
              "You can reach us via phone at +91 9970735694, email at contact@moneybharatfinance.com, or fill out our contact form. We also offer WhatsApp support and live chat.",
          },
          {
            question: "Do you offer free consultations?",
            answer:
              "Yes, we offer free initial consultations to understand your financial goals and recommend suitable investment and insurance solutions.",
          },
          {
            question: "What are your office hours?",
            answer:
              "We are available Monday to Saturday, 9:00 AM to 7:00 PM IST. Emergency support is available 24/7 for existing clients.",
          },
        ]}
      />

      <ContactHero />

      <main className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <ContactForm />
            <ContactInfo />
          </div>

          <SupportChannels />
          <ContactFAQ />
          <ContactLegal />
        </div>
      </main>
    </div>
  );
};

export default Contact;
