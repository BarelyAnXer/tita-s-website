import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bath, Bed, MapPin, MoveRight, SquareIcon as SquareFoot } from "lucide-react"
import Link from "next/link"

// Sample data - would come from a database in a real app
const allListings = [
  {
    id: "1",
    title: "Luxury Waterfront Villa",
    location: "Malibu, CA",
    price: "$4,500,000",
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4200,
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: "2",
    title: "Modern Downtown Penthouse",
    location: "Los Angeles, CA",
    price: "$2,950,000",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2800,
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    id: "3",
    title: "Elegant Suburban Estate",
    location: "Beverly Hills, CA",
    price: "$7,200,000",
    bedrooms: 6,
    bathrooms: 5.5,
    sqft: 6500,
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: "4",
    title: "Charming Beachfront Cottage",
    location: "Santa Monica, CA",
    price: "$3,100,000",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    id: "5",
    title: "Contemporary Mountain Retreat",
    location: "Aspen, CO",
    price: "$5,800,000",
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 3900,
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    id: "6",
    title: "Historic Brownstone",
    location: "Brooklyn, NY",
    price: "$3,750,000",
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3200,
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
]

export function PropertyListings() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-muted-foreground">Showing {allListings.length} properties</p>
        <select className="rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background">
          <option>Sort by: Newest</option>
          <option>Sort by: Price (High to Low)</option>
          <option>Sort by: Price (Low to High)</option>
        </select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allListings.map((listing) => (
          <Card key={listing.id} className="overflow-hidden">
            <div className="relative">
              <img
                src={listing.image || "/placeholder.svg"}
                alt={listing.title}
                className="aspect-[4/3] w-full object-cover"
                width={500}
                height={300}
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
                    <span>{listing.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={`/listings/${listing.id}`} className="w-full">
                <Button variant="outline" className="w-full gap-1">
                  View Details
                  <MoveRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="gap-1">
          Load More
          <MoveRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
