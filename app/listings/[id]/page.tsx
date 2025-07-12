import { PropertyGallery } from "@/components/property-gallery"
import { PropertyDetails } from "@/components/property-details"
import { PropertyVideos } from "@/components/property-videos"
import { PropertyContact } from "@/components/property-contact"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Updated property data with our images
const properties = {
  "1": {
    id: "1",
    title: "Dua Model House",
    address: "PHIRST Park Homes",
    price: "Contact for Price",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 48,
    description:
      "Discover the independence you've been dreaming of with the Dua model. This standalone house has no attached neighbors except for one shared firewall. With a lot area of 70 sq.m and a floor area of 48 sq.m, this 2-bedroom, 2-bathroom home includes a carport and offers the perfect balance of space and privacy.",
    features: ["Standalone House", "2 Bedrooms", "2 Bathrooms", "1 Carport", "70 sq.m Lot Area", "48 sq.m Floor Area"],
    images: [
      "/images/cover1.jpg",
      "/images/interior1.jpg",
      "/images/interior2.jpg",
      "/images/dua-model.png",
      "/images/cover2.jpg",
    ],
    videos: ["/images/interior1.jpg", "/images/interior2.jpg"],
    agent: {
      name: "Sarah Johnson",
      phone: "0915-614-0046",
      email: "sarah@premierproperties.com",
      image: "/images/cover2.jpg",
    },
  },
  "2": {
    id: "2",
    title: "Modern Family Home",
    address: "PHIRST Park Homes",
    price: "Contact for Price",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 60,
    description:
      "Beautiful modern family home in a prime location. Perfect for growing families looking for comfort and convenience. This property offers spacious living areas and is situated in a friendly community with excellent amenities.",
    features: ["Modern Design", "3 Bedrooms", "2 Bathrooms", "Spacious Living Areas", "Community Amenities"],
    images: ["/images/cover2.jpg", "/images/interior1.jpg", "/images/interior2.jpg", "/images/cover1.jpg"],
    videos: ["/images/interior1.jpg", "/images/interior2.jpg"],
    agent: {
      name: "Sarah Johnson",
      phone: "0915-614-0046",
      email: "sarah@premierproperties.com",
      image: "/images/cover2.jpg",
    },
  },
  "3": {
    id: "3",
    title: "Contemporary Residence",
    address: "PHIRST Park Homes",
    price: "Contact for Price",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 65,
    description:
      "A contemporary residence that combines style and functionality. This home features modern amenities and is designed for comfortable living. Located in a desirable neighborhood with easy access to schools, shopping, and recreation.",
    features: ["Contemporary Design", "3 Bedrooms", "2 Bathrooms", "Modern Amenities", "Prime Location"],
    images: ["/images/dua-model.png", "/images/interior2.jpg", "/images/interior1.jpg", "/images/cover1.jpg"],
    videos: ["/images/interior1.jpg", "/images/interior2.jpg"],
    agent: {
      name: "Sarah Johnson",
      phone: "0915-614-0046",
      email: "sarah@premierproperties.com",
      image: "/images/cover2.jpg",
    },
  },
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = properties[params.id as keyof typeof properties]

  if (!property) {
    return <div className="container py-8">Property not found</div>
  }

  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="container px-4 md:px-6">
        <Link href="/">
          <Button variant="ghost" className="mb-4 gap-1 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Button>
        </Link>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-8">
            <PropertyGallery images={property.images} />
            <PropertyDetails property={property} />
            <PropertyVideos videos={property.videos} />
          </div>

          <div className="flex flex-col gap-8">
            <PropertyContact agent={property.agent} />
          </div>
        </div>
      </div>
    </div>
  )
}
