import { Bot, Brain, MessageSquare, Workflow, RefreshCw, ShieldCheck, Headphones, Briefcase, Search, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { AppleCardCompact, AppleCardFeature } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const capabilities = [
  {
    icon: Brain,
    title: "Autonomous Decision Making",
    description: "AI agents that analyze complex situations, evaluate multiple options, and make data-driven decisions autonomously with full transparency and auditability",
  },
  {
    icon: Workflow,
    title: "Multi-Step Planning & Execution",
    description: "Break down complex business goals into actionable steps, coordinate across multiple systems, and execute sophisticated workflows with error recovery",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Understanding",
    description: "Communicate with agents using natural language across 100+ languages with context retention, intent recognition, and nuanced response generation",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning & Adaptation",
    description: "Agents that learn from every interaction, incorporate feedback, and continuously improve their accuracy, efficiency, and decision quality over time",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Safety & Governance",
    description: "Built-in guardrails, human-in-the-loop oversight, comprehensive audit trails, and configurable boundaries to ensure safe, compliant operation",
  },
];

const applications = [
  {
    icon: Headphones,
    title: "Autonomous AI Workflows",
    description: "Multi-step backend operations that run end to end without a human on the common path claims triage, invoice reconciliation, order exception handling, account provisioning, compliance checks with configurable autonomy levels per step.Deploy intelligent agents that handle complex inquiries, troubleshoot multi-step issues, and seamlessly escalate to humans while maintaining full context.",
    },
  {
    icon: Briefcase,
    title: "EMulti-Agent Systems",
    description: "Specialized agents with defined roles and coordination protocols supervisor/worker, sequential pipelines, and independent verification instead of a single monolithic prompt attempting everything at once.",
    
  },
  {
    icon: Search,
    title: "LLM-Powered Task Execution",
    description: "The layer that turns model output into a reliable system action: structured output enforcement, deterministic tool use, and model routing tuned to your accuracy, cost, and data-residency constraints.",
    
  },
  {
    icon: TrendingUp,
    title: "Human-in-the-Loop Escalation",
    description: "Autonomy as a spectrum, not a switch. Confidence thresholds, approval gates, and exception queues — so agents start by suggesting, and earn broader authority against measured production performance.",
    },
];

const techStack = [
 /* { category: "Foundation Models", items: "GPT-4, Claude 3, Gemini Pro, LLaMA 3" },*/
 /* { category: "Agent Frameworks", items: "LangGraph, AutoGPT, CrewAI, AgentGPT" },*/
 /* { category: "Vector Databases", items: "Pinecone, Weaviate, Chroma, Milvus" },*/
  /*{ category: "Integration Tools", items: "APIs, Webhooks, Zapier, Custom Connectors" },*/
]; 

const AgenticAI = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <ServicePageLayout
      title="Autonomous Systems That Act, Not Chatbots That Talk"    
      subtitle="Autonomous Intelligence"
      metaTitle="Agentic AI Development Services | Autonomous AI Agents | TechPivot"
      metaDescription="Build enterprise agentic AI systems: autonomous AI agents, multi-agent workflows, LLM automation and AI copilots. Talk to TechPivot's agentic AI experts."
      keywords="agentic AI, AI agents, autonomous AI agents, agentic AI development company, multi-agent systems, LLM agents, AI workflow automation, enterprise AI agents, AI copilot development, agentic AI services India"
      description="We engineer AI agents that execute real backend operations end to end: retrieving state, making decisions, calling internal APIs, handling failure, and escalating to a human only when the decision genuinely requires one."
      icon={<Bot className="w-8 h-8 text-primary" />}
      showVectorMesh={true}
    >
      {/* Agentic AI Is Not GenAI With a Loop */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Agentic AI Is Not GenAI With a Loop
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This is the single most misunderstood boundary in enterprise AI right now and getting it wrong is why agent programs fail.
              </p>
                    
              <p>The implication: you cannot bolt autonomy onto a content-generation stack. Agents need a different architecture — permissioning, transactional semantics, idempotency, and rollback. That's the engineering we do.

</p>
          </div>
        </div>
      </section>

{/* Key Capabilities - Scrollable */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Capabilities
            </h2>
          </AnimatedSection>
          
          <div className="relative">
            {/* Scroll Buttons */}
            <button
              onClick={() => scroll('left')}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background shadow-lg border border-border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft ? 'opacity-100 hover:bg-primary hover:text-primary-foreground' : 'opacity-0 pointer-events-none'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => scroll('right')}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background shadow-lg border border-border flex items-center justify-center transition-all duration-300 ${
                canScrollRight ? 'opacity-100 hover:bg-primary hover:text-primary-foreground' : 'opacity-0 pointer-events-none'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide px-8 pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {capabilities.map((cap, index) => (
                <motion.div 
                  key={cap.title} 
                  className="flex-shrink-0 w-80 snap-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AppleCardCompact
                    icon={cap.icon}
                    title={cap.title}
                    description={cap.description}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* What We Build */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Build
            </h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-6">
            {applications.map((app, index) => (
              <AnimatedSection key={app.title} animation="fadeUp" delay={index * 100}>
                <AppleCardFeature
                  icon={app.icon}
                  title={app.title}
                  description={app.description}
                  features={app.features}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* Three Ways to Work With Us */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Capabilities
            </h2>
          </AnimatedSection>
          
          <div className="relative">
            {/* Scroll Buttons */}
            <button
              onClick={() => scroll('left')}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background shadow-lg border border-border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft ? 'opacity-100 hover:bg-primary hover:text-primary-foreground' : 'opacity-0 pointer-events-none'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => scroll('right')}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background shadow-lg border border-border flex items-center justify-center transition-all duration-300 ${
                canScrollRight ? 'opacity-100 hover:bg-primary hover:text-primary-foreground' : 'opacity-0 pointer-events-none'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide px-8 pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {capabilities.map((cap, index) => (
                <motion.div 
                  key={cap.title} 
                  className="flex-shrink-0 w-80 snap-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AppleCardCompact
                    icon={cap.icon}
                    title={cap.title}
                    description={cap.description}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Applications */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real-World Applications
            </h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-6">
            {applications.map((app, index) => (
              <AnimatedSection key={app.title} animation="fadeUp" delay={index * 100}>
                <AppleCardFeature
                  icon={app.icon}
                  title={app.title}
                  description={app.description}
                  features={app.features}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Not Sure If Your Workflow Is a Fit for an Agent?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bring us the workflow. We'll tell you whether it's tractable today, what the guardrails would need to look like, and plainly if agentic AI is the wrong tool for it.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <AnimatedSection key={tech.category} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact
                  title={tech.category}
                  description={tech.items}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default AgenticAI;
