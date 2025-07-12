import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Bath, Bed, Calendar, MapPin, SquareIcon as SquareFoot } from "lucide-react"

interface PropertyDetailsProps {
  property: {
    title: string
    address: string
    price: string
    bedrooms: number
    bathrooms: number
    sqft: number
    description: string
    features: string[]
  }
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h1 className="text-2xl font-bold sm:text-3xl">{property.title}</h1>
          <p className="text-2xl font-bold text-primary">{property.price}</p>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{property.address}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        <Card>
          <CardContent className="flex flex-col items-center gap-1 p-4">
            <Bed className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">{property.bedrooms} Bedrooms</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center gap-1 p-4">
            <Bath className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">{property.bathrooms} Bathrooms</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center gap-1 p-4">
            <SquareFoot className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">{property.sqft} sqft</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center gap-1 p-4">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Built 2020</span>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="mb-2 text-xl font-semibold">Description</h2>
        <p className="text-muted-foreground">{property.description}</p>
      </div>

      <Separator />

      <div>
        <h2 className="mb-4 text-xl font-semibold">Features</h2>
        <div className="flex flex-wrap gap-2">
          {property.features.map((feature) => (
            <Badge key={feature} variant="outline" className="rounded-md">
              {feature}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
