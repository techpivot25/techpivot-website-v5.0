import { Shield, Cloud, Server, Lock, Eye, AlertTriangle, Database, FileCheck, RefreshCw, GitBranch, Layers, Network } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { AppleCardCompact } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";

const cloudServices = [
  { icon: Cloud, title: "Cloud Migration", description: "Seamless transition to AWS, Azure, or Google Cloud with minimal disruption — including lift-and-shift, re-platforming, and full cloud-native re-architecture." },
  { icon: Server, title: "Infrastructure as Code (IaC)", description: "Provision and manage AWS, GCP, and Azure infrastructure using Terraform, Pulumi, and CloudFormation — repeatable, version-controlled, and audit-ready." },
  { icon: Database, title: "Cloud-Native Apps", description: "Build applications designed for the cloud with microservices, containers, and serverless architectures across AWS Lambda, Azure Functions, and GCP Cloud Run." },
];

const securityFeatures = [
  { icon: Lock, title: "Zero-Trust Architecture", description: "Never trust, always verify — enforce identity-based access, micro-segmentation, and least-privilege policies across every layer of your cloud environment." },
  { icon: FileCheck, title: "Compliance Management", description: "GDPR, HIPAA, SOC 2, and ISO 27001 compliance frameworks — continuously enforced with automated policy checks on AWS, Azure, and GCP." },
  { icon: RefreshCw, title: "Disaster Recovery", description: "Automated backups, multi-region failover, and tested business continuity plans to keep your cloud workloads resilient and always available." },
];

const additionalServices = [
  { icon: Eye, title: "24/7 Monitoring & SIEM", description: "Real-time monitoring, log aggregation, and intelligent alerting across all cloud resources using AWS GuardDuty, Azure Sentinel, and GCP Security Command Center." },
  { icon: GitBranch, title: "DevSecOps Pipelines", description: "Security baked into every CI/CD stage — automated SAST, DAST, container scanning, and secrets detection so vulnerabilities are caught before they reach production." },
  { icon: Shield, title: "Incident Response", description: "Rapid-response team for security incidents and breaches — from initial triage and containment through root-cause analysis and remediation." },
];

const CloudSecurity = () => {
  return (
    <ServicePageLayout
      title="Cloud & Security Services"
      subtitle="Enterprise Protection"
      metaTitle="Cloud & Cybersecurity Services | AWS, Azure, GCP, DevSecOps | TechPivot"
      metaDescription="Cloud migration, DevSecOps, and cybersecurity services on AWS, Azure, and GCP. Zero-Trust Architecture, Infrastructure as Code, compliance, and 24x7 monitoring. Book a security assessment."
      keywords="cloud services company, cloud migration services, AWS consulting, Azure cloud services, GCP cloud, cybersecurity services, DevSecOps, Zero-Trust Architecture, Infrastructure as Code, Terraform, cloud security solutions, managed cloud services, data security compliance"
      description="Secure, scalable cloud infrastructure across AWS, Azure, and GCP — with enterprise-grade DevSecOps, Zero-Trust Architecture, and compliance built in from day one."
      icon={<Shield className="w-8 h-8 text-primary" />}
      showGeometricBlocks={true}
    >
      {/* Cloud Solutions */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cloud Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Leverage the full power of AWS, Azure, and Google Cloud — with scalable infrastructure, 
              seamless migration, and Infrastructure as Code practices that make every environment 
              repeatable and auditable.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {cloudServices.map((service, index) => (
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

      {/* Security Features */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Security Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Enterprise-grade security built on Zero-Trust principles — protecting your data, 
              enforcing compliance, and keeping your cloud workloads resilient.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <AnimatedSection key={feature.title} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
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
    </ServicePageLayout>
  );
};

export default CloudSecurity;
