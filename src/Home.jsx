import React, { useEffect, useState } from 'react'

const Home = () => {

  // ---------------- MOVIE APP (FULLY COMMENTED) ----------------
  /*
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handlechange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchmovies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=8522ef48`)
        const data = await response.json();
        setMovies(data.Search || [])
      } catch (error) {
        console.error(error)
      }
    };

    if (query) {
      fetchmovies();
    }
  }, [query]);

  return (
    <div>
      <div className="serachbar">
        <input type="text" placeholder='search movie' onChange={handlechange} value={query} />
      </div>

      <div className='moviegrid' style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {movies.map((movie, index) => (
          <div key={index}>
            <li>{movie.Title}</li>
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
  */
  // ---------------- MOVIE APP COMMENT END ----------------


  // ---------------- MATH GAME ----------------
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('');
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('Try It');
  const[report,setReport]=useState([]);

  let newmsg='';

  const generateQuestion = () => {
    let operators = ['+', '-', '*'];
    setNum1(Math.floor(Math.random() * 100));
    setNum2(Math.floor(Math.random() * 100));
    setOperator(operators[Math.floor(Math.random() * operators.length)]);
    setAnswer('');
    setMessage('try this');
  };

  useEffect(() => { generateQuestion(); }, []);

  const checkAnswer = (e) => {
    e.preventDefault();
    heartCount();
    let correctAnswer;

    switch (operator) {
      case '+': correctAnswer = num1 + num2; break;
      case '-': correctAnswer = num1 - num2; break;
      case '*': correctAnswer = num1 * num2; break;
      default: correctAnswer = 0;
    }

    if (parseInt(answer) === correctAnswer) {
      setMessage('✅ Correct');
      setScore(score + 1);
    } else {
      setMessage(`❌❌❌
                correct Answer is ${correctAnswer}`)
    }
    if(score===5){setMessage('GOOD ⭐⭐⭐')};
        if(score===10){setMessage("YOU ARE ⭐⭐⭐⭐⭐")};
     setReport(prev=>[...prev,{question:`${num1}${operator}${num2}`,your_answer:answer,correctAnswer}])
    setTimeout(generateQuestion, 5000);
  };
   const heartCount=()=>{
        if(score%2===0){
            let count=score/2
            for(let i=0;i<count;i++){
                newmsg=newmsg+"❤️"
            }
        }
    }

  return (
    <div style={{ backgroundColor: 'aqua', borderRadius: '10px', textAlign: 'center',height:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
      <div>
      <h1 style={{color:'red'}}>Your math Practice Application:</h1>
      <h1>{num1}{operator}{num2} = ?</h1>

      <form onSubmit={checkAnswer}>
        <input
          style={{ fontSize: 'large', backgroundColor: 'whitesmoke', borderRadius: '10px', textAlign: 'center' }}
          required
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button
          style={{ fontSize: 'large', backgroundColor: 'blue', color: 'white', borderRadius: '10px' }}
          type="submit"
        >
          check
        </button>
      </form>

      <h1  style={{ whiteSpace: "pre-line" }}>{message}</h1>
      
        </div>
       <div>
            <h4>Score: {score}</h4>
            <table>
                <thead>Your report</thead>
                <tbody>
                    <tr>
                        <th>question</th>
                        <th>your answer</th>
                        <th>correct answer</th>
                    </tr>
                    {report?.map((curEle,i)=>(
                        <tr key={i}>
                            <td>{curEle.question}</td>
                            <td style={{color:curEle.your_answer==curEle.correctAnswer?'green':'red'}}>{curEle.your_answer}</td>
                            <td style={{color:'green'}}>{curEle.correctAnswer}</td>
                        </tr>
                          ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Home;




