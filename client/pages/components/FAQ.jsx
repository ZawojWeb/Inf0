const FAQ = () => {
  return (
    <section className='font-medium bg-white py-24 2xl:pt-44 2xl:pb-52 overflow-hidden'>
      <div className='container px-4 mx-auto'>
        <span className='uppercase tracking-widest text-xs text-gray-300 leading-4 mb-9 block text-center'>The most popular</span>
        <h2 className='font-heading text-9xl md:text-10xl xl:text-11xl leading-tight mb-20 xl:mb-36 text-center'>FAQ's</h2>
        <div className='grid lg:grid-cols-2 gap-20 lg:items-center'>
          <div className='grid gap-4'>
            <a className='flex items-start justify-between border border-black border-opacity-10 rounded-3xl py-9 px-6 md:px-16' href='#'>
              <h3 className='font-heading text-4xl leading-tighter leading-10 mr-16'>Rodzaje uprawnień</h3>
              <img className='mt-4' src='/assets/uinel-assets/elements/faqs/arrow-down-black.svg' alt='' />
            </a>
            <div>
              <div className='mx-auto w-3/4 md:w-80 md:ml-16 bg-purple-500' style={{ height: 3 + "px" }}></div>
              <a className='flex justify-between items-start border border-black border-opacity-10 rounded-3xl py-9 px-6 md:px-16' href='#'>
                <div>
                  <h3 className='font-heading text-4xl leading-tighter leading-10 mr-16'>Tabele</h3>
                  <p className='text-lg leading-6 font-normal mt-4'>The nulla commodo, commodo eros a, tristique lectus.</p>
                </div>
                <img className='mt-4' src='/assets/uinel-assets/elements/faqs/arrow-up-black.svg' alt='' />
              </a>
            </div>
            <a className='flex items-start justify-between border border-black border-opacity-10 rounded-3xl py-9 px-6 md:px-16' href='#'>
              <div>
                <h3 className='font-heading text-4xl leading-tighter leading-10 mr-16'>Procedury &amp; Triggery</h3>
                <p className='hidden text-lg leading-6 font-normal mt-4'>The nulla commodo, commodo eros a, tristique lectus.</p>
              </div>
              <img className='mt-4' src='/assets/uinel-assets/elements/faqs/arrow-down-black.svg' alt='' />
            </a>
            <a className='flex items-start justify-between border border-black border-opacity-10 rounded-3xl py-9 px-6 md:px-16' href='#'>
              <div>
                <h3 className='font-heading text-4xl leading-tighter leading-10 mr-16'>Server i Kilent</h3>
                <p className='hidden text-lg leading-6 font-normal mt-4'>The nulla commodo, commodo eros a, tristique lectus.</p>
              </div>
              <img className='mt-4' src='/assets/uinel-assets/elements/faqs/arrow-down-black.svg' alt='' />
            </a>
          </div>
          <img src='/assets/uinel-assets/images/faqs/widget.png' alt='' />
        </div>
      </div>
    </section>
  )
}

export default FAQ
