import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <>
      <Helmet><title>Privacy Policy — CedarWire</title></Helmet>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="font-headline text-4xl text-charcoal mb-2">Privacy Policy</h1>
        <p className="text-warm-gray text-sm mb-10">Last updated: February 1, 2026</p>
        <div className="space-y-6 text-charcoal-light leading-relaxed">
          <p>At CedarWire, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
          <h2 className="font-headline text-2xl text-charcoal mt-8">Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide when you subscribe to our newsletter, fill out a contact form, or interact with our website. This may include your name, email address, and any other information you choose to provide.</p>
          <h2 className="font-headline text-2xl text-charcoal mt-8">How We Use Your Information</h2>
          <p>We use the information we collect to: deliver our newsletter and editorial content; respond to your inquiries; improve our website and content; analyze usage patterns to enhance user experience; and comply with legal obligations.</p>
          <h2 className="font-headline text-2xl text-charcoal mt-8">Cookies and Tracking</h2>
          <p>We use essential cookies to ensure our website functions properly. We may also use analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings.</p>
          <h2 className="font-headline text-2xl text-charcoal mt-8">Third-Party Services</h2>
          <p>We may use third-party services for analytics, email delivery, and content hosting. These services have their own privacy policies and we encourage you to review them.</p>
          <h2 className="font-headline text-2xl text-charcoal mt-8">Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. You may also unsubscribe from our communications at any time using the link provided in our emails.</p>
          <h2 className="font-headline text-2xl text-charcoal mt-8">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@cedarwire.com" className="text-sage hover:underline">privacy@cedarwire.com</a>.</p>
        </div>
      </div>
    </>
  );
}
