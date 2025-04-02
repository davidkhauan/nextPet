import Image from "next/image"

import about1Image from '../../../public/about-1.webp'
import about2Image from '../../../public/about-2.webp'

export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container mx-auto grid-cols-1 lg:grid-cols-2 gap 12 items-center">
                <div className="relative">
                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                        <Image src={about1Image} alt="Foto do cachorro" 
                            fill
                            quality={100}
                            className="object-cover hover:scale-110 duration-300"
                            priority
                        />
                    </div>

                    <div className="relative w-40 h-40 right-4 -bottom-8 rounded-lg">
                        <Image src={about2Image} alt="Foto do Gato" 
                            fill
                            quality={100}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}