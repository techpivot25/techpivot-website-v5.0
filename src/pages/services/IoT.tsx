import { Cpu, Wifi, Database, BarChart, Shield, Zap, Factory, Home, Heart, Truck, Box, Activity, Server, Radio, Target, ClipboardList, Code2, TestTube, Rocket, LifeBuoy } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import ServiceFAQ from "@/components/ServiceFAQ";
import { AppleCardCompact } from "@/components/ui/apple-card";
import AnimatedSection from "@/components/AnimatedSection";
import DevelopmentProcess from "@/components/DevelopmentProcess";

const pillars = [
  { icon: Zap, title: "Edge Intelligence", description: "Decisions happen next to the machine. We place lightweight logic and trained models on gateways and devices so filtering, alerts, and control run locally, cloud traffic stays low, and operations carry on even when the network drops." },
  { icon: Activity, title: "Real-Time Data Streaming", description: "MQTT carries readings from your devices, and Kafka distributes them to every service that needs them. The result is one live event pipeline that copes with bursts and feeds dashboards, alerts, and analytics from the same source." },
  { icon: Box, title: "Digital Twins", description: "A live software replica of your equipment, production line, building, or fleet, kept current by sensor data. Use it to see real-time status, test changes before touching physical assets, and spot wear before it turns into downtime." },
];

const flow = [
  { icon: Radio, title: "Devices & Gateways", description: "Sensors and machines publish readings over MQTT, with gateways bridging other protocols such as LoRaWAN, Bluetooth, Zigbee, and Modbus" },
  { icon: Zap, title: "Edge Processing", description: "Data is cleaned, validated, and checked against rules or models on-site, so only meaningful information travels onward" },
  { icon: Activity, title: "Streaming Backbone", description: "Kafka topics organise the incoming events, stream processors enrich them, and time-series storage keeps the history" },
  { icon: Box, title: "Twin & Insight Layer", description: "Digital twin models, dashboards, and alerts turn the stream into status views, forecasts, and automatic actions" },
];

const capabilities = [
  { icon: Wifi, title: "Device Connectivity & Management", description: "Onboarding, monitoring, and remote configuration for large device fleets across WiFi, cellular, LoRaWAN, NB-IoT, and Bluetooth" },
  { icon: Database, title: "Time-Series Storage & Analytics", description: "Purpose-built storage such as InfluxDB or TimescaleDB for fast queries on sensor history and long-term trends" },
  { icon: BarChart, title: "Dashboards & Predictive Insights", description: "Live views with the KPIs you choose, plus anomaly detection and forecasting models that warn you ahead of failures" },
  { icon: Shield, title: "Device-to-Cloud Security", description: "Certificate-based device identity, encryption in transit and at rest, signed firmware, and safe over-the-air updates with rollback" },
  { icon: Cpu, title: "Rules & Workflow Automation", description: "Threshold triggers, maintenance scheduling, and automatic actions that follow the logic you define" },
  { icon: Server, title: "Business System Integration", description: "Secure links from your IoT data to ERP, CRM, maintenance, and reporting tools, so insights reach the teams who act on them" },
];

const solutions = [
  { icon: Factory, title: "Industrial IoT & Smart Manufacturing", description: "Machine health monitoring, predictive maintenance, quality tracking, and line-level digital twins that let you test scheduling and process changes virtually before applying them on the floor" },
  { icon: Home, title: "Smart Buildings & Facilities", description: "Occupancy-aware climate and lighting control, energy tracking, air quality monitoring, and a building twin that shows live conditions and the effect of control changes" },
  { icon: Heart, title: "Healthcare & Medical IoT", description: "Remote patient monitoring, wearable data streams, equipment and asset tracking, and edge-level alerts for time-critical readings, built with privacy and HIPAA requirements in mind" },
  { icon: Truck, title: "Fleet & Logistics", description: "Live vehicle and cargo tracking, driving behaviour insights, cold-chain monitoring, geofence alerts, and a fleet twin for route and maintenance planning" },
];

const process = [
  { step: 1, icon: Target, title: "Use Case & Data Mapping", description: "We define the problem, the signals that matter, and how quickly each one needs to be acted on" },
  { step: 2, icon: ClipboardList, title: "Architecture & Device Plan", description: "We design the edge, streaming, and cloud layers and select protocols and hardware to match your environment" },
  { step: 3, icon: Rocket, title: "Pilot Build", description: "A small working setup on real devices proves the data flow and value before you commit to full rollout" },
  { step: 4, icon: Code2, title: "Build & Integrate", description: "We develop the platform, twin models, dashboards, and connections to your existing business systems" },
  { step: 5, icon: TestTube, title: "Test & Secure", description: "Load, failure, and security testing, including network outage and device-recovery scenarios" },
  { step: 6, icon: LifeBuoy, title: "Launch & Optimise", description: "Staged rollout followed by monitoring, tuning, and new features as your device fleet grows" },
];

