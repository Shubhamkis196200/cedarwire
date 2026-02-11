import { SEO } from '../components/SEO'

export function AboutPage() {
  return (
    <>
      <SEO title="About" description="CedarWire is your trusted source for lifestyle tools, wellness insights, and modern living guides." path="/about" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="font-display text-4xl font-bold mb-6">About CedarWire</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted leading-relaxed mb-6">CedarWire is your companion for modern living—offering free interactive tools, expert insights, and practical guides for wellness, style, finance, and everyday life.</p>
          
          <h2 className="font-display text-2xl font-bold mt-10 mb-4">Our Mission</h2>
          <p className="leading-relaxed mb-4">We believe everyone deserves access to practical tools and knowledge that make life easier. Whether you're calculating your BMI, planning a budget, building a capsule wardrobe, or tracking your habits—CedarWire provides free, privacy-first tools that actually work.</p>
          <p className="leading-relaxed mb-4">Unlike other lifestyle sites cluttered with ads and pop-ups, we focus on clean design, quality content, and user experience. All our calculators and tools run entirely in your browser—we don't store, track, or sell your data.</p>

          <h2 className="font-display text-2xl font-bold mt-10 mb-4">What We Offer</h2>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span> <span><strong>55+ Interactive Tools:</strong> Calculators, quizzes, trackers, and planners covering wellness, finance, style, home, food, and productivity</span></li>
            <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span> <span><strong>Expert Content:</strong> In-depth guides and articles written by lifestyle professionals and researchers</span></li>
            <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span> <span><strong>100% Free:</strong> No paywalls, no subscriptions—just helpful resources available to everyone</span></li>
            <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span> <span><strong>Privacy First:</strong> Your data stays on your device. We don't track, collect, or sell your information</span></li>
          </ul>

          <h2 className="font-display text-2xl font-bold mt-10 mb-4">Our Values</h2>
          <p className="leading-relaxed mb-4"><strong>Quality Over Quantity:</strong> Every tool is thoughtfully designed with real functionality, not just another page to drive traffic.</p>
          <p className="leading-relaxed mb-4"><strong>Science-Backed:</strong> Our calculators use established formulas and research. Our guides cite credible sources.</p>
          <p className="leading-relaxed mb-4"><strong>User-Centric Design:</strong> Clean layouts, intuitive interfaces, and mobile-friendly experiences—because your time matters.</p>
          <p className="leading-relaxed mb-4"><strong>Continuous Improvement:</strong> We regularly update tools, add new features, and expand our content library based on user feedback.</p>

          <h2 className="font-display text-2xl font-bold mt-10 mb-4">Get in Touch</h2>
          <p className="leading-relaxed">Have feedback, suggestions, or questions? We'd love to hear from you. CedarWire is built for real people navigating real life—and your input helps us serve you better.</p>
        </div>
      </div>
    </>
  )
}
