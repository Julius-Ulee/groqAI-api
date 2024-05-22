import './App.css';
import { requestToGroqAI } from './utils/groq';
import { useState } from 'react'
import { Light as SyntaxHighlight } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function App() {
  const [data,setData] = useState('');
  const handleSubmit = async () => {
    const ai = await requestToGroqAI(content.value);
    setData(ai);
  };
  return (
    <main className='flex flex-col min-h-{80vh} justify-center items-center max-w-xl w-full mx-auto'>
      <h1 className='text-4xl text-indigo-500 font-bold'>Ulee AI</h1>
      <form className='flex flex-col gap-4 py-4 w-full' action="">
        <input 
        placeholder='What are you looking for?'
        id='content'
        className='py-2 px-4 text-md rounded-md' 
        type="text" />
        <button 
        type='button'
        onClick={handleSubmit}
        className='bg-indigo-500 py-2 px-4 font-bold text-white rounded-md'>Send</button>
      </form>
      <div className='max-w-xl w-full mx-auto'>
      {data ? (
      <SyntaxHighlight language='swift' style={darcula} wrapLongLines='true'>
        {data}
      </SyntaxHighlight>
      ) : null}
      </div>
    </main>
  )
}

export default App