const faqs = [
  {
    question: "What is the difference between MQTT and Kafka, and do I need both?",
    answer: "MQTT is a lightweight messaging protocol designed for devices on constrained or unreliable networks. Kafka is a high-volume event streaming platform built for backend services. Many IoT systems use both: MQTT to collect data from devices, and Kafka to distribute and process it at scale. Smaller projects may only need MQTT, and we recommend the right fit after reviewing your needs."
  },
  {
    question: "Why does edge computing matter for IoT?",
    answer: "Processing data close to the source reduces delay, lowers the amount of data sent to the cloud, and lets critical functions keep working during connectivity problems. It is especially useful for safety alerts, machine control, and remote sites with limited bandwidth."
  },
  {
    question: "What is a digital twin and what data does it need?",
    answer: "A digital twin is a live virtual model of a physical asset, process, or space. It needs a steady flow of sensor data plus a model of how the asset behaves. Once running, it lets you monitor state, simulate changes, and anticipate problems without touching the real equipment."
  },
  {
    question: "Can you work with devices and sensors we already have?",
    answer: "In most cases, yes. We connect existing equipment through gateways and standard protocols, and we advise on new hardware only where gaps exist."
  },
  {
    question: "How do you keep connected devices secure?",
    answer: "Each device gets its own identity, data is encrypted in transit and at rest, firmware updates are signed, and access is controlled by role. We also plan for secure update delivery and recovery, since devices stay in the field for years."
  },
  {
    question: "Do you recommend starting with a pilot?",
    answer: "Yes. A focused pilot on a real use case proves the data flow, shows measurable value, and lets you refine requirements before scaling to the full device fleet."
  },
  {
    question: "Which cloud platforms can the solution run on?",
    answer: "We build on AWS, Azure, or Google Cloud, and can also support on-premise or hybrid deployments when data residency or latency needs call for it."
  },
  {
    question: "What support is available after launch?",
    answer: "We provide monitoring, security updates, device fleet management support, and ongoing improvements such as new dashboards, models, or twin features as your needs grow."
  },
];

const IoT = () => {
  return (
    <ServicePageLayout
      title="IoT Solutions"
      subtitle="Edge Intelligence, Live Data Streams & Digital Twins"
      metaTitle="IoT Development Services | Edge Computing, Kafka & Digital Twins | TechPivot"
      metaDescription="IoT development focused on edge computing, real-time data streaming with MQTT and Kafka, and digital twins, for manufacturing, healthcare, smart buildings and logistics."
      keywords="IoT development services, edge computing solutions, MQTT Kafka IoT, real-time IoT data streaming, digital twin development, industrial IoT, IoT platform development, predictive maintenance, connected device solutions, IoT company India"
      description="We build IoT systems that think at the edge, stream data in real time, and mirror physical assets through digital twins. By combining local processing, MQTT and Kafka pipelines, and live virtual models, we help manufacturers, healthcare providers, facility operators, and logistics companies see what is happening now, predict what comes next, and act sooner."
      icon={<Cpu className="w-8 h-8 text-primary" />}
    >
      {/* Core Pillars */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Where Our IoT Work Is Strongest
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three connected capabilities that turn raw device signals into faster, smarter operations
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((item, index) => (
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

      {/* Sensor to Decision */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Data Travels From Sensor to Decision
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              MQTT at the device layer, Kafka at the platform layer, and edge and twin logic working across both
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flow.map((item, index) => (
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

      {/* Supporting Capabilities */}
      <section className="py-20 lg:py-28 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Foundations Behind Every Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Supporting capabilities that make your IoT platform reliable, secure, and useful to the business
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => (
              <AnimatedSection key={cap.title} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact
                  icon={cap.icon}
                  title={cap.title}
                  description={cap.description}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 lg:py-28 bg-secondary/30 animate-section">
        <div className="container px-6 lg:px-12">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              IoT in Action Across Industries
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <AnimatedSection key={solution.title} animation="fadeUp" delay={index * 100}>
                <AppleCardCompact
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
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
              How We Deliver IoT Projects
            </h2>
            <p className="text-surface-dark-foreground/70 max-w-2xl mx-auto">
              A pilot-first approach that proves value early and scales with confidence
            </p>
          </AnimatedSection>

          <DevelopmentProcess process={process} />
        </div>
      </section>

      {/* FAQ */}
      <ServiceFAQ faqs={faqs} serviceName="IoT Solutions" />
    </ServicePageLayout>
  );
};

export default IoT;
