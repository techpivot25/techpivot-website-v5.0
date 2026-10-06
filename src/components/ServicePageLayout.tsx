import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VectorMeshBackground from "@/components/VectorMeshBackground";
import GeometricBlocksBackground from "@/components/GeometricBlocksBackground";
import SaaSIconsBackground from "@/components/SaaSIconsBackground";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroStat {
  value: string;
  label: string;
}

interface ServicePageLayoutProps {
  title: string;
  /** Words to render in primary accent colour inside the title.
   *  Pass an array of exact substrings that appear in `title`. */
  titleHighlights?: string[];
  subtitle: string;
  description: string;
  /** Optional bullet-point value props shown below the description */
  highlights?: string[];
  /** Optional stats bar shown below the CTAs */
  stats?: HeroStat[];
  /** Optional hero image rendered on the right-hand column (desktop only) */
  heroImage?: string;
  heroImageAlt?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  backgroundImage?: string;
  showVectorMesh?: boolean;
  showGeometricBlocks?: boolean;
  showSaaSIcons?: boolean;
}

/** Wraps substrings in `highlights` with a <span> carrying the primary colour */
const HighlightedTitle = ({
  title,
  highlights = [],
}: {
  title: string;
  highlights: string[];
}) => {
  if (!highlights.length) return <>{title}</>;

  // Build a regex that matches any of the highlight phrases
  const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = title.split(pattern);

  return (
    <>
      {parts.map((part, i) =>
        highlights.includes(part) ? (
          <span key={i} className="text-primary">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

const ServicePageLayout = ({
  title,
  titleHighlights = [],
  subtitle,
  description,
  highlights = [],
  stats = [],
  heroImage,
  heroImageAlt,
  metaTitle,
  metaDescription,
  keywords,
  children,
  icon,
  backgroundImage,
  showVectorMesh = false,
  showGeometricBlocks = false,
  showSaaSIcons = false,
}: ServicePageLayoutProps) => {
  const { pathname } = useLocation();
  const pageTitle = metaTitle ?? `${title} | TechPivot Technologies`;
  const pageDescription = (metaDescription ?? description).replace(/\s+/g, " ").trim().slice(0, 158);
  const canonicalUrl = `https://techpivot.in${pathname}`;
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    const timeoutId = setTimeout(() => {
      ctx = gsap.context(() => {
        gsap.set(".hero-content", { opacity: 0, y: 60 });
        gsap.to(".hero-content", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.1,
        });

        const sections = gsap.utils.toArray<HTMLElement>(".animate-section");
        if (sections.length > 0) {
          gsap.set(sections, { opacity: 0, y: 50 });
          sections.forEach((section) => {
            ScrollTrigger.create({
              trigger: section,
              start: "top 80%",
              onEnter: () => {
                gsap.to(section, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
              },
              onLeaveBack: () => {
                gsap.set(section, { opacity: 0, y: 50 });
              },
            });
          });
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (ctx) ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {keywords && <meta name="keywords" content={keywords} />}
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {backgroundImage && (
          <link rel="preload" as="image" href={backgroundImage} fetchPriority="high" />
        )}
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* ── Hero Section ── */}
        <section
          ref={heroRef}
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-surface-dark overflow-hidden"
        >
          {/* Background layers */}
          {backgroundImage && (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          )}
          {showVectorMesh && <VectorMeshBackground />}
          {showGeometricBlocks && <GeometricBlocksBackground />}
          {showSaaSIcons && <SaaSIconsBackground />}

          {/* Decorative rings */}
          <div className="absolute -top-20 -right-20 w-80 h-80 border border-surface-dark-foreground/10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-primary/20 rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/40 rounded-full" />

          <div className="container px-6 lg:px-12 relative z-10">
            <div className="hero-content">

              {/* Back link */}
              <Link
                to="/#services"
                className="inline-flex items-center gap-2 text-surface-dark-foreground/60 hover:text-surface-dark-foreground transition-colors mb-10 group text-sm uppercase tracking-wide"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Services
              </Link>

              {/* Main hero grid — text left, visual right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* ── Left column ── */}
                <div className="flex flex-col justify-center">

                  {/* Eyebrow */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg border border-surface-dark-foreground/20 bg-surface-dark-foreground/5 flex items-center justify-center shrink-0">
                      {icon}
                    </div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                      {subtitle}
                    </span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-surface-dark-foreground tracking-tight leading-[1.1] mb-5">
                    <HighlightedTitle title={title} highlights={titleHighlights} />
                  </h1>

                  {/* Description — one clean paragraph, no bullets here */}
                  <p className="text-base md:text-lg text-surface-dark-foreground/65 leading-relaxed mb-8">
                    {description}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                      asChild
                    >
                      <Link to="/contact">
                        Book an AI Strategy Session
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-surface-dark-foreground/30 text-surface-dark-foreground hover:bg-surface-dark-foreground/10"
                      asChild
                    >
                      <Link to="/portfolio">View Our Work</Link>
                    </Button>
                  </div>
                </div>

                {/* ── Right column — hero visual ── */}
                <div className="hidden lg:flex items-center justify-center">
                  {heroImage ? (
                    <div className="relative w-full max-w-lg">
                      <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-3xl scale-110" />
                      <img
                        src={heroImage}
                        alt={heroImageAlt ?? title}
                        className="relative w-full h-auto rounded-2xl border border-surface-dark-foreground/10 shadow-2xl object-cover"
                        loading="eager"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                      />
                    </div>
                  ) : (
                    /* Decorative concentric rings — always visible when no image */
                    <div className="relative w-72 h-72">
                      <div className="absolute inset-0 rounded-full border border-primary/10 bg-primary/[0.03]" />
                      <div className="absolute inset-8 rounded-full border border-primary/15 bg-primary/[0.04]" />
                      <div className="absolute inset-16 rounded-full border border-primary/20 bg-primary/[0.06]" />
                      <div className="absolute inset-24 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-xl border border-primary/40 bg-primary/20 flex items-center justify-center">
                          {icon}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* ── Stats strip — horizontal row, below the grid ── */}
              {stats.length > 0 && (
                <div className="mt-10 pt-8 border-t border-surface-dark-foreground/10">
                  <div className="flex items-center gap-0 divide-x divide-surface-dark-foreground/10">
                    {stats.map((stat) => (
                      <div key={stat.label} className="px-8 first:pl-0">
                        <p className="text-2xl font-bold text-surface-dark-foreground">{stat.value}</p>
                        <p className="text-sm text-surface-dark-foreground/50 mt-0.5 whitespace-nowrap">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content */}
        <div ref={contentRef}>{children}</div>

        <Footer />
      </div>
    </>
  );
};

export default ServicePageLayout;
