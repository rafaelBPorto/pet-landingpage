import Image from "next/image"
import aboutImg1 from "../../../public/about-1.png"
import aboutImg2 from "../../../public/about-2.png"
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"


export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-up-right" data-aos-delay="300">

            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={aboutImg1}
                alt="foto de um cachorro"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
              />
            </div>

            <div className="absolute size-40 right-4 -bottom-8 border-4 border-white overflow-hidden rounded-lg">
              <Image
                src={aboutImg2}
                alt="foto de um cachorro"
                fill
                quality={100}
                priority
              />
            </div>

          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
            <h2 className="text-4xl font-bold">SOBRE</h2>

            <p>
              Until one has loved an animal, a parte of one's soul remains unawakened.
              We believe in it and we believe in easy acess to things that are good for our mind, body and spirit.
              With a clever offering, superb support and a secure checkout you're in good hands.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinários
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade
              </li>
            </ul>

            <div id="contato" className="flex justify-center  gap-2">
              <a
                href={`https://wa.me/5511930413365?text=${encodeURIComponent('Olá, gostaria de saber mais sobre os serviços oferecidos pelo Pet Shop Dev.')}`}
                target='_blank'
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                <WhatsappLogo className="size-5" />
                Contato via WhatsApp
              </a>

              <a href="#" className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                <MapPin className="size-5" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}