import { Code, Layers, RefreshCw, Bot, Link, ShoppingCart, Smartphone, Cloud, Shield, Lightbulb, Workflow, Users, KeyRound, TrendingUp, Plug, Sparkles, Rocket, ShieldCheck, Target, ClipboardList, Code2, TestTube, LifeBuoy, Landmark, Heart, GraduationCap, Home, Factory, Truck, Store } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import ServiceFAQ from "@/components/ServiceFAQ";
import { AppleCardCompact } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";
import DevelopmentProcess from "@/components/DevelopmentProcess";

const inputs = [
  { icon: Lightbulb, title: "Your Vision", description: "Describe what you want to achieve and who will use it. We convert that into a scoped, practical plan." },
  { icon: Workflow, title: "Your Processes", description: "Show us how work moves through your team today. That flow becomes the foundation of the product." },
  { icon: Users, title: "Your Differentiators", description: "Point out what sets you apart from competitors. We build features that protect and amplify it." },
  { icon: KeyRound, title: "Your Exclusive Product", description: "The result is made only for you, free of unused modules and one-size-fits-all extras." },
];

const services = [
  { icon: Layers, title: "Business Platform Development", description: "ERP, CRM, and supply-chain systems modelled on your own operations, with smart automation that cuts repetitive data work and surfaces useful forecasts" },
  { icon: Code, title: "Software-as-a-Service Products", description: "Subscription-ready, multi-tenant products built from your concept, taking you from a first release to a platform that serves a growing customer base" },
  { icon: RefreshCw, title: "System Revamp & Migration", description: "Tell us what must stay and what must go. We rework ageing software into modular, cloud-hosted applications without losing the rules your business relies on" },
  { icon: Bot, title: "Intelligent Process Automation", description: "Bespoke bots and connectors that take over repetitive tasks such as document handling and multi-level approvals" },
  { icon: Link, title: "Integration & API Engineering", description: "Secure, well-documented interfaces that link your product to payment, CRM, and marketing tools so information stays in sync everywhere" },
  { icon: ShoppingCart, title: "Online Store Development", description: "Storefronts with personalised recommendations and stock logic designed around your products, pricing, and buyers" },
  { icon: Smartphone, title: "iOS & Android Apps", description: "Smooth, responsive mobile apps built with Flutter or React Native around the journeys your users care about most" },
  { icon: Cloud, title: "Cloud Hosting, DevOps & Upkeep", description: "Reliable AWS and Azure environments that flex with demand and keep costs in check, with continuous monitoring and updates after release" },
  { icon: Shield, title: "Security-First Engineering", description: "Protection written into the codebase from day one: encryption, access roles, vulnerability scans, and alignment with GDPR and HIPAA" },
];

const benefits = [
  { icon: KeyRound, title: "Ownership of What You Build", description: "Your code, data, and design assets belong to you, so there are no per-user licence fees and no dependence on a single vendor" },
  { icon: TrendingUp, title: "Room to Grow", description: "Cloud architecture planned for rising users and transaction volumes, so growth never forces a rebuild" },
  { icon: Plug, title: "Fits Your Existing Stack", description: "Works alongside your current ERP, CRM, and older systems, passing data between them automatically" },
  { icon: Sparkles, title: "A Genuine Edge", description: "Capabilities competitors cannot simply buy off the shelf, because they were written around how you operate" },
  { icon: Rocket, title: "Long-Term Value", description: "Modern technology and AI-ready foundations keep your software useful and relevant for years to come" },
  { icon: ShieldCheck, title: "Protection by Design", description: "Compliance measures and safeguards tuned to the specific risks of your sector and the data you handle" },
];

const process = [
  { step: 1, icon: Target, title: "Understand & Scope", description: "We listen to your goals, workflows, and feature wishes, then document them into a plan with a technology recommendation" },
  { step: 2, icon: ClipboardList, title: "Structure & Design", description: "Requirements turn into system architecture and clean interfaces, planned for safety and future growth" },
  { step: 3, icon: Code2, title: "Sprint-Based Build", description: "We build in two-week cycles and demo working features each time, so your feedback shapes the product" },
  { step: 4, icon: TestTube, title: "Safeguard & Verify", description: "Security checks and automated tests run on every code change, catching problems before they reach you" },
  { step: 5, icon: Rocket, title: "Final Checks & Go-Live", description: "Performance, load, and user-journey testing, followed by a controlled release to production" },
  { step: 6, icon: LifeBuoy, title: "Support & Growth", description: "After launch we watch performance, fix issues promptly, and add features as your needs evolve" },
];

