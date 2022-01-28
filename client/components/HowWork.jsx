const HowWork = () => {
  return (
    <section className='py-24 2xl:pt-40 2xl:pb-52 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='mb-20 2xl:mb-36 text-center'>
          <span className='block mb-9 font-medium uppercase tracking-widest text-xs leading-4 text-gray-300'>JAK TO DZIAŁA</span>
          <h2 className='mb-12 font-heading font-medium text-9xl md:text-10xl xl:text-11xl leading-none'>TO BANALNIE PROSTE</h2>
        </div>
        <div className='flex flex-wrap items-center justify-center -mx-4 mb-10 xl:mb-32'>
          <div className='w-full xl:w-11/12 px-4 mb-10 xl:mb-0'>
            <div className='flex flex-wrap md:flex-nowrap items-center xl:items-start -mx-2'>
              <div className='w-full lg:w-1/2 xl:w-1/4 px-2 mb-5 xl:mb-0'>
                <div className='pt-16 pb-20 px-8 lg:px-12 2xl:px-16 border-black border-opacity-10 border rounded-3xl'>
                  <div className='relative inline-flex items-center justify-center mb-8 w-12 h-12 leading-6 text-white bg-blue-500 rounded-full'>
                    <span className='text-2xl font-bold'>1</span>
                  </div>
                  <h2 className='mb-6 xl:mb-14 font-heading font-medium text-6xl 2xl:text-8xl leading-tight'>Tworzysz konto</h2>
                  <p className='text-lg text-darkBlueGray-400'>The nulla commodo, commodo eros a, tristique lectus.</p>
                </div>
              </div>
              <div className='w-full lg:w-1/2 xl:w-2/4 px-2 mb-5 xl:mb-0'>
                <div className='pt-16 pb-20 px-8 lg:px-12 2xl:px-16 mb-5 border border-black border-opacity-10 rounded-3xl'>
                  <div className='relative inline-flex items-center justify-center mb-8 w-12 h-12 leading-6 text-white bg-blue-500 rounded-full'>
                    <span className='text-2xl font-bold'>2</span>
                  </div>
                  <h2 className='mb-6 font-heading font-medium text-6xl lg:text-8xl leading-tight'>Tworzysz Grupę</h2>
                  <p className='text-lg text-darkBlueGray-400'>Proin nec nunc felis. In non tellus ultricies, rutrum lacus et, pharetra elit.</p>
                </div>
                <div className='pt-16 pb-20 px-8 lg:px-12 2xl:px-16 border border-black border-opacity-10 rounded-3xl'>
                  <div className='bg-blue-500 relative rounded-full inline-block w-12 h-12 text-white leading-6 mb-6'>
                    <span className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold'>3</span>
                  </div>
                  <h2 className='mb-6 font-heading font-medium text-6xl lg:text-8xl leading-tight'>Dodajesz osoby</h2>
                  <p className='text-lg text-darkBlueGray-400'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
                </div>
              </div>
              <div className='w-full lg:w-1/2 xl:w-1/4 px-2'>
                <div className='pt-16 pb-20 px-8 lg:px-12 2xl:px-16 border border-black border-opacity-10 rounded-3xl'>
                  <div className='relative inline-block mb-6 w-12 h-12 leading-6 text-white bg-blue-500 rounded-full'>
                    <span className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold'>4</span>
                  </div>
                  <h2 className='mb-6 xl:mb-14 font-heading font-medium text-6xl 2xl:text-8xl leading-tight'>Zaczynacie działać</h2>
                  <p className='text-lg text-darkBlueGray-400'>Etiam molestie nunc euismod ex viverra, in convallis nibh scelerisque.</p>
                </div>
              </div>
            </div>
          </div>
          <a className='w-auto px-4 order-last' href='#'></a>
        </div>
      </div>
    </section>
  )
}

export default HowWork
