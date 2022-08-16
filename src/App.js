import { useState } from 'react'
import axios from 'axios'
import Btn from './components/Btn'
import Status from './components/Status'
import JokeText from './components/JokeText'
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
      setShowPunchline(false)
      setLoading(true)
      const { data } = await axios.get(
        'https://karljoke.herokuapp.com/jokes/random'
      )
      console.log(data)
      setSetup(`${data.setup}`)
      setPunchline(`${data.punchline}`)
      setSuccess(true)
    } catch (err) {
      throw new Error(err)
      setFailure(true)
    }
    setLoading(false)
  }

  return (
    <>
      <div className='px-10'>
        <div className='flex flex-col items-center justify-between max-w-2xl pb-10 mx-auto my-20 border-b border-gray-300 xs:flex-row'>
          <Btn addClassNames='bg-green-500' onClick={fetchData}>
            Get A New Random Joke
          </Btn>
          <a
            href='https://karljoke.herokuapp.com/'
            target='_blank'
            className='mt-5 text-blue-500 underline hover:text-blue-600 xs:mt-0'
          >
            View API Docs
          </a>
        </div>
        <div class='max-w-2xl mx-auto flex flex-col'>
          {loading ? (
            <Status addClassNames='text-gray-500'>Loading your joke...</Status>
          ) : null}
          {success ? (
            <>
              <div className='relative my-10'>
                <div className='absolute top-0 left-0 font-serif text-gray-200 text-9xl leading-0 -z-10'>
                  “
                </div>
                <JokeText>{setup}</JokeText>
              </div>
              <Btn
                addClassNames='bg-blue-600 mx-auto'
                onClick={() => setShowPunchline(!showPunchline)}
              >
                {showPunchline ? 'Hide Punchline' : 'Show Punchline'}
              </Btn>
            </>
          ) : null}
          {showPunchline ? (
            <div className='relative my-10'>
              <div className='absolute inset-y-0 right-0 font-serif text-gray-200 text-9xl leading-0 -z-10'>
                ”
              </div>
              <JokeText addClassNames='text-right'>{punchline}</JokeText>
            </div>
          ) : null}
          {failure ? (
            <Status addClassNames='text-red-700'>
              There was an error loading your joke.
            </Status>
          ) : null}
        </div>
      </div>
    </>
  )
}
