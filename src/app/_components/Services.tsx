"use client"

import { UseEmblaCarousel } from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel } from 'lucide-react'

import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

const services = [
    {
        title: 'Banho e Tosa',
        description: 'Banho e tosa com produtos de qualidade e profissionais experientes.',
        duration: '1h',
        price: 'R$ 50,00',
        icon: <Scissors />,
        linkText: 'Olá, vi no site que vocês fazem banho e tosa.'
    },
    {
        title: 'Banho e Tosa',
        description: 'Banho e tosa com produtos de qualidade e profissionais experientes.',
        duration: '1h',
        price: 'R$ 50,00',
        icon: <Syringe />,
        linkText: 'Olá, vi no site que vocês fazem banho e tosa.'
    },
    {
        title: 'Banho e Tosa',
        description: 'Banho e tosa com produtos de qualidade e profissionais experientes.',
        duration: '1h',
        price: 'R$ 50,00',
        icon: <CarTaxiFront />,
        linkText: 'Olá, vi no site que vocês fazem banho e tosa.'
    },
    {
        title: 'Banho e Tosa',
        description: 'Banho e tosa com produtos de qualidade e profissionais experientes.',
        duration: '1h',
        price: 'R$ 50,00',
        icon: <Hotel />,
        linkText: 'Olá, vi no site que vocês fazem banho e tosa.'
    },
]

export function Services() {
    const [emblaRef, emblaApi] = UseEmblaCarousel ({ 
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    })

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="">
                    <h2 className="text-4xl font-bold mb-12">Serviços</h2>
                </div>

                <div className="relative"></div>
            </div>
        </section>
    )
}