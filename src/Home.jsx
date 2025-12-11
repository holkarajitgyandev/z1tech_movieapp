import React, { useEffect, useState } from 'react'

const Home = () => {
//     const[query,setQuery]=useState('');
//     const[movies,setMovies]=useState([])

//     const handlechange=(e)=>{
//         setQuery(e.target.value)
//     }

//     useEffect(()=>{
//         const fetchmovies=async()=>{
//             try {
//                 const response=await fetch(`https://www.omdbapi.com/?s=${query}&apikey=8522ef48`)
//                 const data=await response.json();
//                 console.log(data)
//                 setMovies(data.Search || [])

//             } catch (error) {
//                console.error(error) 
//             }
//         }
//         if(query){
//             fetchmovies();
//         }

//     },[query])
    
//   return (
//     <div>
//       <div className="serachbar">
//       <input type="text" placeholder='search movie' onChange={handlechange} value={query} />
      
//       </div>
//       <div className='moviegrid' style={{display:'flex',gap:'5px',flexWrap:'wrap',justifyContent:'space-evenly'}}>
//         {movies.map((movie,index)=>(
//             <div>
//                 <li key={index}>{movie.Title}</li>
//                 <img src={movie.Poster} alt={movie.Title} />
//                 <p>{movie.Year}</p>
//             </div>
            
//         ))}
//       </div>
      
//     </div>
//   )
//}

    //Math question generator part for PAYAL
const[num1,setNum1]=useState(0);
    const[num2,setNum2]=useState(0);
    const[operator,setOperator]=useState('');
    const[answer,setAnswer]=useState('');
    const[score,setScore]=useState(0);
    const[message,setMessage]=useState('Try It');
    const[digits,setDigits]=useState(1);





    const generateQuestion=()=>{
        let operators=['+','-','*'];
        setNum1(Math.floor(Math.random()*100));
        setNum2(Math.floor(Math.random()*100));
        setOperator(operators[Math.floor(Math.random()*operators.length)]);
        setAnswer('');
        setMessage('try this')
    }

    useEffect(()=>{generateQuestion()},[])

    const checkAnswer=(e)=>{
        e.preventDefault();
        let correctAnswer;
        switch (operator) {
            case '+':
                correctAnswer=num1+num2;
                
                break;
            case '-':
                correctAnswer=num1-num2;
                
                break;
            case '*':
                correctAnswer=num1*num2;
                
                break;
            
            default:
                correctAnswer=0
        }

        if(parseInt(answer)===correctAnswer){
            setMessage('✅'+"  "+"Correct")
            setScore(score+1)
        }else{
            setMessage('❌'+`correct Answer is ${correctAnswer}`)
        }
        setTimeout(generateQuestion,5000)

    }
   
  return (
    <div style={{backgroundColor:'aqua',borderRadius:'10px',textAlign:'center'}}>
      
        <h1>{num1}{operator}{num2}=?</h1>
        <form onSubmit={checkAnswer} >
           <input style={{fontSize:'large',backgroundColor:'whitesmoke',borderRadius:'10px',textAlign:'center'}} required type="number" name="answer" id="anwer" value={answer} onChange={(e)=>setAnswer(e.target.value)} />

           <button style={{fontSize:'large',backgroundColor:'blue',color:'white',borderRadius:'10px'}} type="submit">check</button>

        </form>
        <h1>{message}</h1>
        <h4>Score:{score}</h4>
      
      
      
    </div>
  )
}
export default Home



