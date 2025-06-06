import { cn } from "@/lib/utils"

function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "w-full h-auto text-neutral-900 dark:text-neutral-100 transition-colors duration-300",
        className
      )}
      role="img"
      aria-label="Phi Logo"
      aria-hidden="true"  
      name="logo"
      focusable="false"
    >
      <defs>
        <linearGradient id="dynamicGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor"/>
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.7"/>
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="glow"/>
          <feMerge>
            <feMergeNode in="glow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* 椭圆（长轴水平） */}
      <ellipse 
        cx="50" 
        cy="50" 
        rx="30" 
        ry="20"
        stroke="url(#dynamicGlow)" 
        strokeWidth="4"
        fill="none" 
        filter="url(#glow)" 
      />

      {/* 倾斜约30°的斜线（穿出椭圆） */}
      <line 
        x1="20" 
        y1="80" 
        x2="80" 
        y2="20"
        stroke="url(#dynamicGlow)" 
        strokeWidth="6"
        filter="url(#glow)" 
      />
    </svg>
  )
}

export default Logo
