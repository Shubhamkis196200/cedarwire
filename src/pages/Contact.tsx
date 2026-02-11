import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <>
      <Helmet><title>Contact — CedarWire</title></Helmet>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="font-headline text-4xl md:text-5xl text-charcoal mb-6">Get in Touch</h1>
        <p className="text-charcoal-light text-lg mb-10">We'd love to hear from you. Whether it's a story tip, a collaboration inquiry, or just a kind word — our inbox is open.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <div className="bg-cream rounded-2xl p-6">
            <h3 className="font-headline text-xl mb-2">Editorial</h3>
            <p className="text-charcoal-light text-sm mb-1">Story pitches, corrections, feedback</p>
            <a href="mailto:editorial@cedarwire.com" className="text-sage font-ui text-sm font-semibold hover:underline">editorial@cedarwire.com</a>
          </div>
          <div className="bg-cream rounded-2xl p-6">
            <h3 className="font-headline text-xl mb-2">Partnerships</h3>
            <p className="text-charcoal-light text-sm mb-1">Advertising, sponsorships, collaborations</p>
            <a href="mailto:partnerships@cedarwire.com" className="text-sage font-ui text-sm font-semibold hover:underline">partnerships@cedarwire.com</a>
          </div>
        </div>
        <form className="space-y-5" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input type="text" placeholder="Your name" className="w-full bg-cream text-charcoal font-ui text-sm px-5 py-3 rounded-xl border border-cream-dark focus:border-sage focus:outline-none" />
            <input type="email" placeholder="Your email" className="w-full bg-cream text-charcoal font-ui text-sm px-5 py-3 rounded-xl border border-cream-dark focus:border-sage focus:outline-none" />
          </div>
          <input type="text" placeholder="Subject" className="w-full bg-cream text-charcoal font-ui text-sm px-5 py-3 rounded-xl border border-cream-dark focus:border-sage focus:outline-none" />
          <textarea rows={5} placeholder="Your message" className="w-full bg-cream text-charcoal font-ui text-sm px-5 py-3 rounded-xl border border-cream-dark focus:border-sage focus:outline-none resize-none" />
          <button className="bg-sage text-white font-ui text-sm font-bold px-8 py-3 rounded-full hover:bg-sage-light transition-colors">Send Message</button>
        </form>
      </div>
    </>
  );
}
