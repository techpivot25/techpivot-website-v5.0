import {
  Sparkles, FileText, Code, Database, ShieldCheck,
  Brain, Search, Zap, BarChart3, Lock, RefreshCw,
  CheckCircle2, ShoppingCart, Stethoscope, GraduationCap,
  Building2, TrendingUp, ChevronDown, Cpu, FlaskConical,
  Settings,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { AppleCardCompact, AppleCardFeature } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const coreServices = [
  {
    icon: Search,
    title: "RAG — Retrieval-Augmented Generation",
    description: "Connect foundation models to your live enterprise data — knowledge bases, documentation, databases, and internal systems. The model answers from your facts, not from training weights. Hallucinations drop because the model must cite a retrieved source to answer.",
    features: [
      "Vector database setup: Pinecone, Weaviate, Chroma, pgvector",
      "Chunking, embedding, and retrieval pipeline engineering",
      "Hybrid search: dense + sparse retrieval for accuracy at scale",
      "Source citation enforcement — answers without a source are blocked",
    ],
  },
  {
    icon: Brain,
    title: "Custom LLM Fine-Tuning",
    description: "Fine-tune open-source models (Llama 3, Mistral, Phi-3) on your proprietary data, domain terminology, and brand voice — creating a specialised model you own outright. Not a prompt wrapper around GPT. An actual model trained on your business.",
    features: [
      "Full fine-tuning and LoRA/QLoRA for cost-efficient training",
      "Training on your internal documents, support logs, and domain data",
      "RLHF (Reinforcement Learning from Human Feedback) post-training",
      "100% IP ownership — model weights delivered to your infrastructure",
    ],
  },
  {
    icon: FileText,
    title: "Content & Insight Generation",
    description: "Structured pipelines that generate high-quality text at scale — product descriptions, reports, summaries, communications — grounded in your data and enforced to your brand voice. Not a one-shot prompt. A production system with quality gates.",
    features: [
      "Brand-voice enforcement via system prompts and fine-tuning",
      "Structured output: JSON, markdown, or templated formats",
      "Multi-step generation with validation and self-correction loops",
      "Human review queues for high-stakes output categories",
    ],
  },
  {
    icon: Code,
    title: "AI-Assisted Code Generation",
    description: "LLM-powered systems integrated into your development workflow — code generation, test writing, documentation, refactoring, and bug explanation — tuned to your codebase conventions and wired into your CI/CD pipeline.",
    features: [
      "Codebase-aware generation via RAG over your repositories",
      "Test generation: unit, integration, and edge-case coverage",
      "Automated documentation for functions, APIs, and modules",
      "Inline review and refactor suggestions tied to your style guide",
    ],
  },
];

const businessBenefits = [
  {
    icon: TrendingUp,
    title: "Cut Content Production Costs",
    description: "Automate first drafts, summaries, and structured reports. Teams produce more output without headcount increases.",
  },
  {
    icon: Zap,
    title: "Instant Answers from Your Data",
    description: "Replace folder-hunting and Slack threads with a RAG system that answers questions from your actual documentation in seconds.",
  },
  {
    icon: RefreshCw,
    title: "Faster Time-to-Market",
    description: "Generate marketing copy, technical specs, and product content in parallel — compressing timelines that used to take weeks.",
  },
  {
    icon: BarChart3,
    title: "Scalable Personalisation",
    description: "Produce tailored content for individual customers, segments, or markets at volume — without proportionally scaling your team.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Hallucination Risk",
    description: "RAG + guardrails mean the model answers from verified sources. If the data doesn't support the answer, the system says so.",
  },
  {
    icon: Brain,
    title: "Models That Learn Your Business",
    description: "Fine-tuned models improve over time via RLHF — accuracy against your domain increases the more your team uses the system.",
  },
];

const guardrails = [
  {
    icon: Lock,
    title: "Zero Data Retention",
    description: "API-based models (GPT, Claude) operate under zero-retention agreements. Open-source models run inside your VPC. Your data never trains a public model.",
  },
  {
    icon: ShieldCheck,
    title: "PII Redaction",
    description: "Automated PII detection and redaction before data reaches any model — names, IDs, financial data, and health information stay out of prompts.",
  },
  {
    icon: Database,
    title: "RBAC on Data Access",
    description: "Role-based access control on which documents and data sources each user's queries can retrieve. Finance data doesn't surface in HR queries.",
  },
  {
    icon: CheckCircle2,
    title: "Compliance Alignment",
    description: "Architectures built to align with GDPR, HIPAA, SOC 2 Type II, and ISO 27001 from the start — not retrofitted before an audit.",
  },
  {
    icon: FlaskConical,
    title: "Hallucination Guardrails",
    description: "NVIDIA NeMo Guardrails and Guardrails AI enforce source citation. The model is blocked from answering outside its retrieved context.",
  },
  {
    icon: Settings,
    title: "Output Validation",
    description: "Structured output enforcement, toxicity filtering, and brand-voice checks run on every generation before the response reaches the user.",
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Discovery & Data Audit",
    description: "We assess your data readiness — cleanliness, structure, volume, and retrieval feasibility — and identify the use cases where GenAI has the highest measurable ROI. KPIs are defined here, before any code is written.",
  },
  {
    number: "02",
    title: "Proof of Value (2–4 weeks)",
    description: "A functional prototype that validates the approach against your real data. You see it working — or we tell you it won't — within the first month. No six-week planning phases before a demo.",
  },
  {
    number: "03",
    title: "Development & Fine-Tuning",
    description: "RAG pipeline engineering, vector database setup, model fine-tuning, and prompt orchestration — all tuned to your specific business logic and domain terminology.",
  },
  {
    number: "04",
    title: "Integration & Security Layering",
    description: "The AI connects to your existing systems (ERP, CRM, internal APIs). PII redaction, RBAC, and compliance controls are implemented at the integration layer — not as an afterthought.",
  },
  {
    number: "05",
    title: "Deployment & RLHF",
    description: "We deploy with full observability and implement Reinforcement Learning from Human Feedback — the model gets more accurate over time as your team uses it, measured against the KPIs from Discovery.",
  },
];

const industries = [
  {
    icon: ShoppingCart,
    title: "E-Commerce & Retail",
    description: "Product description generation at scale, personalised recommendation copy, and customer review summarisation — grounded in your catalogue data via RAG.",
    features: [
      "Bulk product description generation from spec sheets",
      "Personalised email and offer copy per customer segment",
      "Review summarisation and sentiment extraction",
    ],
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "HIPAA-compliant document summarisation, clinical note drafting, and patient communication generation — with PII redaction and source-citation enforcement built in.",
    features: [
      "Clinical note and discharge summary drafting",
      "Medical literature summarisation via RAG",
      "Patient FAQ and communication generation",
    ],
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description: "Curriculum generation, personalised learning content, and assessment creation — tuned to subject matter and student level, with instructor review gates.",
    features: [
      "Lesson plan and curriculum generation",
      "Adaptive quiz and assessment creation",
      "Student progress summarisation and feedback drafting",
    ],
  },
  {
    icon: Building2,
    title: "Financial Services",
    description: "Report generation, regulatory document summarisation, and client communication drafting — with strict data isolation between client accounts and compliance alignment.",
    features: [
      "Earnings report and investment memo drafting",
      "Regulatory document summarisation (SOC 2, GDPR)",
      "Client portfolio commentary generation",
    ],
  },
  {
    icon: Cpu,
    title: "Software & SaaS",
    description: "AI-assisted code generation, automated documentation, and test writing — integrated into your existing CI/CD workflow and tuned to your codebase conventions.",
    features: [
      "Repository-aware code generation via RAG",
      "API and function documentation automation",
      "Unit and integration test generation",
    ],
  },
  {
    icon: TrendingUp,
    title: "Marketing & Media",
    description: "Ad copy, campaign content, and brand communications at scale — brand-voice enforced via fine-tuning, not just a system prompt.",
    features: [
      "Ad copy generation and A/B variant creation",
      "Social media content and caption generation",
      "Long-form article and report drafting",
    ],
  },
];

const techStack = [
  { category: "Foundation Models", items: "GPT-4o, Claude 3.5, Gemini Pro, Llama 3, Mistral, Phi-3" },
  { category: "Orchestration", items: "LangChain, LangGraph, LlamaIndex, FlowiseAI" },
  { category: "Vector Databases", items: "Pinecone, Weaviate, Chroma, Milvus, pgvector, Qdrant" },
  { category: "Cloud & Inference", items: "AWS Bedrock, Azure AI Studio, Google Vertex AI, vLLM, Ollama" },
  { category: "Guardrails & Evals", items: "NVIDIA NeMo, Guardrails AI, LangSmith, Arize Phoenix, MLflow" },
  { category: "Training & MLOps", items: "PyTorch, HuggingFace, Weights & Biases, LoRA/QLoRA, RLHF" },
];

const faqs = [
  {
    question: "What is RAG and why does it reduce hallucinations?",
    answer: "RAG (Retrieval-Augmented Generation) connects the language model to your actual data at query time. Instead of generating an answer from training memory, the model retrieves relevant documents from your knowledge base first and answers based on those. Because the answer must be grounded in a retrieved source, the model can't fabricate — if the data doesn't support the answer, the system is configured to say so rather than guess.",
  },
  {
    question: "What's the difference between RAG and fine-tuning? Which do I need?",
    answer: "RAG keeps the model's knowledge current by retrieving from live data — best for Q&A over documents, internal knowledge bases, and anything that updates frequently. Fine-tuning changes how the model behaves — its tone, output format, domain vocabulary, and reasoning style — and is best when you need consistent brand voice, specialised domain accuracy, or cost-effective inference from a smaller model. Most production systems use both: a fine-tuned model with a RAG retrieval layer on top.",
  },
  {
    question: "Is our data safe? Will it be used to train public models?",
    answer: "No. For API-based models (OpenAI, Anthropic), we use enterprise agreements with zero-data-retention policies — your data isn't logged or used for training. For maximum control, we deploy open-source models (Llama 3, Mistral) inside your private cloud (AWS/Azure VPC). Your data never leaves your infrastructure.",
  },
  {
    question: "Do we own the fine-tuned model and IP?",
    answer: "Yes — on custom fine-tuning projects, the model weights, training code, and system architecture are delivered to you on completion. You own them outright, not as a subscription. This is the key difference between custom fine-tuning and using a managed API.",
  },
  {
    question: "How do you handle GDPR, HIPAA, and compliance requirements?",
    answer: "Compliance controls are implemented at the architecture level, not as policies. PII is redacted before data reaches any model. RBAC controls which data sources each user's queries can access. Audit logs capture every retrieval and generation event. We align the architecture to GDPR, HIPAA, SOC 2 Type II, and ISO 27001 requirements from day one.",
  },
  {
    question: "How long does it take to build and go live?",
    answer: "A focused Proof of Value — a working RAG system over your data or a first-pass fine-tuned model — typically takes 2–4 weeks. A production system with integrations, guardrails, and monitoring is 8–12 weeks. Full enterprise rollout with multiple use cases and deep system integration is typically 3–6 months. You see something working within the first month regardless of final scope.",
  },
  {
    question: "We don't have a large internal AI team. Can you support us after launch?",
    answer: "Yes. We offer SLA-based support, ongoing model monitoring, and RLHF implementation — meaning the model continues to improve from your team's feedback after launch. We also handle model upgrades when new foundation models ship, so you're not locked into the version we built on.",
  },
];

// ─── FAQ Component ─────────────────────────────────────────────────────────

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

// ─── Page ─────────────────────────────────────────────────────────────────────

const GenerativeAI = () => {
  return (
    <ServicePageLayout
      title="Generative AI Built for, Intelligence, Not Just Content"
      titleHighlights={["Intelligence"]}
      subtitle="Generative AI"
      metaTitle="Generative AI Development Services | LLM & RAG Solutions | TechPivot"
      metaDescription="Generative AI development services: custom LLM apps, RAG chatbots, AI content generation and model fine-tuning for enterprises. Get a free GenAI consultation."
      keywords="generative AI, generative AI development services, LLM development, RAG chatbot development, GPT integration, AI content generation, fine-tuning LLM, enterprise generative AI, AI chatbot development company"
      description="We build RAG systems, fine-tuned models, and content pipelines that generate from your data — not from hallucinated training memory. Secure, grounded, and built for production."

      icon={<Sparkles className="w-8 h-8 text-primary" />}
    >

      {/* ── What Sets This Apart ── */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeUp" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                GenAI That Generates from Your Data, Not Around It
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  heading: "The problem with generic LLMs",
                  body: "A foundation model trained on public data doesn't know your products, your policies, or your customers. It generates plausible-sounding answers — often wrong ones.",
                },
                {
                  heading: "What RAG fixes",
                  body: "RAG retrieves relevant documents from your own knowledge base at query time and grounds the model's answer in what it found. If the source doesn't support the answer, the model doesn't give one.",
                },
                {
                  heading: "What fine-tuning adds",
                  body: "Fine-tuning teaches the model how to behave — your domain vocabulary, output format, and reasoning style — so every generation is consistent with how your business actually works.",
                },
              ].map((item) => (
                <div key={item.heading} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">{item.heading}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Services ── */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Build
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four service lines, each solving a distinct layer of the enterprise GenAI problem.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-6">
            {coreServices.map((service, index) => (
              <AnimatedSection key={service.title} animation="fadeUp" delay={index * 100}>
                <AppleCardFeature
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Business Benefits ── */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Business Outcomes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What changes in your business when GenAI is implemented properly — not just deployed.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessBenefits.map((benefit, index) => (
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

      {/* ── Enterprise Guardrails ── */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Enterprise Data Privacy & Guardrails
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Security and compliance are architectural constraints, not add-ons. These controls are built into the system from day one.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guardrails.map((item, index) => (
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

      {/* ── Delivery Roadmap ── */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Delivery Roadmap
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured process that de-risks investment at every stage — you see something working before full commitment.
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

      {/* ── Industry Solutions ── */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industry Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              GenAI applies differently across industries — here's what it looks like in practice for each.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, index) => (
              <AnimatedSection key={ind.title} animation="fadeUp" delay={index * 100}>
                <AppleCardFeature
                  icon={ind.icon}
                  title={ind.title}
                  description={ind.description}
                  features={ind.features}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Generative AI Tech Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Platform-agnostic and opinionated about quality. We select tools based on your accuracy, cost, and data-residency requirements — not familiarity.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <AnimatedSection key={tech.category} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact title={tech.category} description={tech.items} />
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
              The questions every technical and commercial buyer asks before committing to a GenAI programme.
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
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bring us the use case. We'll tell you whether RAG, fine-tuning, or a prompt pipeline is the right fit — and what your data needs to look like before any of it works.
            </p>
          </AnimatedSection>
        </div>
      </section>

    </ServicePageLayout>
  );
};

export default GenerativeAI;
