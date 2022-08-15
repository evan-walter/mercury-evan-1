import './index.css'

export default function App() {
  return (
    <>
      <div className='px-10'>
        <div className='flex flex-col items-center justify-between max-w-2xl pb-10 mx-auto my-20 border-b border-gray-300 xs:flex-row'>
          <button className='p-4 mb-5 text-white transition bg-green-500 rounded-full hover:scale-105 xs:mb-0'>
            Get A New Random Joke
          </button>
          <a href='#' className='text-blue-500 underline hover:text-blue-600'>
            View API Docs
          </a>
        </div>
        <p className='font-bold text-center text-gray-500 uppercase'>
          Loading your joke...
        </p>
      </div>
    </>
  )
}
