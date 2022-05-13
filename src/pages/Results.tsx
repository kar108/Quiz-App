import { join } from "path";
import React, { useContext } from "react";
import { AppContext } from "../App";
import questions from "../questions.json";
import Chart from "../components/Chart";
import "./Results.css";
import { Typography } from "@mui/material";
import Questions from "../questions.json";


const n=Questions.length;


const Results = () => {
  let CorrectAns=0;
  let WrongAns=0;
  const [appData] = useContext(AppContext);
  const res=questions.map((question,index)=>{return question.answerOptions.map((choice,index)=>{return choice.isCorrect?choice.option:null})});
  const ans = res.map((items)=>{return items.filter((item)=>item!==null)});
  return (
    <div>
      <Typography variant="h3" sx={{ fontSize:25, display:"flex",alignItems:"center",justifyContent:"center",marginTop:"1rem"}}>
      QUIZ - RESULT
      </Typography>
       <div>
         <table>
           <thead>
             <tr>
               <th>Index</th>
               <th>Answer</th>
               <th>Expected-Answer</th>
               <th>Remark</th>
             </tr>
           </thead>
           <tbody>
           {Object.entries(appData.answers).map(([currentIndex, answer]: any) => (
             <tr key={currentIndex}>
               <td>{currentIndex}</td>
               <td>{answer.value}</td>
               <td>{ans[currentIndex-1]}</td>  
               <td>{answer.value!=null?(answer.value==ans[currentIndex-1]?"Correct":"Incorrect"):"Incorrect"}</td>
               <span className="hide">{answer.value==ans[currentIndex-1]?CorrectAns+=1:null}</span>
             </tr>
           ))}
           </tbody>
         </table>
      </div>
      <Chart data={[{name:"CorrectAns",value:CorrectAns},{name:"WrongAns",value:n-CorrectAns}]}/>
    </div>
  );
};


export default Results;