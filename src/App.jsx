import React,{ useState, useEffect } from 'react';
import Matrix from './components/Matrix';
import Background from './components/Background';
import Template from './components/Template';
//module
import GoldenBell from './components/GoldenBell';

function App() {
  const [isHome,setIsHome] = useState(true)
  const [question,setQuestion] = useState()
  console.dir(question)
  return (
    <>
    {isHome&&
    <Template>
      <GoldenBell
        setIsHome = {setIsHome}
        setQuestion = {setQuestion}
        question = {question}
      />
    </Template>}

    <Background
      isHome={isHome}
    />
    </>
  );
}

export default App;