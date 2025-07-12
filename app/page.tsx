import { Button } from "@/components/ui/button"
import { FeaturedListings } from "@/components/featured-listings"
import { HeroSection } from "@/components/hero-section"
import { TestimonialSection } from "@/components/testimonial-section"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroSection />

      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Find Your Dream Home</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            We specialize in helping you find the perfect property that matches your lifestyle and investment goals.
          </p>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Featured Properties</h2>
          </div>
          <FeaturedListings />
        </div>
      </section>

      <TestimonialSection />

      <section className="container px-4 md:px-6">
        <div className="rounded-xl bg-muted p-6 md:p-12">
          <div className="flex flex-col items-center gap-6 text-center md:gap-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Find Your Perfect Home?</h2>
              <p className="text-muted-foreground md:text-lg">
                Contact us today to schedule a viewing or discuss your property needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
