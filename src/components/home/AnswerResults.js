// DB
import { questionsList } from "../../db/questionsList";
// icons
import ReplayIcon from "@mui/icons-material/Replay";
// mui components
import { Box } from "@mui/system";
import {
  IconButton,
  Typography,
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import UseTitle from "../hooks/UseTitle";

const AnswerResults = ({ score, resetter }) => {
  // title
  UseTitle("Results");

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 800,
        border: "solid 1px",
        borderRadius: "10px",
        // background: "#242526",
        backgroundImage: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        margin: "30px auto",
        overflow: "auto",
      }}
      component="nav"
      aria-labelledby="questions"
      subheader={
        <ListSubheader
          component="div"
          id="answerLists"
          style={{
            fontSize: "18px",
            height: "8vh",
            // backgroundColor: "#5d687633",
            backgroundImage: "linear-gradient(to right top,#0b0537,#1a1362,#36198f,#581bbd,#8012eb",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Result : You Answered {score} out of {questionsList.length}
          <IconButton
            color="info"
            aria-label="replay"
            component="label"
            onClick={resetter}
            size="small"
          >
            <ReplayIcon />
          </IconButton>
        </ListSubheader>
      }
    >
      {questionsList.map((item, index) => (
        <div key={index}>
          <ListItemButton>
            <ListItemIcon
              sx={{ color: "#fff", display: "flex", alignItems: "center" }}
            >
              <Typography variant="body2" noWrap sx={{ fontSize: "14px" }}>
                {item.questionText}
              </Typography>
            </ListItemIcon>
            <ListItemText primary={item.answerText} fontWeight="normal" />
          </ListItemButton>
          {item.answerOptions.map((answers, answerIndex) => (
            <List component="div" disablePadding key={answerIndex}>
              <Box sx={{ pl: 5 }}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "15px" }}
                  className={answers.isCorrect ? "trueAnswer" : "falseAnswer"}
                >
                  {answers.answerText}
                </Typography>
              </Box>
            </List>
          ))}
        </div>
      ))}
    </List>
  );
};
export default AnswerResults;