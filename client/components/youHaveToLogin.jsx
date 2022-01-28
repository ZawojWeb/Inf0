import { useRouter } from "next/router"

const YouHaveToLogin = () => {
  const router = useRouter()
  return (
    <section className='py-8 bg-indigo-600 h-screen flex items-center'>
      <div className='container px-4 mx-auto'>
        <div className='relative p-10 md:py-20 xl:px-20 bg-indigo-600 overflow-hidden rounded-3xl'>
          <img className='absolute right-0 top-1/2 transform -translate-y-1/2' src='/assets/uinel-assets/images/dashboard-banners/header4.png' alt='' />
          <div className='relative z-10 text-center'>
            <h2 className='mb-4 text-6xl md:text-7xl text-white font-heading font-semibold'>Nie jesteś zalogowany</h2>
            <p className='mb-9 text-white font-heading font-medium'>Zaloguj się lub załóż konto</p>
            <div className='sm:mx-auto sm:max-w-max flex'>
              <a
                className='block py-5 px-7 text-lg leading-3 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl mr-10'
                href=''
                onClick={(e) => {
                  e.preventDefault()
                  router.push("/Login")
                }}
              >
                Zaloguj się
              </a>{" "}
              <a
                className='block py-5 px-7  text-lg leading-3 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl'
                onClick={(e) => {
                  e.preventDefault()
                  router.push("/Register")
                }}
                href=''
              >
                Zarejestruj sie
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YouHaveToLogin
