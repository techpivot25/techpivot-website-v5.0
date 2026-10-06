import {
  Bot, Brain, MessageSquare, Workflow, RefreshCw, ShieldCheck,
  Layers, Search, TrendingUp, ChevronLeft, ChevronRight,
  Cpu, GitBranch, Zap, Database, Lock, FlaskConical,
  Rocket, Settings, BarChart3, AlertTriangle, CheckCircle2,
  HelpCircle, ChevronDown,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { AppleCardCompact, AppleCardFeature } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const capabilities = [
  {
    icon: Brain,
    title: "Autonomous Decision Making",
    description: "AI agents that analyze complex situations, evaluate multiple options, and make data-driven decisions autonomously with full transparency and auditability.",
  },
  {
    icon: Workflow,
    title: "Multi-Step Planning & Execution",
    description: "Break down complex business goals into actionable steps, coordinate across multiple systems, and execute sophisticated workflows with built-in error recovery.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Understanding",
    description: "Communicate with agents using natural language across 100+ languages with context retention, intent recognition, and nuanced response generation.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning & Adaptation",
    description: "Agents that learn from every interaction, incorporate feedback, and continuously improve their accuracy, efficiency, and decision quality over time.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Safety & Governance",
    description: "Built-in guardrails, configurable autonomy boundaries, comprehensive audit trails, and human escalation only where the decision genuinely requires it.",
  },
];

const applications = [
  {
    icon: Zap,
    title: "Autonomous AI Workflows",
    description: "Multi-step backend operations that run end to end without a human on the common path — claims triage, invoice reconciliation, order exception handling, account provisioning, compliance checks. Each step carries configurable autonomy levels, transactional semantics, and rollback. The agent retrieves state, calls internal APIs, handles failure, and closes the loop. A human sees it only when the decision genuinely requires one.",
    features: [
      "End-to-end execution with no manual handoffs on the happy path",
      "Idempotent, rollback-capable operations per step",
      "Configurable autonomy thresholds per workflow stage",
      "Full audit trail on every action taken",
    ],
  },
  {
    icon: GitBranch,
    title: "Multi-Agent Systems",
    description: "Specialized agents with defined roles and coordination protocols — supervisor/worker patterns, sequential pipelines, and independent verification — instead of a single monolithic prompt attempting everything at once. Each agent owns a bounded scope. Coordination is explicit. Failures are isolated. This is how you build reliable systems at scale, not how you build impressive demos.",
    features: [
      "Supervisor/worker and pipeline coordination patterns",
      "Independent verification agents to catch errors before commit",
      "Bounded scope per agent — no sprawling monolithic prompts",
      "Failure isolation so one agent's error doesn't cascade",
    ],
  },
  {
    icon: Cpu,
    title: "LLM-Powered Task Execution",
    description: "The layer that turns model output into a reliable system action: structured output enforcement, deterministic tool use, and model routing tuned to your accuracy, cost, and data-residency constraints. We wire LLMs into your internal APIs, databases, and third-party systems so the output isn't a draft — it's a committed transaction.",
    features: [
      "Structured output enforcement — no freeform text in production paths",
      "Deterministic tool use with typed inputs and validated outputs",
      "Model routing by task type, cost, and data-residency policy",
      "Direct integration with internal APIs, DBs, and third-party systems",
    ],
  },
  {
    icon: TrendingUp,
    title: "Human-in-the-Loop Escalation",
    description: "Autonomy as a spectrum, not a switch. Confidence thresholds, approval gates, and exception queues let agents start by suggesting and earn broader authority as production performance is measured. You control the boundary. This is the safety architecture that makes the other three viable in regulated or high-stakes environments.",
    features: [
      "Confidence-gated escalation — the agent flags, not guesses",
      "Approval queues for decisions above a configurable risk threshold",
      "Progressive autonomy expansion tied to measured accuracy",
      "Full context handed off to the human reviewer, not just a summary",
    ],
  },
];

const agentTypes = [
  {
    icon: Zap,
    title: "Reactive Agents",
    description: "Rule-based agents optimised for high-speed, low-latency automation where the decision space is bounded and determinism matters more than reasoning.",
  },
  {
    icon: Brain,
    title: "Deliberative Agents",
    description: "Planning-first agents that reason through multi-step paths before acting — suited for complex workflows where getting the sequence wrong has downstream consequences.",
  },
  {
    icon: BarChart3,
    title: "Optimisation Agents",
    description: "Utility-based systems that weigh trade-offs mathematically — cost vs. speed, risk vs. throughput — to continuously maximise a specific business metric.",
  },
  {
    icon: RefreshCw,
    title: "Adaptive Learning Agents",
    description: "Agents that improve from production outcomes using reinforcement signals — accuracy goes up over time without manual retraining cycles.",
  },
  {
    icon: Layers,
    title: "Simulation Agents",
    description: "Predictive agents that run virtual scenarios to forecast risk before real-world execution — supply chain, financial, and logistics planning use cases.",
  },
  {
    icon: GitBranch,
    title: "Hybrid Multi-Agent Systems",
    description: "Combinations of the above — specialised agents coordinated into a single coherent system, each contributing what it does best to an end-to-end workflow.",
  },
];

const services = [
  {
    icon: Search,
    title: "Strategy & Feasibility",
    description: "We assess your data infrastructure, identify the workflows where automation has the highest ROI, and build a phased execution plan — before a line of code is written.",
  },
  {
    icon: Cpu,
    title: "Custom Agent Development",
    description: "Purpose-built agents trained on your business logic, terminology, and operational rules — not generic wrappers around a foundation model.",
  },
  {
    icon: Database,
    title: "Integration & Orchestration",
    description: "We connect agents to your ERPs, CRMs, legacy systems, and internal APIs via secure middleware. LangGraph state machines enforce business rules and prevent loops.",
  },
  {
    icon: Lock,
    title: "Trust, Security & Compliance",
    description: "Red teaming, RBAC, SOC 2 / HIPAA / GDPR alignment, and data sovereignty in your private cloud. Security is architecture, not a checklist item.",
  },
  {
    icon: FlaskConical,
    title: "RAG & Memory Engineering",
    description: "Vector database integration (Pinecone, Weaviate, Chroma) keeps agents grounded in your live data — not hallucinating from stale training weights.",
  },
  {
    icon: Settings,
    title: "AgentOps & Monitoring",
    description: "24/7 observability, drift detection, and latency optimisation after go-live. When a model upgrade ships, we handle the migration and re-evaluation.",
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Discovery & Feasibility",
    description: "We map your data readiness, API surface, and workflow candidates. We tell you plainly which workflows are tractable today and which aren't ready — before any commitment.",
  },
  {
    number: "02",
    title: "Architecture & State Machine Design",
    description: "We design the agent topology, coordination patterns, and LLM routing strategy. The state machine is drawn and reviewed before development starts.",
  },
  {
    number: "03",
    title: "Agent Development & Prompt Engineering",
    description: "We build, test, and fine-tune agents against your real data and business rules — not synthetic benchmarks.",
  },
  {
    number: "04",
    title: "System Integration",
    description: "Agents connect to your ERPs, CRMs, databases, and internal APIs. Every integration is tested against failure modes, not just the happy path.",
  },
  {
    number: "05",
    title: "Red Teaming & Guardrails",
    description: "We stress-test agents for hallucinations, prompt injection, and out-of-bounds actions before go-live. Confidence thresholds and escalation gates are validated here.",
  },
  {
    number: "06",
    title: "Deployment & Continuous Optimisation",
    description: "We deploy with full observability in place. Performance is tracked against the KPIs defined in Discovery — and the agent earns expanded autonomy against measured results.",
  },
];

const governanceItems = [
  {
    icon: AlertTriangle,
    title: "Hallucination Control",
    description: "Agents are required to cite internal data sources to answer. Structured output enforcement blocks freeform generation on production paths.",
  },
  {
    icon: Lock,
    title: "Strict RBAC",
    description: "Every action is logged and attributable. An HR agent cannot access financial databases. Permissions are defined at the operation level, not the agent level.",
  },
  {
    icon: Database,
    title: "Data Sovereignty",
    description: "Your data runs in your private cloud (VPC). We never use proprietary operational data to train public models — by architecture, not just policy.",
  },
  {
    icon: CheckCircle2,
    title: "Compliance Alignment",
    description: "Agent workflows are built to align with SOC 2 Type II, HIPAA, GDPR, and ISO 27001 requirements from the start — not retrofitted before an audit.",
  },
];

const differentiators = [
  {
    icon: Layers,
    title: "Architecture-First",
    description: "Permissioning, transactional semantics, idempotency, and rollback are built into the agent design — not retrofitted after the demo works.",
  },
  {
    icon: Search,
    title: "No Monolithic Prompts",
    description: "We decompose work into bounded agents with explicit coordination. Reliable systems are not built from one giant instruction set.",
  },
  {
    icon: ShieldCheck,
    title: "Observable by Default",
    description: "Every action an agent takes is logged, attributable, and replayable. You can audit exactly what ran, what it decided, and why.",
  },
  {
    icon: Brain,
    title: "Model-Agnostic Routing",
    description: "We route tasks to the right model for the job — balancing accuracy, latency, cost, and your data-residency requirements per operation.",
  },
];

const techStack = [
  { category: "Agent Frameworks", items: "LangGraph, CrewAI, AutoGen, LlamaIndex" },
  { category: "Foundation Models", items: "GPT-4o, Claude 3.5, Gemini Pro, Llama 3" },
  { category: "Vector Databases", items: "Pinecone, Weaviate, Chroma, Milvus" },
  { category: "Observability", items: "LangSmith, Arize AI, Weights & Biases" },
  { category: "Cloud & Infra", items: "AWS Bedrock, Azure AI Studio, Google Vertex AI" },
  { category: "Integration", items: "REST APIs, Webhooks, SAP, Salesforce, Custom Connectors" },
];

const faqs = [
  {
    question: "How is Agentic AI different from RPA or a standard chatbot?",
    answer: "RPA follows rigid scripts — if a variable changes, it breaks. Chatbots generate responses. Agentic AI executes operations: it holds state, calls real APIs with real consequences, handles failures, and adapts when the path is unclear. The architecture underneath is fundamentally different.",
  },
  {
    question: "Can agents integrate with our existing legacy systems, ERP, or CRM?",
    answer: "Yes. We specialise in connecting agents to SAP, Salesforce, Oracle, and custom legacy databases via secure API middleware. If your system has an API surface — even a partial one — we can wire an agent to it.",
  },
  {
    question: "How do you prevent the agent from hallucinating or taking a dangerous action?",
    answer: "Structured output enforcement, confidence-gated escalation, and human approval queues above a risk threshold you define. Agents start in a bounded mode and earn expanded authority against measured production performance — not on day one.",
  },
  {
    question: "Is our data secure? Does it get used to train public models?",
    answer: "No. Your data runs in your private cloud (VPC). We never use your operational data to retrain public models — this is an architectural constraint, not just a policy.",
  },
  {
    question: "How long does it take to build and deploy a production agent?",
    answer: "A focused proof of concept typically takes 3–4 weeks. A fully integrated, production-grade agent system — with integrations, red teaming, and guardrails — is typically 8–12 weeks depending on the complexity of your systems.",
  },
  {
    question: "How do we measure ROI?",
    answer: "We define KPIs during the Discovery phase before any development starts — hours saved per week, reduction in exception handling volume, ticket resolution rate, or whatever metric maps to your business case. The agent's expanded autonomy is earned against those numbers.",
  },
  {
    question: "Who owns the code and IP?",
    answer: "You do. Upon completion and final payment, your organisation retains full ownership of all custom agent code, prompt engineering, and workflow architecture.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
      container.addEventListener("scroll", checkScrollButtons);
      return () => container.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <ServicePageLayout
      title="Autonomous Systems That Think, Plan, and Execute"
      titleHighlights={["Think, Plan, and Execute"]}
      subtitle="Autonomous Intelligence"
      metaTitle="Agentic AI Development Services | Autonomous AI Agents | TechPivot"
      metaDescription="Build enterprise agentic AI systems: autonomous AI agents, multi-agent workflows, LLM automation and AI copilots. Talk to TechPivot's agentic AI experts."
      keywords="agentic AI, AI agents, autonomous AI agents, agentic AI development company, multi-agent systems, LLM agents, AI workflow automation, enterprise AI agents, AI copilot development, agentic AI services India"
      description="AI agents that execute real backend operations end to end. Not chatbots. Not wrappers. Systems that retrieve state, make decisions, call your APIs, and handle failure — autonomously."
      stats={[
        { value: "50+", label: "Agents deployed in production" },
        { value: "8–12 wks", label: "Typical delivery timeline" },
        { value: "100%", label: "IP ownership — yours on delivery" },
      ]}
      icon={<Bot className="w-8 h-8 text-primary" />}
      showVectorMesh={true}
    >

      {/* ── Agentic AI Is Not GenAI With a Loop ── */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Agentic AI Is Not GenAI With a Loop
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-5 text-left">
              <p>
                GenAI generates content. It takes a prompt and returns text — stateless, side-effect-free, useful for drafting and summarising.
              </p>
              <p>
                Agentic AI <strong className="text-foreground">executes operations</strong>. An agent holds state across steps, calls tools with real consequences — writing to a database, triggering an API, sending a notification — and handles the failures that follow. The loop is the easy part. The architecture underneath it is not.
              </p>
              <p>
                This is the single most misunderstood boundary in enterprise AI right now, and getting it wrong is why agent programs fail. You cannot bolt autonomy onto a content-generation stack. Agents need permissioning, transactional semantics, idempotency, and rollback. That's the engineering we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Build ── */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Build
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three core system types. Each solves a different layer of the autonomous operations problem.
            </p>
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

      {/* ── Agent Types ── */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Right Agent for the Right Task
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Not every workflow needs the same architecture. We match the agent type to the decision structure of your problem.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentTypes.map((agent, index) => (
              <AnimatedSection key={agent.title} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact
                  icon={agent.icon}
                  title={agent.title}
                  description={agent.description}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Services ── */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From feasibility through to production monitoring — we cover the full lifecycle.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* ── Key Capabilities — Scrollable ── */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The engineering primitives that make autonomous operation reliable in production.
            </p>
          </AnimatedSection>

          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background shadow-lg border border-border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft ? "opacity-100 hover:bg-primary hover:text-primary-foreground" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background shadow-lg border border-border flex items-center justify-center transition-all duration-300 ${
                canScrollRight ? "opacity-100 hover:bg-primary hover:text-primary-foreground" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide px-8 pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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

      {/* ── How We Deliver ── */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Deliver
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A repeatable process built around reducing risk at every stage — not just shipping fast.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverySteps.map((step, index) => (
              <AnimatedSection key={step.number} animation="fadeUp" delay={index * 100}>
                <div className="bg-card border border-border rounded-xl p-6 h-full">
                  <span className="text-4xl font-bold text-primary/20 block mb-4">{step.number}</span>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Governance & Safety ── */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Enterprise Governance & Safety
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Autonomy at scale requires safety to be structural. These aren't policies — they're architectural constraints baked in from day one.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceItems.map((item, index) => (
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

      {/* ── Tech Stack ── */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built on an Enterprise-Ready Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're platform-agnostic but opinionated about quality. We use the frameworks that perform under production load, not just in demos.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* ── How We Build Differently ── */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Build Differently
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most agent demos work once. These principles are what make them work at production scale, under load, and when something goes wrong.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
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

      {/* ── FAQ ── */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The questions every technical buyer asks before committing to an agent program.
            </p>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Not Sure If Your Workflow Is a Fit for an Agent?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bring us the workflow. We'll tell you whether it's tractable today, what the guardrails would need to look like, and plainly if agentic AI is the wrong tool for it.
            </p>
          </AnimatedSection>
        </div>
      </section>

    </ServicePageLayout>
  );
};

export default AgenticAI;
