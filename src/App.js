import { useState } from 'react'
import axios from 'axios'
import './index.css'

export default function App() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)
  const [setup, setSetup] = useState('')
  const [punchline, setPunchline] = useState('')
  const [showPunchline, setShowPunchline] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(
        'https://karljoke.herokuapp.com/jokes/random'
      )
      console.log(data)
      setSetup(`${data.setup}`)
      setPunchline(`${data.punchline}`)
      setSuccess(true)
      setLoading(false)
    } catch (err) {
      throw new Error(err)
      setFailure(true)
    }
  }

  return (
    <>
      <div className='px-10'>
        <div className='flex flex-col items-center justify-between max-w-2xl pb-10 mx-auto my-20 border-b border-gray-300 xs:flex-row'>
          <button
            className='p-4 mb-5 text-white transition bg-green-500 rounded-full hover:scale-105 xs:mb-0'
            onClick={fetchData}
          >
            Get A New Random Joke
          </button>
          <a
            href='https://karljoke.herokuapp.com/'
            target='_blank'
            className='text-blue-500 underline hover:text-blue-600'
          >
            View API Docs
          </a>
        </div>
        <div class='max-w-2xl mx-auto flex flex-col'>
          {loading ? (
            <p className='font-bold text-center text-gray-500 uppercase'>
              Loading your joke...
            </p>
          ) : null}
          {success ? (
            <>
              <div className='relative my-10'>
                <div className='absolute top-0 left-0 font-serif text-gray-200 text-9xl leading-0 -z-10'>
                  “
                </div>
                <p className='text-2xl'>{setup}</p>
              </div>
              <button
                className='p-4 mx-auto mb-5 text-white transition bg-blue-600 rounded-full hover:scale-105'
                onClick={() => setShowPunchline(!showPunchline)}
              >
                {showPunchline ? 'Hide Punchline' : 'Show Punchline'}
              </button>
            </>
          ) : null}
          {showPunchline ? (
            <div className='relative my-10'>
              <div className='absolute inset-y-0 right-0 font-serif text-gray-200 text-9xl leading-0 -z-10'>
                ”
              </div>
              <p className='text-2xl text-right'>{punchline}</p>
            </div>
          ) : null}
          {failure ? (
            <p className='font-bold text-center text-red-700 uppercase'>
              There was an error loading your joke.
            </p>
          ) : null}
        </div>
      </div>
    </>
  )
}
