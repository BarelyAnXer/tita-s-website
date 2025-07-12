"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Filter, Search } from "lucide-react"

export function PropertyFilters() {
  const [priceRange, setPriceRange] = useState([1000000, 5000000])

  return (
    <Card className="h-fit">
      <CardHeader className="px-4 py-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Filter className="h-5 w-5" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-0">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="text" placeholder="Search by location..." className="pl-8" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Price Range</Label>
            <Slider
              defaultValue={[1000000, 5000000]}
              max={10000000}
              step={100000}
              value={priceRange}
              onValueChange={setPriceRange}
              className="py-4"
            />
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">${(priceRange[0] / 1000000).toFixed(1)}M</span>
              <span className="text-sm text-muted-foreground">${(priceRange[1] / 1000000).toFixed(1)}M</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Bedrooms</Label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, "5+"].map((num) => (
                <Button key={num} variant="outline" className="flex-1 px-0" size="sm">
                  {num}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Bathrooms</Label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, "5+"].map((num) => (
                <Button key={num} variant="outline" className="flex-1 px-0" size="sm">
                  {num}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Property Type</Label>
            <div className="space-y-2">
              {["House", "Condo", "Townhouse", "Apartment", "Land"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={`type-${type}`} />
                  <Label htmlFor={`type-${type}`} className="text-sm font-normal">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Features</Label>
            <div className="space-y-2">
              {["Swimming Pool", "Garden", "Garage", "Air Conditioning", "Waterfront", "Mountain View"].map(
                (feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox id={`feature-${feature}`} />
                    <Label htmlFor={`feature-${feature}`} className="text-sm font-normal">
                      {feature}
                    </Label>
                  </div>
                ),
              )}
            </div>
          </div>

          <Button className="w-full">Apply Filters</Button>
        </div>
      </CardContent>
    </Card>
  )
}
