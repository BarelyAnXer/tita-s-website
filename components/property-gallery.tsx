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
        <DialogContent className="max-w-5xl max-h-[90vh] p-0 overflow-hidden">
          <div className="relative flex flex-col h-full">
            {/* <Button variant="ghost" size="icon" className="absolute right-2 top-2 z-10 bg-black/20 hover:bg-black/40 text-white" onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button> */}

            <div className="relative flex-1 min-h-0">
              <div className="relative w-full h-full aspect-[4/3] max-h-[70vh]">
                <Image
                  src={images[currentIndex] || "/placeholder.svg"}
                  alt={`Property image ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                />

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous image</span>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next image</span>
                </Button>
              </div>
            </div>

            {/* Fixed thumbnail strip with touch scrolling */}
            <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white shadow-lg">
              <div 
                className="flex gap-1 overflow-x-auto p-2 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" 
                style={{
                  scrollbarWidth: 'thin',
                  WebkitOverflowScrolling: 'touch',
                  overscrollBehaviorX: 'contain'
                }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative cursor-pointer overflow-hidden rounded flex-shrink-0 transition-all duration-200 ${
                      currentIndex === index 
                        ? "ring-2 ring-blue-500 ring-offset-1" 
                        : "hover:ring-1 hover:ring-gray-300"
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <div className="w-12 h-12 relative">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Image counter */}
              <div className="text-center text-sm text-gray-500 pb-2">
                {currentIndex + 1} of {images.length}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}