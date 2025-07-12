import Image from "next/image"

// Add this CSS-in-JS animation
const animateFadeIn = {
  "@keyframes fadeIn": {
    "0%": { opacity: 0, transform: "translateY(10px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
  ".animate-fade-in": {
    animation: "fadeIn 0.8s ease-out forwards",
  },
}

export function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background w-full" />
      <div className="relative w-full flex h-[600px] items-center justify-center overflow-hidden">
        {/* Full width image container */}
        <div className="absolute inset-0 w-full">
          <Image
            src="/images/cover1.jpg"
            alt="PHIRST Park Homes"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Center content with padding */}
        <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center px-4 md:px-6">
          <div className="space-y-4 bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
              Find Your <span className="text-primary-foreground">Dream Home</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-white md:text-xl lg:text-2xl drop-shadow-md">
              Discover exceptional properties in the most desirable locations with our expert guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
