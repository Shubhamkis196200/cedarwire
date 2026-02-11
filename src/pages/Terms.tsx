import { Helmet } from 'react-helmet-async';

export default function Terms() {
  return (
    <>
      <Helmet><title>Terms of Service — CedarWire</title></Helmet>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="font-headline text-4xl text-charcoal mb-2">Terms of Service</h1>
        <p className="text-warm-gray text-sm mb-10">Last updated: February 1, 2026</p>
        <div className="space-y-6 text-charcoal-light leading-relaxed">
          <p>Welcome to CedarWire. By accessing and using this website, you accept and agree to be bound by the terms and conditions outlined below.</p>
          <h2 className="font-headline text-2xl text-charcoal mt-8">Use of Content</h2>
          <p>All content published on CedarWire — including articles, images, graphics, and design — is owned by CedarWire and protected by copyright law. You may share our content via social media or link to it from your website, but you may not reproduce, distribute, or republish our content without written permission.</p>
          <h2 className="font-headline text-2xl text-charcoal mt-8">User Conduct</h2>
          <p>You agree not to use our website for any unlawful purpose, to not attempt to gain unauthorized access to our systems, and to not interfere with other users' enjoyment of the site.</p>
          <h2 className="font-headline text-2xl text-charcoal mt-8">Disclaimer</h2>
          <p>The information provided on CedarWire is for general informational purposes only. While we strive for accuracy, we make no warranties about the completeness, reliability, or suitability of the information. Any reliance you place on such information is at your own risk.</p>
          <h2 className="font-headline text-2xl text-charcoal mt-8">Health & Wellness Disclaimer</h2>
          <p>Our wellness and health-related content is not intended as medical advice. Always consult with a qualified healthcare professional before making changes to your health routine.</p>
          <h2 className="font-headline text-2xl text-charcoal mt-8">Limitation of Liability</h2>
          <p>CedarWire shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website.</p>
          <h2 className="font-headline text-2xl text-charcoal mt-8">Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date.</p>
          <h2 className="font-headline text-2xl text-charcoal mt-8">Contact</h2>
          <p>Questions about these terms? Email us at <a href="mailto:legal@cedarwire.com" className="text-sage hover:underline">legal@cedarwire.com</a>.</p>
        </div>
      </div>
    </>
  );
}
