import { useState } from "react";
// DB
import { questionsList } from "../../db/questionsList";
// components
import AnswerResults from "./AnswerResults";
// mui components
import {
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Stepper,
  StepLabel,
  Step,
  Divider,
} from "@mui/material";
import UseTitle from "../hooks/UseTitle";

const HomePage = () => {
  // title
  UseTitle("React Quiz App");
  document.title = "React Quiz App";
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const checkAnswerHandle = ({ isCorrect, answerText }) => {
    if (isCorrect === true) {
      setScore((prevScore) => prevScore + 1);
    }
    if (questionIndex + 1 < questionsList.length) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowScore(true);
    }
  };
  // reset function
  const resetter = () => {
    setShowScore(false);
    setQuestionIndex(0);
    setScore(0);
  };

  if (showScore) {
    return (
      <AnswerResults
        questionIndex={questionIndex}
        setQuestionIndex={setQuestionIndex}
        showScore={showScore}
        setShowScore={setShowScore}
        score={score}
        setScore={setScore}
        resetter={resetter}
        questionsList={questionsList}
      />
    );
  }

  return (
    <>
      <Card
        sx={{
          width: "70vw",
          maxWidth: "70vw",
          height: "78vh",
          margin: "3vh auto",
          // backgroundColor: "#0000003b",
          backgroundImage: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        }}
      >
        <Stepper
          activeStep={questionIndex}
          alternativeLabel
          style={{ paddingTop: "15px" }}
        >
          {questionsList.map((label, index) => (
            <Step key={index}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
        <Divider sx={{ backgroundColor: "#e8e8e8", mt: 2 }} />
        <CardContent>
          <Typography variant="h5" component="h1" sx={{ color: "#fff" }}>
            {questionsList[questionIndex].questionText}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
          {questionsList[questionIndex].answerOptions.map((item, index) => (
            <Box key={index}>
              <Button
                onClick={() =>
                  checkAnswerHandle({
                    isCorrect: item.isCorrect,
                    answerText: item.answerText,
                  })
                }
                variant="outlined"
                sx={{
                  width: "65vw",
                  maxwidth: "65vw",
                  height: "8vh",
                  display: "flex",
                  justifyContent: "flex-start",
                  color: "#fff",
                  margin: "2vh",
                  borderColor: "#ffed00",
                  transition: "0.4s",
                  "&:hover": {
                    borderColor: "#fff",
                    backgroundImage: "linear-gradient(109.6deg,rgb(6, 12, 73)11.2%,rgba(110, 123, 251, 1) 91.1%)",
                    width: "63vw",
                  },
                }}
              >
                {item.answerText}
              </Button>
            </Box>
          ))}
        </CardActions>
      </Card>
    </>
  );
};

export default HomePage;