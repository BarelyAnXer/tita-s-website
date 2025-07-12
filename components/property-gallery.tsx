"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"
import Image from "next/image"

interface PropertyGalleryProps {
  images: string[]
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl aspect-[16/9]">
        <Image
          src={images[0] || "/placeholder.svg"}
          alt="Property main image"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
        <Button variant="secondary" size="icon" className="absolute bottom-4 right-4" onClick={() => setOpen(true)}>
          <Expand className="h-4 w-4" />
          <span className="sr-only">View all images</span>
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.slice(1, 5).map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-lg aspect-square"
            onClick={() => {
              setCurrentIndex(index + 1)
              setOpen(true)
            }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Property image ${index + 2}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 200px"
            />
            {index === 3 && images.length > 5 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                +{images.length - 5} more
              </div>
            )}
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0">
          <div className="relative">
            <Button variant="ghost" size="icon" className="absolute right-2 top-2 z-10" onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>

            <div className="relative aspect-[16/9] w-full">
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`Property image ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous image</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>

            <div className="flex gap-2 overflow-x-auto p-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer overflow-hidden rounded-md ${
                    currentIndex === index ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <div className="h-16 w-16 relative">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
