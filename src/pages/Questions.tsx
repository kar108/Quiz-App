import { useEffect, useState } from "react";
import QuestionCard, { QuestionType } from "../components/QuestionCard";
import questions from "../questions.json";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import { Paper} from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
import AuthLayout from "../components/AuthLayout";

export const TOTAL_QUESTIONS = questions.length;

export const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0].id);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [appData] = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

   function handleNextButtonClick(index: number) {
    if (index === TOTAL_QUESTIONS - 1) {
      navigate("/results");
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  }

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
      </Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
         questions.map(
          (question, index) =>
            currentQuestion === question.id && ( 
              <Box key={question.id}>
                <Paper sx={{height:"50px",width:"500px",padding:"10px 20px" ,display:'flex',alignContent:"center",justifyContent:"space-between",marginBottom:5}}>
                  Question Status:
                  {questions.map((question,index)=> (<Button sx={{backgroundColor:currentQuestion === index+1 ? "yellow":appData.answers[index+1]?.value && appData.answers[index+1].value.length!==0 ? "green":"#34495e",color:"black","&:hover":{backgroundColor:"yellow"}}} onClick={()=>{setCurrentQuestion(index+1);}}>{index+1}</Button>))}
                </Paper>
                <Typography variant="h3">Question: {index + 1}</Typography>
                <Box
                  height="500px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <QuestionCard
                    id={question.id}
                    question={question.question}
                    questionType={question.questionType as QuestionType}
                    answers={question.answerOptions}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      disabled={index === 0}
                      onClick={() => setCurrentQuestion((prev) => prev - 1)}
                    >
                      Previous
                    </Button>

                    <Button onClick={() => handleNextButtonClick(index)}>
                      {index === TOTAL_QUESTIONS - 1 ? "Submit" : "Next"}
                    </Button>
                  </Box>
                </Box>
              </Box>
            )
        )
      )}
    </Box>
  );
};

export default Questions;