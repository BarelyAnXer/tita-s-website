import { PropertyListings } from "@/components/property-listings"
import { PropertyFilters } from "@/components/property-filters"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function ListingsPage() {
  return (
    <div className="flex flex-col gap-8 py-8">
      <section className="container px-4 md:px-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Developer View</AlertTitle>
          <AlertDescription>This page is only visible to developers and is hidden from regular users.</AlertDescription>
        </Alert>

        <div className="flex flex-col gap-4 mt-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Property Listings</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Browse our exclusive collection of premium properties available for sale.
          </p>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
          <PropertyFilters />
          <PropertyListings />
        </div>
      </section>
    </div>
  )
}
