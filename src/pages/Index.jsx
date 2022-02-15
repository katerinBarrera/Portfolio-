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
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import gestion from "../images/gestion.png";
import manufactura from "../images/manufactura.png";
import CardComponent from "../components/CardComponent";
import Typed from "typed.js";
import Inicio from "../images/Inicio.png";
import crearproyecto1 from "../images/crearproyecto1.png";
import editarusuario1 from "../images/editarusuario1.png";
import iniciosesion1 from "../images/iniciosesion1.png";
import inscripciones from "../images/inscripciones.png";
import listaproyectos1 from "../images/listaproyectos1.png";
import usuariosproyecto1 from "../images/usuariosproyecto1.png";
import Box from "@mui/material/Box";
import { autocompleteClasses } from "@mui/material";

const Index = () => {
  // contain function of projects and cards
  const FullCard = () => {
    const [project1, setProject1] = useState(false);
    const [project2, setProject2] = useState(false);
    const [project3, setProject3] = useState(false);

    // contains all projects information
    const Projects = ({}) => {
      const Project1 = () => {
        return (
          <div className="p-10 flex flex-col items-center">
            <span className="text-2xl font-semibold m-3 text-center">
              Sistema de gestión de proyectos
            </span>
            <div className="flex flex-col">
              <span>
                La aplicación web fue desplegada en heroku, para la creación de
                esta app se utilizaron diferentes tecnologías, tanto para el
                aplicativo del frontend y del backend.
              </span>
              <label className="text-xl font-medium text-center m-2">
                Vista de aplicación desde la web
              </label>
              <div className="">
                <div className="grid place-content-center text-center space-y-2 text-lg font-medium">
                  <img
                    src={iniciosesion1}
                    className=" w-auto h-auto sm:w-auto sm:h-auto  md:w-auto md:h-max lg:auto lg:h-auto text-center"
                    alt="sesion"
                  />
                  <label>Inicio de sesión </label>
                  <img
                    src={Inicio}
                    className=" w-auto h-auto sm:w-auto sm:h-auto  md:w-auto md:h-max lg:auto lg:h-auto text-center"
                    alt="inicio"
                  />
                  <label>Página principal</label>
                  <img
                    src={inscripciones}
                    className=" w-auto h-auto sm:w-auto sm:h-auto  md:w-auto md:h-max lg:auto lg:h-auto text-center"
                    alt="inscripciones"
                  />
                  <label>Modulo de inscripciones</label>
                  <img
                    src={listaproyectos1}
                    className=" w-auto h-auto sm:w-auto sm:h-auto  md:w-auto md:h-max lg:auto lg:h-auto text-center"
                    alt="listaproyecto"
                  />
                  <label>Listado de proyectos</label>
                  <img
                    src={crearproyecto1}
                    className=" w-auto h-auto sm:w-auto sm:h-auto  md:w-auto md:h-max lg:auto lg:h-auto text-center"
                    alt="crearproyecto"
                  />
                  <label>Creación de proyectos </label>
                  <img
                    src={usuariosproyecto1}
                    className=" w-auto h-auto sm:w-auto sm:h-auto  md:w-auto md:h-max lg:auto lg:h-auto text-center"
                    alt="usuariosp"
                  />
                  <label>Listado de usuarios </label>
                  <img
                    src={editarusuario1}
                    className=" w-auto h-auto sm:w-auto sm:h-auto  md:w-auto md:h-max lg:auto lg:h-auto text-center"
                    alt="usuariosedi"
                  />
                  <label>Editar usuario </label>
                  {/* <img
                    src={Inicio}
                    className=" m-4 w-[320px] h-auto sm:w-[350px] sm:h-auto  md:w-[450px] md:h-auto lg:w-[604px] lg:h-auto text-center"
                    alt="welcome"
                  />
                  <label>Pagina principal</label> */}
                </div>
              </div>
              <div></div>
            </div>
          </div>
        );
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
        // const [fullWidth, setFullWidth] = React.useState(true);
        // const [maxWidth, setMaxWidth] = React.useState("sm");
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
            fullWidth
            maxWidth="lg"
          >
            {/* <div className="box-border h-max w-max  items-center "> */}
            <Projects />
            {/* </div> */}
          </Dialog>
        );
      };

      return (
        <div className="sm:flex sm:place-content-around grid  place-content-center">
          <CardComponent
            image={gestion}
            imageName="proyecto1"
            projectName="Sistema de gestión de proyectos"
            resumeProject="Se propone plantear un modelo de sistema de información que soporte la gestión de proyectos de investigación de una universidad y mejore los procesos que posee, tales como las inscripciones a los proyectos, los avances de estos mismos, la creación de nuevos proyectos, entre otros... "
            onClick={() => {
              setProject1(true);
            }}
            nota="Nota: Proyecto realizado durante programa MINTIC2022"
          />
          <CardComponent
            image={manufactura}
            imageName="proyecto2"
            projectName="Sistema de seguimiento de ventas"
            resumeProject="Se propone analizar, diseñar y construir una aplicación de software que permita realizar el seguimiento de las ventas de un producto y/o servicio en una empresa"
            onClick={() => {
              setProject2(true);
            }}
            nota="Nota: Proyecto realizado durante programa MINTIC2022"
          />
          <CardComponent
            image={montañas}
            imageName="proyecto3"
            projectName="Billetera"
            resumeProject="Proyecto en proceso..."
            onClick={() => {
              setProject3(true);
            }}
          />
          <ProjectDialog />
        </div>
      );
    };

    return (
      <div>
        <CardSituation />
      </div>
    );
  };

  // ---------------------------typed animation----------------------------------------
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "o!",
        "a!",
        // "Ánimate a <strong>contratarme</strong>!",
      ],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
      loopCount: false,
      backDelay: 440,
    };
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);
  //--------------------finish typed animation---------------------------------------
  return (
    <div>
      <div>
        <Header />
      </div>
      {/* ----------------------body------------- */}
      <div className="flex flex-col">
        {/* -------------first part-------------- */}
        <div className=" sm:flex items-center grid place-content-center">
          <div className="grid place-content-center ">
            <img
              src={uno}
              className="p-4 ml-6 my-4 w-[320px] h-auto sm:w-[350px] sm:h-auto  md:w-[450px] md:h-auto lg:w-[604px] lg:h-auto text-center"
              alt="welcome"
            />
          </div>
          <div className="m-4 box-border sm:w-[600px] p-4">
            <span className="text-gray-700 text-xl sm:text-xl lg:text-3xl font-extrabold text-justify m-4">
              !Bienvenid
              <span style={{ whiteSpace: "pre" }} ref={el}></span> ;)
            </span>
            <br />
            <span className="text-justify m-4 pt-3 text-xl">
              Para mí es un placer que estés dispuesto a conocer mi trabajo. Te
              cuento un poco de mí, tengo 20 años, soy tecnóloga, y resido en
              Colombia. Poseo mucha motivación para desarrollar mis habilidades
              y crecer profesionalmente. Échale un vistazo a mis redes, y a mis
              proyectos prácticos, que poco a poco irán mejorando
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
        <div className="border-t-4 mx-10 border-dashed  m-4 ">
          <div className="  grid place-content-center md:flex  sm:place-content-around">
            <div className="mt-4 grid place-content-center">
              <label className="text-4xl font-black ">SKILLS</label>
              {/* -----------2.1------------- */}
              <div className="m-4 sm:flex sm:flex-auto grid place-content-center justify-center">
                <div className="flex items-center">
                  <div className="m-4 flex flex-col text-center items-center space-y-2">
                    <img
                      className=" w-max h-auto sm:w-auto sm:h-20 justify-end"
                      src={giticon}
                      alt="git"
                    />
                    <label>Git</label>
                  </div>
                  <div className="m-4  flex flex-col text-center items-center space-y-2">
                    <img
                      className=" w-max h-auto sm:w-auto sm:h-20 justify-end"
                      src={html1}
                      alt="html5"
                    />
                    <label>HTML5</label>
                  </div>
                  <div className="m-4 flex flex-col text-center items-center space-y-2">
                    <img
                      className=" w-max h-auto sm:w-auto sm:h-20 justify-end"
                      src={css3}
                      alt="css3"
                    />
                    <label>CSS3</label>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="m-4 flex flex-col text-center items-center space-y-2">
                    <img
                      className=" w-max h-auto sm:w-auto sm:h-20 justify-end"
                      src={javascript}
                      alt="javascript"
                    />
                    <label>JavaScript</label>
                  </div>
                  <div className="m-4 flex flex-col text-center items-center space-y-2">
                    <img
                      className=" w-max h-auto sm:w-auto sm:h-20 justify-end"
                      src={java}
                      alt="javascript"
                    />
                    <label>Java</label>
                  </div>
                  <div className="m-4 flex flex-col text-center items-center space-y-2">
                    <img
                      className=" w-max h-auto sm:w-auto sm:h-20 justify-end"
                      src={tailwindcss}
                      alt="tailwindcss"
                    />

                    <label>TailwindCSS</label>
                  </div>
                </div>

                {/* <div className="m-4 flex flex-col text-center items-center space-y-2">
                  <i class="fab fa-react text-6xl text-gray-700 p-1 bg-slate-100 h-max w-max border-4 border-double border-gray-300 outline outline-offset-2 outline-[#6C63FF] rounded-full "></i>
                  <label>React</label>
                </div> */}
              </div>
              {/* -----------2.2-------------- */}
              <div className="m-4  flex-auto sm:flex sm:flex-auto grid place-content-center  items-center">
                <div className="flex items-center">
                  <div className="m-4 flex flex-col text-center items-center space-y-2">
                    <img
                      className=" w-max h-auto sm:w-auto sm:h-20 justify-end"
                      src={visualstudiocode}
                      alt="visuals"
                    />
                    <label>Visual Studio Code</label>
                  </div>
                  <div className="m-4 flex flex-col text-center items-center space-y-2">
                    <img
                      className=" w-max h-auto sm:w-auto sm:h-20 justify-end"
                      src={nodejs}
                      alt="nodejs"
                    />
                    <label>Nodejs</label>
                  </div>
                  <div className="m-4 flex flex-col text-center items-center space-y-2">
                    <img
                      className=" w-max h-auto sm:w-auto sm:h-20 justify-end"
                      src={mongodb}
                      alt="mongodb"
                    />
                    <label>MongoDB</label>
                  </div>
                </div>

                <div className="m-4 flex flex-col  text-center items-center space-y-2">
                  <img
                    className=" w-max h-auto sm:w-auto sm:h-20 justify-end"
                    src={react}
                    alt="react"
                  />
                  <label>React</label>
                </div>

                {/* <div className="m-4 flex flex-col text-center items-center space-y-2">
                  <i class="fab fa-react text-6xl text-gray-700 p-1 bg-slate-100 h-max w-max border-4 border-double border-gray-300 outline outline-offset-2 outline-[#6C63FF] rounded-full "></i>
                  <label>React</label>
                </div> */}
              </div>
            </div>
            {/* -------------- code image----------- */}
            <div className="grid place-content-center ">
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
