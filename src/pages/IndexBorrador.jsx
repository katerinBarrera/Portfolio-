import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import uno from "../images/uno.svg";
import dos from "../images/dos.svg";
import tailwindcss from "../images/tailwindcss.svg";
import css3 from "../images/css3.svg";
import giticon from "../images/giticon.svg";
import html1 from "../images/html1.svg";
import java from "../images/java.svg";
import javascript from "../images/javascript.svg";
import nodejs from "../images/nodejs.svg";
import react from "../images/react.svg";
import visualstudiocode from "../images/visualstudiocode.svg";
import mongodb from "../images/mongodb.svg";
import montañas from "../images/montañas.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import Slide from "@mui/material/Slide";

const Index = () => {
  // contain function of projects and cards
  const FullCard = () => {
    const [project1, setProject1] = useState(false);
    const [project2, setProject2] = useState(false);
    const [project3, setProject3] = useState(false);

    // contains all projects information
    const Projects = ({}) => {
      const Project1 = () => {
        return <div>hola soy el primer proyecto</div>;
      };
      const Project2 = () => {
        return <div>hola soy el segundo proyecto</div>;
      };

      const Project3 = () => {
        return <div>hola soy el tercer proyecto</div>;
      };

      return (
        <div>
          {project1 === true ? (
            <Project1 />
          ) : project2 === true ? (
            <Project2 />
          ) : project3 === true ? (
            <Project3 />
          ) : (
            <></>
          )}
        </div>
      );
    };
    // contains all the card of every project, and the principal dialog, it shows the projects informations
    const CardSituation = () => {
      const [showDialogProject1, setShowDialogProject1] = useState(false);
      // principal dialog
      const ProjectDialog = () => {
        const Transition = React.forwardRef(function Transition(props, ref) {
          return <Slide direction="up" ref={ref} {...props} />;
        });

        const handleClose = () => {
          setShowDialogProject1(false);
          setProject1(false);
          setProject2(false);
          setProject3(false);
        };

        if (project1 === true || project2 === true || project3 === true) {
          setShowDialogProject1(true);
        } else {
          setShowDialogProject1(false);
        }

        return (
          <Dialog
            onClose={handleClose}
            open={showDialogProject1}
            aria-describedby="alert-dialog-slide-description"
            TransitionComponent={Transition}
            keepMounted
          >
            <div className="box-border h-max w-max  items-center ">
              <Projects />
            </div>
          </Dialog>
        );
      };

      return (
        <div className="flex place-content-around">
          <Card sx={{ maxWidth: 345 }} className="my-8">
            <CardMedia
              component="img"
              height="140"
              image={montañas}
              alt="montaña"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Project 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Breve resumen del majestuoso proyecto <br />
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <button
                className="text-m text-[#6950dbad] font-semibold m-4"
                onClick={() => {
                  //   setShowDialogProject1(true);
                  setProject1(true);
                }}
              >
                Leer más
              </button>
              <ProjectDialog />
              {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }} className="my-8">
            <CardMedia
              component="img"
              height="140"
              image={montañas}
              alt="montaña"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Project 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Breve resumen del majestuoso proyecto <br />
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <button
                className="text-m text-[#6950dbad] font-semibold m-4"
                onClick={() => {
                  //   setShowDialogProject1(true);
                  setProject2(true);
                }}
              >
                Leer más
              </button>
              <ProjectDialog />
              {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }} className="my-8">
            <CardMedia
              component="img"
              height="140"
              image={montañas}
              alt="montaña"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Project 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Breve resumen del majestuoso proyecto <br />
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <button
                className="text-m text-[#6950dbad] font-semibold m-4"
                onClick={() => {
                  //   setShowDialogProject1(true);
                  setProject3(true);
                }}
              >
                Leer más
              </button>
              <ProjectDialog />
              {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
        </div>
      );
    };

    return (
      <div>
        <CardSituation />
      </div>
    );
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      {/* ----------------------body------------- */}
      <div className="flex flex-col">
        {/* -------------first part-------------- */}
        <div className=" flex items-center">
          <img
            src={uno}
            className="p-4 ml-6 my-4 w-auto h-auto"
            alt="welcome"
          />
          <div className="m-4 ">
            <span className="text-gray-700 text-4xl font-extrabold">
              HOLAAAAAAAAAAA SOY KATERINN <br /> AQUÍ PONGO LO SE ME DE LA
              GANAAAA
            </span>
          </div>
        </div>
        {/* ------------- second part-------------- */}
        <div className="border-t-4 mx-10 border-dashed ">
          <div className="my-4">
            <label className="text-4xl font-black">PROJECTS</label>
            <FullCard />
          </div>
        </div>
        {/* ------------- third part-------------- */}
        <div className="border-t-4 mx-10 border-dashed flex  sm:place-content-around ">
          <div className="flex  sm:place-content-around">
            <div className="mt-4">
              <label className="text-4xl font-black ">SKILLS</label>
              {/* -----------2.1------------- */}
              <div className="m-4 flex flex-auto">
                <div className="m-4 flex flex-col  text-center items-center space-y-2">
                  <img
                    className=" w-auto h-20 justify-end"
                    src={react}
                    alt="react"
                  />
                  <label>React</label>
                </div>
                <div className="m-4  flex flex-col text-center items-center space-y-2">
                  <img
                    className=" w-auto h-20 justify-end"
                    src={html1}
                    alt="html5"
                  />
                  <label>HTML5</label>
                </div>
                <div className="m-4 flex flex-col text-center items-center space-y-2">
                  <img
                    className=" w-auto h-20 justify-end"
                    src={css3}
                    alt="css3"
                  />
                  <label>CSS3</label>
                </div>
                <div className="m-4 flex flex-col text-center items-center space-y-2">
                  <img
                    className=" w-auto h-20 justify-end"
                    src={javascript}
                    alt="javascript"
                  />
                  <label>JavaScript</label>
                </div>
                <div className="m-4 flex flex-col text-center items-center space-y-2">
                  <img
                    className=" w-auto h-20 justify-end"
                    src={java}
                    alt="javascript"
                  />
                  <label>Java</label>
                </div>
                <div className="m-4 flex flex-col text-center items-center space-y-2">
                  <img
                    className=" w-auto h-20 justify-end"
                    src={nodejs}
                    alt="nodejs"
                  />
                  <label>Nodejs</label>
                </div>
                {/* <div className="m-4 flex flex-col text-center items-center space-y-2">
                  <i class="fab fa-react text-6xl text-gray-700 p-1 bg-slate-100 h-max w-max border-4 border-double border-gray-300 outline outline-offset-2 outline-[#6C63FF] rounded-full "></i>
                  <label>React</label>
                </div> */}
              </div>
              {/* -----------2.2-------------- */}
              <div className="m-4 flex  flex-auto justify-center">
                <div className="m-4 flex flex-col text-center items-center space-y-2">
                  <img
                    className=" w-auto h-20 justify-end"
                    src={tailwindcss}
                    alt="tailwindcss"
                  />

                  <label>TailwindCSS</label>
                </div>
                <div className="m-4 flex flex-col text-center items-center space-y-2">
                  <img
                    className=" w-auto h-20 justify-end"
                    src={visualstudiocode}
                    alt="visuals"
                  />
                  <label>Visual Studio Code</label>
                </div>
                <div className="m-4 flex flex-col text-center items-center space-y-2">
                  <img
                    className=" w-auto h-20 justify-end"
                    src={giticon}
                    alt="git"
                  />
                  <label>Git</label>
                </div>
                <div className="m-4 flex flex-col text-center items-center space-y-2">
                  <img
                    className=" w-auto h-20 justify-end"
                    src={mongodb}
                    alt="mongodb"
                  />
                  <label>MongoDB</label>
                </div>
                {/* <div className="m-4 flex flex-col text-center items-center space-y-2">
                  <i class="fab fa-react text-6xl text-gray-700 p-1 bg-slate-100 h-max w-max border-4 border-double border-gray-300 outline outline-offset-2 outline-[#6C63FF] rounded-full "></i>
                  <label>React</label>
                </div> */}
              </div>
            </div>
            {/* -------------- code image----------- */}
            <div className="flex ">
              <img
                className=" w-auto h-72 justify-end"
                src={dos}
                alt="coding"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
