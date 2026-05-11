import { useGSAP as useGSAPBase } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { useGSAPBase as useGSAP, gsap, ScrollTrigger }