const industries = [
  { icon: Landmark, title: "Fintech & Banking", description: "Payment, risk, and reporting tools that follow your own policies and regulatory duties" },
  { icon: Heart, title: "Healthcare", description: "Patient-facing and clinical software designed around how your care teams actually work" },
  { icon: GraduationCap, title: "Edtech", description: "Learning platforms and progress-tracking tools shaped around your learners and content" },
  { icon: ShoppingCart, title: "Ecommerce", description: "Catalogue, checkout, and order management built for your products and customers" },
  { icon: Home, title: "Real Estate", description: "Listing, enquiry, and property management systems that match your sales process" },
  { icon: Factory, title: "Manufacturing", description: "Production, inventory, and planning tools aligned with the way your floor operates" },
  { icon: Truck, title: "Logistics", description: "Tracking, dispatch, and fleet software mapped to your routes and delivery rules" },
  { icon: Store, title: "Retail", description: "Billing, stock, and customer engagement tools fitted to your business model" },
];

const faqs = [
  {
    question: "What do you mean by custom software built from my inputs?",
    answer: "It means your requirements drive everything. You explain your goals, how your team works, and which features you need, and we design and build software around that brief. Nothing is adapted from a ready-made product, so what you receive is made exclusively for your business."
  },
  {
    question: "What should I prepare before our first discussion?",
    answer: "A finished specification is not required. A simple description of the problem, your current process, and the features you have in mind is enough. Existing documents, sketches, or screenshots of current tools also help, and we will shape everything into a detailed scope together."
  },
  {
    question: "How is the cost of a project decided?",
    answer: "Price depends on the number of features, integrations, and the overall complexity of what you need. Once we have reviewed your inputs and completed the scoping stage, we share a clear estimate so you know what to expect before development starts."
  },
  {
    question: "Will I own the code and the product?",
    answer: "Yes. When the project is completed and paid for, the source code and related design assets for your product are handed over to you, as set out in our service agreement."
  },
  {
    question: "How long will development take?",
    answer: "It varies with scope. A lean first version often takes around 8 to 12 weeks, while larger business platforms can take 4 to 8 months. After reviewing your inputs we provide a timeline with milestones so you can plan around it."
  },
  {
    question: "Can I change my mind about features midway?",
    answer: "Yes. Because we build in short sprints and show working progress regularly, you can adjust priorities, add ideas, or drop features as you learn more. Changes are slotted into upcoming sprints with their impact on time and effort made clear."
  },
  {
    question: "Can the new software work with the systems we already use?",
    answer: "Definitely. We connect new products with existing ERP and CRM tools, third-party services, and older applications through secure interfaces, and we can gradually modernise legacy systems without interrupting your daily work."
  },
  {
    question: "How is my data and idea kept safe?",
    answer: "Security is part of how we build, not an extra step. We use encrypted storage, role-based access, and automated vulnerability checks throughout development, and we can sign a confidentiality agreement before you share any details."
  },
  {
    question: "Will the software cope if our user base grows quickly?",
    answer: "We host applications on scalable cloud infrastructure that adds capacity automatically when traffic rises, so performance stays steady whether you serve a small team or a very large audience."
  },
  {
    question: "What support do you offer once the software is live?",
    answer: "We provide monitoring, security updates, bug fixes, and new feature development after release. You can choose a regular monthly arrangement or request help only when you need it."
  },
];

const CustomSoftware = () => {
  return (
    <ServicePageLayout
      title="Custom Software Development"
      subtitle="Software Shaped by What You Tell Us"
      metaTitle="Custom Software Development Company | Made to Your Specifications | TechPivot"
      metaDescription="TechPivot builds bespoke business software from your own requirements, with exclusive features, smart automation and smooth integrations created only for your organisation."
      keywords="custom software development company, bespoke software, tailor-made business software, software built to requirements, AI-enabled software development, business platform development, SaaS development, legacy system migration, API integration services, mobile app development, software development company India"
      description="Tell us how your business works and what you need your software to do, and we build it from the ground up around that brief. Every feature is designed, coded, and tested exclusively for your organisation, whether that is an internal business platform, a customer-facing product, a mobile app, or a smarter way to connect the systems you already own."
      icon={<Code className="w-8 h-8 text-primary" />}
    >
      {/* Your Inputs */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              You Brief Us, We Build It
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Packaged software expects you to change your habits. We start with your habits instead and write the software to match them.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inputs.map((item, index) => (
              <AnimatedSection key={item.title} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Can Build for You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Smart, scalable software, each piece scoped from the requirements you share
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sectors We Build For
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every industry has its own rules and pressures, and your software should reflect yours
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.title} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact
                  icon={industry.icon}
                  title={industry.title}
                  description={industry.description}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Build Instead of Buy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What you gain when software is made for your business alone
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 lg:py-28 bg-surface-dark text-surface-dark-foreground animate-section overflow-hidden">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From Brief to Release
            </h2>
            <p className="text-surface-dark-foreground/70 max-w-2xl mx-auto">
              A clear, collaborative path that keeps your requirements in focus until the software is live
            </p>
          </AnimatedSection>

          <DevelopmentProcess process={process} />
        </div>
      </section>

      {/* FAQ */}
      <ServiceFAQ faqs={faqs} serviceName="Custom Software Development" />
    </ServicePageLayout>
  );
};

export default CustomSoftware;
