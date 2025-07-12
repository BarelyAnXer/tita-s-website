import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bath, Bed, MapPin, SquareIcon as SquareFoot } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Updated sample data with the uploaded images
const featuredListings = [
  {
    id: "1",
    title: "Dua Model House",
    location: "PHIRST Park Homes",
    price: "Contact for Price",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 48,
    image: "/images/cover1.jpg",
    featured: true,
    description:
      "Standalone house with no attached neighbors except for one shared firewall. Lot area: 70 sq.m, Floor area: 48 sq.m, with 1 carport.",
  },
  {
    id: "2",
    title: "Modern Family Home",
    location: "PHIRST Park Homes",
    price: "Contact for Price",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 60,
    image: "/images/cover2.jpg",
    featured: false,
    description: "Beautiful modern family home in a prime location. Perfect for growing families.",
  },
  {
    id: "3",
    title: "Contemporary Residence",
    location: "PHIRST Park Homes",
    price: "Contact for Price",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 65,
    image: "/images/dua-model.png",
    featured: true,
    description: "Discover the independence you've been dreaming of with this standalone house.",
  },
]

export function FeaturedListings() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredListings.map((listing) => (
        <Card key={listing.id} className="overflow-hidden">
          <div className="relative aspect-[4/3]">
            <Image
              src={listing.image || "/placeholder.svg"}
              alt={listing.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {listing.featured && (
              <Badge className="absolute left-2 top-2 bg-primary text-primary-foreground">Featured</Badge>
            )}
          </div>
          <CardContent className="p-4">
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold">{listing.title}</h3>
                <p className="font-medium text-primary">{listing.price}</p>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{listing.location}</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Bed className="h-4 w-4 text-muted-foreground" />
                  <span>{listing.bedrooms} beds</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-4 w-4 text-muted-foreground" />
                  <span>{listing.bathrooms} baths</span>
                </div>
                <div className="flex items-center gap-1">
                  <SquareFoot className="h-4 w-4 text-muted-foreground" />
                  <span>{listing.sqft} sqm</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">{listing.description}</p>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Link href={`/listings/${listing.id}`} className="w-full">
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
