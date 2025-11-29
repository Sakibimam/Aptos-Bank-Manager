import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import Image from "next/image"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [imageError, setImageError] = React.useState(false)

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
        {!imageError ? (
          <Image
            src="/aptos_bank.png"
            alt="Aptos Bank"
            height={24}
            width={24}
            onError={() => setImageError(true)}
            className="rounded"
          />
        ) : (
          <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground text-xs font-bold">
            A
          </div>
        )}
        <span className="inline-block font-bold">AptosManager</span>
      </Link>
    </div>
  )
}
