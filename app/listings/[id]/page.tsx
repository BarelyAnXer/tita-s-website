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
      "/images/duasingle/dua single 1.jpeg",
      "/images/duasingle/dua single 2.jpeg",
      "/images/duasingle/dua single 3.jpeg",
      "/images/duasingle/dua single 4.jpeg",
      "/images/duasingle/dua single 5.jpeg",
      "/images/duasingle/dua single 6.jpeg",
      "/images/duasingle/dua single 7.jpeg",
      "/images/duasingle/dua single 8.jpeg",
    ],
    videos: [],
    agent: {
      name: "Sarah Johnson",
      phone: "0915-614-0046",
      email: "sarah@premierproperties.com",
      image: "/images/cover2.jpg",
    },
  },
  "2": {
    id: "2",
    title: "Calista Townhouse",
    address: "PHIRST Park Homes",
    price: "Contact for Price",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 60,
    description:
      "Beautiful modern family home in a prime location. Perfect for growing families looking for comfort and convenience. This property offers spacious living areas and is situated in a friendly community with excellent amenities.",
    features: ["Modern Design", "3 Bedrooms", "2 Bathrooms", "Spacious Living Areas", "Community Amenities"],
    images: [
      "/images/calistatownhouse/received_1055081326298357.jpeg",
      "/images/calistatownhouse/received_1070517491196248.jpeg",
      "/images/calistatownhouse/received_1080704210425051.jpeg",
      "/images/calistatownhouse/received_1160714869128690.jpeg",
      "/images/calistatownhouse/received_1284497452527861.jpeg",
      "/images/calistatownhouse/received_1295791131595915.jpeg",
      "/images/calistatownhouse/received_1297491258364297.jpeg",
      "/images/calistatownhouse/received_1576981216557564.jpeg",
      "/images/calistatownhouse/received_1636414860274118.jpeg",
      "/images/calistatownhouse/received_3728016637414140.jpeg",
      "/images/calistatownhouse/received_3869849533327284.jpeg",
      "/images/calistatownhouse/received_530378973139203.jpeg",
      "/images/calistatownhouse/received_562326443082361.jpeg",
      "/images/calistatownhouse/received_909518057867632.jpeg",
      "/images/calistatownhouse/received_918006243330409.jpeg",
      "/images/calistatownhouse/received_958850679049624.jpeg",
    ],
    videos: ["https://avnh3avi0jy6ldcr.public.blob.vercel-storage.com/calista_vid1.mp4", "https://avnh3avi0jy6ldcr.public.blob.vercel-storage.com/calista_vid2.mp4"],
    agent: {
      name: "Sarah Johnson",
      phone: "0915-614-0046",
      email: "sarah@premierproperties.com",
      image: "/images/cover2.jpg",
    },
  },
  "3": {
    id: "3",
    title: "Unna Single Turnover",
    address: "PHIRST Park Homes",
    price: "Contact for Price",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 65,
    description:
      "A contemporary residence that combines style and functionality. This home features modern amenities and is designed for comfortable living. Located in a desirable neighborhood with easy access to schools, shopping, and recreation.",
    features: ["Contemporary Design", "3 Bedrooms", "2 Bathrooms", "Modern Amenities", "Prime Location"],
    images: [
      "/images/unnasingle/unna single turnover 1.jpeg",
      "/images/unnasingle/unna single turnover 2.jpeg",
      "/images/unnasingle/unna single turnover 3.jpeg",
      "/images/unnasingle/unna single turnover 4.jpeg",
      "/images/unnasingle/unna single turnover 5.jpeg",
      "/images/unnasingle/unna single turnover 6.jpeg",
      "/images/unnasingle/unna single turnover 7.jpeg",
      "/images/unnasingle/unna single turnover 8.jpeg",
      "/images/unnasingle/unna single turnover 9.jpeg",
      "/images/unnasingle/unna single turnover 10.jpeg",
      "/images/unnasingle/unna single turnover 11.jpeg",
      "/images/unnasingle/unna single turnover 12.jpeg",
      "/images/unnasingle/unna single turnover 13.jpeg",
      "/images/unnasingle/unna single turnover 14.jpg",
      "/images/unnasingle/unna single turnover 15.jpeg",
      "/images/unnasingle/unna single turnover 16.jpeg",
      "/images/unnasingle/unna1.jpeg",
      "/images/unnasingle/unna2.jpeg",
      "/images/unnasingle/unna3.jpeg",
    ],
    videos: ["https://avnh3avi0jy6ldcr.public.blob.vercel-storage.com/unna_vid1-EB9ENBD5hIjFeGfqsgP8nmUaVsleRb.mov", "https://avnh3avi0jy6ldcr.public.blob.vercel-storage.com/unna_vid2-I6dJET9bUiH0jcFtnXldubA4T5QOLc.mp4", "https://avnh3avi0jy6ldcr.public.blob.vercel-storage.com/unna_vid3-OGR7b8fdeKK7AiJQmbiRtjfEoQQr6S.mp4"],
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
