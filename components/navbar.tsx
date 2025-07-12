"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

// Update the routes array to hide the Listings link from regular users
// We'll keep the code but add a conditional to hide it

const routes = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings", developerOnly: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">Premier Properties</span>
        </Link>
        {/* Then update the navigation rendering to filter out developer-only routes */}
        {/* In the desktop navigation: */}
        <nav className="hidden md:flex gap-6">
          {routes
            .filter((route) => !route.developerOnly)
            .map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {route.label}
              </Link>
            ))}
        </nav>
        <div className="hidden md:flex gap-4">
          <Link href="/contact">
            <Button>Contact Agent</Button>
          </Link>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <span className="text-xl font-bold">Premier Properties</span>
              </Link>
              {/* And in the mobile navigation: */}
              <nav className="flex flex-col gap-4">
                {routes
                  .filter((route) => !route.developerOnly)
                  .map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        pathname === route.href ? "text-primary" : "text-muted-foreground",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ))}
              </nav>
              <div className="flex flex-col gap-2">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  <Button className="w-full">Contact Agent</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
