import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 py-12">
      <section className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge className="w-fit">About Me</Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Your Trusted Real Estate Agent
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                With over 15 years of experience in the real estate market, I've helped hundreds of clients find their
                perfect home.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                My mission is to provide exceptional service and expertise to my clients, helping them navigate the
                complex real estate market with confidence and ease.
              </p>
              <p className="text-muted-foreground">
                I believe that finding the right home is about more than just the property—it's about finding a place
                where you can build your future.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-xl">
              <Image
                src="/images/profile.png"
                alt="About Me"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 ">
        <Card>
          <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center bg-sky-100 border-2 rounded-3xl border-blue-800">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/images/profile.png" alt="Agent" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold">Criselyn P. Zaragoza</h2>
                <p className="text-muted-foreground">Sales Executive</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>0915-614-0046</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>crizarag@yahoo.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Brgy. Biclatan, General Trias, Cavite</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
