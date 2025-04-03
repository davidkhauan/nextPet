"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'

import UseEmblaCarousel from 'embla-carousel-react'

import Image from 'next/image'

import tutor1Image from '../../../public/tutor1.png'
import tutor2Image from '../../../public/tutor2.png'

const testimonials = [
    {
        content:
        'Ótimo atendimento e profissionais super qualificados! Meu pet ficou lindo e feliz após o banho e tosa.',
        author: 'Ana Paula',
        role: 'Cliente',
        image: tutor2Image
    },
    {
        content:
        'Ótimo atendimento e profissionais super qualificados! Meu pet ficou lindo e feliz após o banho e tosa.',
        author: 'Ana Paula',
        role: 'Cliente',
        image: tutor1Image
    },
    {
        content:
        'Ótimo atendimento e profissionais super qualificados! Meu pet ficou lindo e feliz após o banho e tosa.',
        author: 'Ana Paula',
        role: 'Cliente',
        image: tutor2Image
    }
]

export function Testimonials() {
    const [emblaRef, emblaApi] = UseEmblaCarousel ({ 
        loop: true
    })

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }

    return (
        <section className="bg-[#FFD449] py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Depoimentos dos nossos clientes</h2>

                <div className="relative max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="500">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map ((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-o px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className="relative w-24 h-24">
                                                <Image src={item.image} alt={item.author} fill sizes='96px' className='object-cover rounded-full' />
                                            </div>

                                            <p className='text-gray-200'>{item.content}</p>
                                            <div>
                                                <p className='font-bold'>{item.author}</p>
                                                <p className='text-sm text-gray-400'>{item.role}</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button 
                        className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                        onClick={scrollPrev}
                        data-aos="fade-left" data-aos-delay="300"
                    >
                        <ChevronLeft className='2-6 h-6 text-gray-600' />
                    </button>
                    <button 
                        className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                        onClick={scrollNext}
                        data-aos="fade-right" data-aos-delay="300"
                    >
                        <ChevronRight className='2-6 h-6 text-gray-600' />
                    </button>
                </div>
            </div>
        </section>
    )
}