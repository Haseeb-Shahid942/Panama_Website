'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { scroller } from 'react-scroll'

export default function ScrollHandler() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const scrollTo = searchParams.get('scroll')
    if (scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(scrollTo, {
          smooth: true,
          offset: -80,
          duration: 500,
        })
      }, 200)
    }
  }, [searchParams])

  return null
}