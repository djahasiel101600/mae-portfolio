// Local override to relax Framer Motion prop typings used across the app
// This makes `motion` components accept common animation props without
// TypeScript errors caused by mismatched library types in this workspace.
declare module "framer-motion" {
  // Treat the motion export as any to avoid strict prop checks in JSX
  export const motion: any
  export const AnimatePresence: any
  export function useScroll(): any
  export function motionValue(initial: any): any
  export const useTransform: any
  export const useAnimation: any
}

export {};
