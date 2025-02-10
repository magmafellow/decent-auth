"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"
import './switch.scss'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      `switch-root peer inline-flex h-[26px] w-[52px] shrink-0 cursor-pointer items-center rounded-full
       transition-colors
      
      dark:bg-[#181818] hover:dark:bg-[#1d1d1d]`,
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        `switch-thumb pointer-events-none block h-5 w-5 rounded-full data-[state=checked]:bg-accentL shadow-lg
        ring-0 transition-transform data-[state=unchecked]:translate-x-[2px] data-[state=checked]:translate-x-[30px] data-[state=unchecked]:bg-accent
         dark:bg-neutral-950`
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
