import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "John Smith",
    role: "Homeowner",
    content:
      "Working with Premier Properties was a fantastic experience. They helped us find our dream home in just a few weeks. Their knowledge of the market and attention to detail made the process smooth and stress-free.",
    avatar: "/placeholder.svg?height=40&width=40&text=JS",
  },
  {
    name: "Emily Johnson",
    role: "First-time Buyer",
    content:
      "As a first-time homebuyer, I was nervous about the process. The team at Premier Properties guided me through every step, explaining everything clearly and finding me a perfect starter home within my budget.",
    avatar: "/placeholder.svg?height=40&width=40&text=EJ",
  },
  {
    name: "Michael Chen",
    role: "Property Investor",
    content:
      "I've worked with many real estate agents over the years, but Premier Properties stands out for their professionalism and market insight. They've helped me build a successful investment portfolio.",
    avatar: "/placeholder.svg?height=40&width=40&text=MC",
  },
]

export function TestimonialSection() {
  return (
    <section className="bg-muted/40 py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with
            us.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="mt-4 text-muted-foreground">{testimonial.content}</p>
                <div className="mt-6 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
