import { Code, Database, Cloud, Link, RefreshCw, Shield, Building, Heart, FileText, Factory, Target, ClipboardList, Palette, Code2, TestTube, Rocket, Lightbulb, Workflow, Users, KeyRound } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import ServiceFAQ from "@/components/ServiceFAQ";
import { AppleCardCompact } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";
import DevelopmentProcess from "@/components/DevelopmentProcess";

const services = [
  { icon: Code, title: "Custom Application Development", description: "Web and mobile applications built from the requirements and feature ideas you share, with nothing generic added" },
  { icon: Database, title: "Database Design & Development", description: "Data models shaped around your records, reports, and workflows, built for performance and growth" },
  { icon: Cloud, title: "Cloud-Native Solutions", description: "Architecture sized to your usage, from microservices and containers to serverless, as your requirements call for" },
  { icon: Link, title: "API Development & Integration", description: "Connections to the tools you already use, built to your data flows and business rules" },
  { icon: RefreshCw, title: "Legacy System Modernization", description: "You tell us what to keep, change, or add, and we rebuild your existing system around that" },
  { icon: Shield, title: "Security & Compliance", description: "Access controls and compliance measures (GDPR, HIPAA, SOC 2) matched to your industry and data" },
];

const inputs = [
  { icon: Lightbulb, title: "Your Ideas & Goals", description: "Share your vision, target users, and the problem you want solved. We turn it into a clear scope." },
  { icon: Workflow, title: "Your Workflows & Rules", description: "Walk us through how your team works today. Your processes become the logic of the software." },
  { icon: Users, title: "Your Unique Features", description: "Tell us what sets your business apart. We design and build those features specifically for you." },
  { icon: KeyRound, title: "Your Software, Your Ownership", description: "What we build is exclusive to you, with no shared product and no features you never asked for." },
];

const process = [
  { step: 1, icon: Target, title: "Requirement Gathering", description: "You share your goals, workflows, and feature expectations, and we capture them in detail" },
  { step: 2, icon: ClipboardList, title: "Planning", description: "Your inputs become a defined scope, architecture, and development roadmap you approve" },
  { step: 3, icon: Palette, title: "Design", description: "User-centered designs and specifications reflecting your requirements, reviewed with you" },
  { step: 4, icon: Code2, title: "Development", description: "Agile sprints that build your features, with regular demos so you can refine as we go" },
  { step: 5, icon: TestTube, title: "Testing", description: "QA, security testing, and performance checks against the requirements you gave us" },
  { step: 6, icon: Rocket, title: "Deployment", description: "Smooth rollout with training and ongoing support as your needs evolve" },
];

const industries = [
  { icon: Building, title: "Finance & Banking", description: "Trading platforms, risk management, and compliance tools built to your internal rules" },
  { icon: Heart, title: "Healthcare", description: "EHR systems, patient portals, and HIPAA-compliant solutions shaped around your care workflows" },
  { icon: FileText, title: "Insurance", description: "Claims, underwriting, and customer management built around your products and processes" },
  { icon: Factory, title: "Manufacturing", description: "ERP, supply chain, and production tools matched to how your plant actually runs" },
];

const faqs = [
  {
    question: "What does custom software development mean at TechPivot?",
    answer: "We build software based on the inputs you share, including your business goals, workflows, user needs, and feature ideas. Every feature is developed specifically for you rather than adapted from a ready-made product, so the final solution fits your business and is unique to it."
  },
  {
    question: "What inputs do I need to share to get started?",
    answer: "You don't need a finished specification. A clear description of the problem, how your team works today, and the features you have in mind is enough. You can also share documents, sketches, or existing system details. We help turn these into a detailed scope during requirement gathering."
  },
  {
    question: "Can I add or change features during development?",
    answer: "Yes. We work in agile sprints with regular demos, so you can review progress and refine or reprioritise features based on what you see. Changes are planned into upcoming sprints with clear visibility on scope and timelines."
  },
  {
    question: "How long does custom software development take?",
    answer: "Timelines depend on the scope and complexity of your requirements. A simple MVP typically takes 8-12 weeks, while enterprise-grade applications may require 4-8 months. Once we understand your inputs, we provide detailed timelines with milestones and deliverables."
  },
  {
    question: "What technologies do you use for development?",
    answer: "We select technologies based on your project requirements. Our stack includes React, Node.js, Python, .NET, Java, AWS, Azure, GCP, PostgreSQL, MongoDB, and more. We prioritize scalability, maintainability, and long-term support."
  },
  {
    question: "How do you handle project communication?",
    answer: "We maintain transparent communication through regular sprint demos, weekly status updates, and dedicated project managers. You'll have access to project management tools like Jira or Asana for real-time progress tracking."
  },
  {
    question: "What happens after the software is launched?",
    answer: "We offer comprehensive post-launch support including bug fixes, security updates, performance monitoring, and feature enhancements. As your needs grow, we continue to build new features on the same foundation, backed by SLA-based maintenance packages."
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Absolutely. We specialize in system integration, whether it's connecting to legacy systems, third-party APIs, or enterprise platforms like Salesforce, SAP, or Oracle. We ensure seamless data flow across your technology ecosystem."
  },
];

const CustomSoftware = () => {
  return (
    <ServicePageLayout
      title="Custom Software Development"
      subtitle="Built Around Your Inputs"
      metaTitle="Custom Software Development Company | Built to Your Requirements | TechPivot"
      metaDescription="Custom software development built from your inputs: unique features, workflows and integrations designed and developed specifically for your business. Talk to our team."
      keywords="custom software development company, bespoke software development, custom software as per requirements, tailor-made software, ERP software development, CRM development, business process automation, legacy system modernization, software integration services, enterprise software development India"
      description="Custom software development as per the inputs shared by you. We take your requirements, workflows, and ideas and build unique features and solutions developed specifically for your business. Our expertise spans ERP systems, CRM platforms, automation tools, industry-specific applications, legacy system modernization, and enterprise integrations, delivered with proven methodologies and agile practices."
      icon={<Code className="w-8 h-8 text-primary" />}
    >
      {/* Your Inputs */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Software Built From Your Inputs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              You share the requirements. We design and develop unique features specifically for your business.
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
              Our Custom Development Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end development driven by the inputs you share, with every feature built specifically for you
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

      {/* Process Timeline */}
      <section className="py-20 lg:py-28 bg-surface-dark text-surface-dark-foreground animate-section overflow-hidden">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Build Your Software
            </h2>
            <p className="text-surface-dark-foreground/70 max-w-2xl mx-auto">
              A proven process that keeps your inputs at the center, from first requirement to final release
            </p>
          </AnimatedSection>

          <DevelopmentProcess process={process} />
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
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

      {/* FAQ */}
      <ServiceFAQ faqs={faqs} serviceName="Custom Software Development" />
    </ServicePageLayout>
  );
};

export default CustomSoftware;
