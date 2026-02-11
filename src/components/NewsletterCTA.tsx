export default function NewsletterCTA() {
  return (
    <section className="newsletter-bg rounded-2xl p-8 md:p-12 text-center text-white">
      <h2 className="font-headline text-3xl md:text-4xl mb-3">Stay in the Loop</h2>
      <p className="font-body text-white/80 max-w-lg mx-auto mb-6">
        Get the week's best stories on wellness, style, food, and culture — delivered every Sunday morning.
      </p>
      <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 bg-white/20 text-white placeholder-white/60 font-ui text-sm px-5 py-3 rounded-full border border-white/30 focus:border-white focus:outline-none backdrop-blur-sm"
        />
        <button className="bg-white text-sage font-ui text-sm font-bold px-6 py-3 rounded-full hover:bg-cream transition-colors">
          Subscribe
        </button>
      </form>
      <p className="font-ui text-xs text-white/50 mt-3">No spam. Unsubscribe anytime.</p>
    </section>
  );
}
