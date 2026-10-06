import { LazyImage } from "./ui/lazy-image";

const partners = [
  { name: "Amazon Web Services", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
  { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
];

const Partners = () => {
  return (
    <section className="py-16 md:py-20 bg-muted overflow-hidden">
      <div className="container px-6 lg:px-12 mb-10">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Built on Enterprise-Grade Cloud Infrastructure
          </h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted to-transparent z-10" />

        {/* Marquee Track */}
        <div className="flex animate-marquee">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-16 w-32 md:w-40"
            >
              <LazyImage
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={48}
                className="max-h-10 md:max-h-12 w-auto object-contain"
                wrapperClassName="flex items-center justify-center w-full h-full"
                placeholderClassName="w-24 h-8"
                rootMargin="200px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
