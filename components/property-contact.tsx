import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone } from "lucide-react"

interface PropertyContactProps {
  agent: {
    name: string
    phone: string
    email: string
    image: string
  }
}

export function PropertyContact({ agent }: PropertyContactProps) {
  return (
    <Card className="sticky top-24">
      <CardHeader className="pb-4">
        <CardTitle>Contact Agent</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={agent.image || "/placeholder.svg"} alt={agent.name} />
            <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{agent.name}</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>{agent.phone}</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>{agent.email}</span>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="I'm interested in this property..." className="min-h-[120px]" />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">
            <Phone className="mr-2 h-4 w-4" />
            Call
          </Button>
          <Button variant="outline" className="flex-1">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
