import Image from "next/image"

const Hero = () => {
  return (
    <section className='overflow-hidden'>
      <div className='bg-indigo-700 rounded-b-9xl'>
        <div className='container px-4 mx-auto'>
          <div className='relative pt-24 z-20 mb-16 xl:mb-0'>
            <span className='block mb-9 font-medium uppercase text-center tracking-widest text-xs text-white'>Najlepsze narzędzie do wspópracy</span>
            <h1 className='max-w-4xl mx-auto font-heading font-medium text-center text-white text-9xl md:text-10xl leading-tight'>Inf0</h1>
          </div>
        </div>
        <div className='relative xl:-mt-48 mx-auto max-w-max'>
          <Image src='/assets/uinel-assets/images/heroes/widget3.png' width={1260} height={682} />
        </div>
      </div>
    </section>
  )
}

export default Hero
