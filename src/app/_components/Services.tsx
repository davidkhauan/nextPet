"use client"

import { Scissors, Syringe, CarTaxiFront, Hotel, ChevronLeft, ChevronRight } from 'lucide-react'

import { Clock, WhatsappLogo } from '@phosphor-icons/react'

import UseEmblaCarousel from 'embla-carousel-react'

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

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12">Serviços</h2>

                <div className="relative" data-aos="fade-up" data-aos-delay="500">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map ((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-o md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex-1 flex items-start justify-between">
                                            <div className="flex gap-3">
                                                <span className='text-3xl'>{item.icon}</span>

                                                <div className="">
                                                    <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                                                    <p className='text-gray-400 text-sm select-none'>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock className='w-4 h-4' />
                                                <span>{item.duration}</span>
                                            </div>

                                            <a 
                                                target='_blank'
                                                href={`https://wa.me/558598179962?text=Olá vim pelo site e gostaria de mais informações sobre ${item.title}`}
                                                className='flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300'
                                            >
                                                <WhatsappLogo className='w-5 h-5' />
                                                Entrar em contato
                                            </a>
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