import { Cloud, Layers, Key, Users, Zap, Shield, Database, CreditCard, BarChart3, GitBranch, Server, Lock } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { AppleCardCompact } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

// ─── What we architect for your SaaS product ───────────────────────────────
const architecturePillars = [
  {
    icon: Database,
    title: "Multi-Tenant Database Design",
    description:
      "We architect your data layer for true multi-tenancy from day one — choosing between schema-per-tenant, row-level isolation, or hybrid models based on your compliance, scale, and cost requirements. No retrofitting later.",
  },
  {
    icon: GitBranch,
    title: "Scalable Microservices Architecture",
    description:
      "Event-driven microservices that decompose naturally along your product's domain boundaries. Each service scales independently, deploys independently, and fails gracefully — so a spike in one feature never takes down your platform.",
  },
  {
    icon: CreditCard,
    title: "Billing & Subscription Infrastructure",
    description:
      "Stripe, Chargebee, or custom billing engines wired into your product's entitlement layer. Usage-based metering, free trials, plan upgrades, proration, and dunning — all handled as first-class product features, not afterthoughts.",
  },
  {
    icon: Key,
    title: "Enterprise SSO & RBAC",
    description:
      "SAML 2.0, OAuth 2.0, and OpenID Connect integrations with Okta, Azure AD, and Google Workspace. Granular role-based access control scoped to your tenant's org hierarchy, with audit logs your enterprise buyers will demand.",
  },
  {
    icon: Zap,
    title: "API-First, Integration-Ready",
    description:
      "RESTful and GraphQL APIs built around developer experience. Webhooks, idempotent endpoints, versioning strategy, and rate limiting designed so your customers' engineering teams can build on top of your product without friction.",
  },
  {
    icon: Shield,
    title: "Security & Compliance by Design",
    description:
      "SOC 2 Type II, GDPR, HIPAA, and PCI DSS compliance built into the architecture, not bolted on before your audit. Encryption at rest and in transit, secret rotation, zero-trust network boundaries, and automated posture monitoring.",
  },
];

// ─── Engagement types ────────────────────────────────────────────────────────
const engagements = [
  {
    icon: Server,
    title: "Greenfield SaaS Builds",
    description:
      "You have a validated idea and need an engineering team who can architect and ship a production-grade SaaS — not a prototype. We take you from product spec to a live, multi-tenant platform with billing, auth, and observability in place.",
    label: "0 → 1",
  },
  {
    icon: Layers,
    title: "SaaS Re-Architecture",
    description:
      "Your monolith worked at 100 customers. At 10,000 it's a liability. We assess your current system, design the target architecture, and migrate you incrementally — keeping your product live and your team shipping throughout.",
    label: "1 → Scale",
  },
  {
    icon: Lock,
    title: "Enterprise-Readiness Uplift",
    description:
      "Your product is growing but enterprise deals keep stalling at security reviews. We implement SSO, granular RBAC, audit logging, data residency controls, and compliance documentation so your next enterprise deal closes.",
    label: "Scale → Enterprise",
  },
];

// ─── Why TechPivot framing ───────────────────────────────────────────────────
const differentiators = [
  {
    metric: "50+",
    label: "SaaS products built and shipped",
  },
  {
    metric: "99.99%",
    label: "Uptime SLA on production platforms",
  },
  {
    metric: "<1s",
    label: "Real-time sync across tenants",
  },
  {
    metric: "3.5×",
    label: "Faster time-to-market vs. in-house",
  },
];

const SaaSPlatform = () => {
  return (
    <ServicePageLayout
      title="SaaS Platform Engineering"
      subtitle="We build the SaaS product — you own it."
      metaTitle="SaaS Platform Development | Multi-Tenant Architecture & Billing Integration | TechPivot"
      metaDescription="TechPivot engineers SaaS products for clients — multi-tenant database design, scalable microservices, billing integrations, and enterprise SSO. From MVP to enterprise-ready."
      keywords="SaaS platform development, multi-tenant SaaS architecture, SaaS billing integration, Stripe SaaS, SAML SSO SaaS, microservices SaaS, B2B SaaS engineering, SaaS product development company"
      description="We architect and build SaaS products for companies who need more than a template — multi-tenant database design, scalable microservices, billing infrastructure, and enterprise auth built right the first time. TechPivot engineers the platform; you own the product."
      icon={<Cloud className="w-8 h-8 text-primary" />}
      showSaaSIcons={true}
    >

      {/* ─── Architecture Pillars ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="mb-14 max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold mb-3">
              SaaS Product Architecture
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Built for the architecture decisions that haunt you later
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Most SaaS failures aren't product failures — they're architecture failures discovered
              at scale. We make the hard structural decisions upfront: how tenants are isolated,
              how billing maps to your entitlements, how your APIs version without breaking customers.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {architecturePillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} animation="fadeUp" delay={index * 80}>
                <AppleCardCompact
                  icon={pillar.icon}
                  title={pillar.title}
                  description={pillar.description}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Proof metrics ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-900 text-white animate-section">
        <div className="container px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((d, i) => (
              <AnimatedSection key={i} animation="fadeUp" delay={i * 80} className="text-center">
                <div className="text-4xl font-extrabold text-[#FAC400] mb-1">{d.metric}</div>
                <div className="text-sm text-slate-400 font-medium">{d.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Engagement types ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="mb-14 max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold mb-3">
              How We Engage
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              We meet your product where it is
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Whether you're pre-launch, scaling fast, or trying to close enterprise deals that
              keep stalling at security reviews — each stage needs different architecture, and different work.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6">
            {engagements.map((eng, index) => (
              <AnimatedSection key={eng.title} animation="fadeUp" delay={index * 100}>
                <div className="group h-full">
                  <motion.div
                    className="relative h-full bg-[#f5f5f7] dark:bg-card rounded-2xl p-8 overflow-hidden transition-all duration-500"
                    whileHover={{
                      y: -6,
                      boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 to-yellow-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      {/* Stage label */}
                      <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200 px-2.5 py-0.5 rounded-full mb-5">
                        {eng.label}
                      </span>

                      <motion.div
                        className="w-12 h-12 rounded-xl bg-background/80 dark:bg-background/50 flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <eng.icon
                          className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300"
                          strokeWidth={1.5}
                        />
                      </motion.div>

                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {eng.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {eng.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What's included callout ────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 animate-section">
        <div className="container px-6 lg:px-12">
          <div className="max-w-4xl mx-auto rounded-2xl bg-slate-50 dark:bg-card border border-slate-200 dark:border-border p-10 lg:p-14">
            <AnimatedSection animation="fadeUp">
              <p className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold mb-4">
                What every engagement includes
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 leading-tight">
                Architecture decisions documented, not just shipped
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
              {[
                "Multi-tenant isolation model chosen and justified for your scale",
                "Billing infrastructure mapped to your pricing model",
                "Enterprise SSO and RBAC designed for your permission model",
                "API versioning strategy defined before you have customers on v1",
                "Observability stack in place before launch — not after an incident",
                "Data residency and compliance controls for the regions you sell into",
                "Load testing and capacity planning on your critical paths",
                "Runbooks, architecture diagrams, and decision logs your team keeps",
              ].map((item, i) => (
                <AnimatedSection key={i} animation="fadeUp" delay={i * 40}>
                  <div className="flex items-start gap-3 text-sm text-foreground">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 12 12">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

    </ServicePageLayout>
  );
};

export default SaaSPlatform;
