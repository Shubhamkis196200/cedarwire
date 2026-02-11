import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <>
      <Helmet><title>About — CedarWire</title></Helmet>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="font-headline text-4xl md:text-5xl text-charcoal mb-6">About CedarWire</h1>
        <div className="prose-style space-y-5 text-charcoal-light leading-relaxed">
          <p className="text-lg">CedarWire is a lifestyle and trends publication for the thoughtfully modern. We believe that living well and thinking deeply aren't mutually exclusive — they're inseparable.</p>
          <p>Founded in 2026, CedarWire covers the topics that shape how we live today: wellness, style, food, travel, relationships, home design, and careers. Our approach is editorial, evidence-based, and unapologetically curious.</p>
          <p>We don't do clickbait. We don't do hot takes for the sake of hot takes. Instead, we invest in long-form storytelling, rigorous reporting, and perspectives that help our readers navigate a complex world with clarity and intention.</p>
          <h2 className="font-headline text-2xl text-charcoal mt-10 mb-4">Our Values</h2>
          <ul className="space-y-3 list-disc pl-5">
            <li><strong>Substance over sensation.</strong> Every story should teach you something, challenge an assumption, or offer a genuinely useful perspective.</li>
            <li><strong>Sustainability isn't optional.</strong> We embed environmental and social consciousness into everything we cover — not as a category, but as a lens.</li>
            <li><strong>Inclusivity by default.</strong> The "good life" looks different for everyone. Our coverage reflects that diversity.</li>
            <li><strong>Evidence over opinion.</strong> When we make a claim, we back it up. When experts disagree, we show you the debate.</li>
          </ul>
          <h2 className="font-headline text-2xl text-charcoal mt-10 mb-4">Our Team</h2>
          <p>CedarWire is produced by a small, dedicated team of writers, editors, and designers who care deeply about the intersection of lifestyle and culture. We're based everywhere — that's the beauty of modern media — and unified by a shared belief that thoughtful content can make a real difference in how people live.</p>
        </div>
      </div>
    </>
  );
}
