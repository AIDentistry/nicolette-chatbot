import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col justify-center items-center gap-2 rounded-lg border bg-background p-6">
        <h1 className="text-lg font-semibold">Financial Bunny AI</h1>
        <p className="leading-normal text-muted-foreground center-text center-text text-sm">
          By Nicolette Mashile
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 rounded-lg border bg-background p-8">
        <p className="leading-normal text-muted-foreground center-text center-text">
          This platform serves to educate and interact with you on all things
          finances in a South Africa first context and the rest of the world.
          Now you have a smart friend in finance!
        </p>
      </div>
    </div>
  )
}
