import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Users, Award, Shield } from "lucide-react";
import { AppleCardCompact } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push into hard problems others route around, and we can point to what we shipped as a result."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We embed with client engineering teams rather than hand off architecture diagrams, because the seam between systems is where the work actually lives.Working closely with clients to understand and exceed their expectations"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We judge our work by measurable performance under production load, not by the elegance of the design document."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We tell clients when AI is the wrong tool, when a closed-source dependency is the right call, and when a project should not be built because trust compounds and shortcuts do not.Building trust through transparent and ethical business practices"
  }
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About TechPivot | AI & Software Development Company</title>
        <meta name="description" content="TechPivot Technologies builds AI-powered software and platforms from autonomous agents to full-stack products — engineered with algorithmic precision for enterprises across the US, India, Middle East, and UK." />
        <meta name="keywords" content="about TechPivot, AI software company, algorithmic engineering, agentic AI development, custom software company India, global AI services, enterprise software US India UK Middle East" />
        <link rel="canonical" href="https://techpivot.in/about" />
        <meta property="og:title" content="About TechPivot | AI Engineering with Algorithmic Precision" />
        <meta property="og:description" content="TechPivot Technologies builds AI-powered software and platforms engineered with algorithmic precision for enterprises across the US, India, Middle East, and UK." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techpivot.in/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About TechPivot | AI Engineering with Algorithmic Precision" />
        <meta name="twitter:description" content="TechPivot Technologies builds AI-powered software and platforms engineered with algorithmic precision for enterprises across the US, India, Middle East, and UK." />
      </Helmet>
      
      <Header />
      
      <main className="bg-slate-950 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-surface-dark text-surface-dark-foreground relative overflow-hidden">
          {/* Geometric decorations */}
          <div className="absolute -top-20 -right-20 w-80 h-80 border border-surface-dark-foreground/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-primary/20 rounded-full" />
          
          <div className="container px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block"
              >
                ABOUT US
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                AI Engineering with Algorithmic Precision
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-surface-dark-foreground/70"
              >
                We are a collective of AI researchers, distributed systems engineers, and cybersecurity veterans who build across the hardest seam in enterprise technology: the gap between legacy infrastructure and production-grade AI. We operate as an extension of your engineering team.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 lg:py-28 bg-slate-950">
          <div className="container px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Vision */}
              <AnimatedSection animation="fadeUp">
                <motion.div 
                  className="h-full p-8 bg-slate-900 rounded-2xl transition-all duration-500"
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"
                  }}
                >
                  <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
                    Our Vision
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">
                    AI that runs inside critical systems not beside them.
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    We are building toward a world where enterprises no longer treat AI as a parallel experiment running in a sandbox, disconnected from the systems that actually run the business. Instead, AI becomes a native capability of the infrastructure already trusted to move money, serve customers, and satisfy regulators engineered with mathematical rigor, secured by default, and measured in outcomes rather than demos. We intend to set the global standard for that engineering.
                  </p>
                </motion.div>
              </AnimatedSection>

              {/* Mission */}
              <AnimatedSection animation="fadeUp" delay={100}>
                <motion.div 
                  className="h-full p-8 bg-slate-900 rounded-2xl transition-all duration-500"
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"
                  }}
                >
                  <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
                    Our Mission
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">
                    Closing the gap between legacy infrastructure and next-generation AI.
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    AI programs rarely fail at the model. They fail at the seam where streaming inference meets batch pipelines, where GPU elasticity meets change-control policy, where feature freshness meets data residency. Our mission is to engineer across that seam: sovereign, secure, sustainable AI platforms that solve real business problems with algorithmic precision, break enterprise dependence on closed-source black boxes, and produce outcomes you can measure in latency, cost, and revenue.
                  </p>
                </motion.div>
              </AnimatedSection>
            </div>

            {/* Why We're Different */}
            <div className="mt-12 p-8 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">Why TechPivot is Different</h3>
              <p className="text-slate-400 leading-relaxed">
                Most AI vendors sell a model or a platform and leave the integration problem to you. We start from the integration problem. Every system we ship is backed by open-source algorithmic optimization frameworks, applied and tuned by our specialists to your specific infrastructure not a reference architecture adapted from someone else's cloud. The result: systems that perform measurably better under your load, scale at lower cost, and ship faster than conventional development delivers.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">AI-First</div>
                  <div className="text-sm text-slate-400">AI at the core of every product, not bolted on after the architecture is frozen.

</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Algorithmic</div>
                  <div className="text-sm text-slate-400">Mathematical precision applied to infrastructure, performance, and inference economics.</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Global</div>
                  <div className="text-sm text-slate-400">Engineering for enterprises across the US, India, Middle East, and UK, with data-residency and regulatory boundaries treated as first-class design constraints.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 lg:py-28 bg-slate-900/50">
          <div className="container px-6 lg:px-12">
            <AnimatedSection animation="fadeUp" className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Our Core Values.
              </h2>
              <p className="text-xl text-slate-400 mt-2">
                The principles that guide everything we do stated as commitments, not adjectives.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <AnimatedSection key={value.title} animation="fadeUp" delay={index * 100}>
                  <AppleCardCompact
                    icon={value.icon}
                    title={value.title}
                    description={value.description}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 lg:py-28 bg-slate-950">
          <div className="container px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fadeUp">
                <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-white">
                  From Vision to Reality
                </h2>
                
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                  <p>
                    <strong>TechPivot</strong> was founded by engineers who kept watching the same failure pattern repeat across industries.
                  </p>
                  <p>
                    Enterprise AI pilots looked promising in notebooks. They stalled the moment they met reality: decades of business logic locked inside mainframes and ERPs. Batch pipelines that could not deliver fresh context to a model. Access controls and audit requirements that no MLOps stack had been designed to satisfy. Models that were accurate in evaluation and unaffordable in production. The problem was never ambition. It was engineering across a gap no one had built for.
                  </p>
                  <p>
                    We started TechPivot to build for that gap specifically. Not "AI transformation" as a slogan engineering as a discipline: pipelines that are observable, models that are versioned, inference paths that are measured against latency, cost, security, and compliance constraints from day one. We connect what works to what's next, instead of asking enterprises to rip out the infrastructure their business depends on.
                  </p>
                  <p>
                    Today we engineer AI, blockchain, and metaverse systems for enterprises that need measurable technology outcomes — not prototypes. Our team of researchers, systems engineers, and security specialists operates as an extension of client engineering organizations, and our work is judged by the same standard our clients are: does it run, does it hold under load, and does it pay for itself.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-surface-dark text-surface-dark-foreground">
          <div className="container px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection animation="fadeUp">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  Ready to Work Together?
                </h2>
                <p className="text-xl text-surface-dark-foreground/70 mb-8">
                  Let's discuss how we can help transform your business with our cutting-edge solutions.
                </p>
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-base font-semibold group"
                  asChild
                >
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default About;
