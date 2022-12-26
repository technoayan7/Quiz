// components
import useTitle from "./hooks/UseTitle";
// icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
// mui components
import { Box, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

const AboutUs = () => {
  // title
  useTitle("React Quiz App - About");

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          background-image= "linear-gradient(109.6deg,rgb(174, 181, 251)11.2%,rgba(110, 123, 251, 1) 91.1%)"
          sx={{ margin: "200px auto" }}
        >
          <Box textAlign="center" p={3} >
            <Box>
              <Typography variant="h5">
                Made with <span style={{ color: "#ff6767" }}>❤</span> by{" "}
                <a
                  href="https://parham-ab.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                  style={{ color: "#4ce0ff" }}
                >
                  {" "}
                  Ayan Ahmad
                </a>
              </Typography>
            </Box>
            <Divider sx={{ background: "#fff", width: "40%", margin: "10px auto" }} />
          </Box>
          <ul className="wrapper">
            {/* github */}
            <a
              rel="noopener noreferrer"
              target={"_blank"}
              href="https://github.com/technoayan7"
            >
              <li className="icon github">
                <span className="tooltip">Github</span>
                <span>
                  <GitHubIcon />
                </span>
              </li>
            </a>
            {/* linkedin */}
            <a
              rel="noopener noreferrer"
              target={"_blank"}
              href="https://www.linkedin.com/in/technoayan/"
            >
              <li className="icon linkedin">
                <span className="tooltip">Linkedin</span>
                <span>
                  <LinkedInIcon />
                </span>
              </li>
            </a>
            {/* email */}
            <a rel="noopener noreferrer" href="mailto:ayanahmad7052@gmail.com">
              <li className="icon email">
                <span className="tooltip">Email</span>
                <span>
                  <MailIcon />
                </span>
              </li>
            </a>
            {/* website */}
          </ul>
        </Box>
      </Grid>
    </Container>
  );
};

export default AboutUs;