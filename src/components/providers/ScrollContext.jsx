'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const ScrollContext = createContext()

export const useScrollContext = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider')
  }
  return context
}

export const ScrollProvider = ({ children }) => {
  const [pendingScroll, setPendingScroll] = useState(null)

  // Check for pending scroll on mount and after navigation
  useEffect(() => {
    const checkPendingScroll = () => {
      const scrollTarget = sessionStorage.getItem('pendingScroll')
      if (scrollTarget) {
        setPendingScroll(scrollTarget)
        sessionStorage.removeItem('pendingScroll')
      }
    }

    // Check immediately
    checkPendingScroll()

    // Also check after a short delay to ensure DOM is ready
    const timer = setTimeout(checkPendingScroll, 100)
    
    return () => clearTimeout(timer)
  }, [])

  // Execute scroll when pendingScroll changes
  useEffect(() => {
    if (pendingScroll) {
      const timer = setTimeout(() => {
        const element = document.getElementById(pendingScroll)
        if (element) {
          const offsetTop = element.offsetTop - 80 // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
        }
        setPendingScroll(null)
      }, 200) // Small delay to ensure page is fully loaded

      return () => clearTimeout(timer)
    }
  }, [pendingScroll])

  const scheduleScroll = (sectionId) => {
    sessionStorage.setItem('pendingScroll', sectionId)
    setPendingScroll(sectionId)
  }

  return (
    <ScrollContext.Provider value={{ scheduleScroll, pendingScroll }}>
      {children}
    </ScrollContext.Provider>
  )
}