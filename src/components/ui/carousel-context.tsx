'use client'
import * as React from 'react'
import type { CarouselContextProps } from './carousel'

export const CarouselContext = React.createContext<CarouselContextProps | null>(
  null,
)
