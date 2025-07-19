"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Play, X } from "lucide-react"

interface PropertyVideosProps {
  videos: string[]
}

export function PropertyVideos({ videos }: PropertyVideosProps) {
  const [open, setOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState("")

  const handleVideoClick = (video: string) => {
    setCurrentVideo(video)
    setOpen(true)
  }

  if (!videos.length) return null

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Property Videos</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {videos.map((video, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative cursor-pointer" onClick={() => handleVideoClick(video)}>
                <video
                  src={video}
                  className="aspect-[9/16] w-full object-cover"
                  width={200}
                  height={350}
                  muted
                  preload="metadata"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90">
                    <Play className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md p-0 sm:max-w-lg">
          <div className="relative">
            {/* <Button variant="ghost" size="icon" className="absolute right-2 top-2 z-10" onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button> */}

            <div className="aspect-[9/16] w-full">
              <video
                src={currentVideo}
                className="h-full w-full object-cover"
                controls
                autoPlay
                muted
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
