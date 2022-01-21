import Link from "next/link"

function Register() {
  return (
    <section class='pb-24 xl:pb-0 bg-darkBlueGray-500'>
      <div class='py-8 mx-10 mb-20 xl:mb-52 bg-white' data-removed=''></div>
      <div class='container px-4 mx-auto'>
        <div class='relative xl:pb-52 text-center overflow-hidden'>
          <img class='absolute top-0 bottom-0 h-full left-1/2 mt-20 transform -translate-x-1/2 object-contain' src='uinel-assets/images/sign-up/half-circle.svg' alt='' />
          <div class='relative'>
            <span class='inline-block py-3 px-7 mb-10 text-lg font-medium font-heading leading-5 text-indigo-500 border border-indigo-500 rounded-6xl'>Create account</span>
            <div class='mb-14 xl:mb-16'>
              <h2 class='text-9xl md:text-10xl xl:text-11xl text-white leading-tight font-heading font-medium'>Start creating a design</h2>
            </div>
            <div class='max-w-md mx-auto'>
              <input class='w-full mb-6 py-5 px-12 text-xl border-2 border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50' type='text' placeholder='Nickname' />
              <input class='w-full mb-6 py-5 px-12 text-xl border-2 border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50' type='email' placeholder='Your Email' />
              <input class='w-full mb-6 py-5 px-12 text-xl border-2 border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50' type='password' placeholder='Password' />
              <input class='w-full mb-14 py-5 px-12 text-xl border-2 border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50' type='password' placeholder='Confirm password' />
              <div class='relative mb-14 flex justify-center items-center'>
                <a class='inline-block mr-4 -mt-5' href='#'>
                  <img src='uinel-assets/images/sign-up/check.svg' alt='' />
                </a>
                <input style={{ appearance: "none" }} type='checkbox' />
                <p class='text-gray-200'>
                  Masz konto ? <Link href='/Login'>Zaloguj się</Link>
                </p>
              </div>
              <a class='block py-5 px-10 mx-auto w-full md:max-w-max text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl' href='#'>
                Register now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Register
