import React from "react";
import Typed from "typed.js";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import Slide from "@mui/material/Slide";

const Header = () => {
  const [showDialog, setShowDialog] = useState(false);

  const ContactDialog = () => {
    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });

    const handleClose = () => {
      setShowDialog(false);
    };
    return (
      <Dialog
        onClose={handleClose}
        open={showDialog}
        aria-describedby="alert-dialog-slide-description"
        TransitionComponent={Transition}
        keepMounted
      >
        <div className="box-border h-max w-72  items-center ">
          <div className="bg-[#6950dbad] p-4 flex justify-around items-center">
            <span className="text-2xl text-white font-light">
              Medios de contacto
            </span>
            {/* <button
              onClick={() => {
                setShowDialog(false);
              }}
            >
              <div className="box-border pt-1 px-3 rounded-full transition ease-in-out delay-100  hover:translate-x-2 hover:scale-110  duration-300">
                <i className="fas fa-times text-white text-m"></i>
              </div>
            </button> */}
          </div>
          <div className="flex flex-col text-center space-y-1 p-2 border-x-4 border-b-4  items-center ">
            <label> Whatsapp </label>
            <button
              onClick={() => {
                window.open(
                  "https://api.whatsapp.com/send?phone=+573015532120"
                );
              }}
              className="border-box h-max w-max "
            >
              <i class="fab fa-whatsapp text-[#6950dbad] text-2xl"></i>
            </button>
            <label> Telegram </label>
            <button
              onClick={() => {
                window.open("https://t.me/Katybaor");
              }}
              className="border-box h-max w-max "
            >
              <i class="fab fa-telegram text-[#6950dbad] text-2xl"></i>
            </button>
            <label> Correo</label>
            <button
              onClick={() => {
                window.open(
                  "mailto:katerinbarrera2001@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail"
                );
              }}
              className="border-box h-max w-max "
            >
              <i class="fas fa-mail-bulk text-[#6950dbad] text-2xl "></i>
            </button>
          </div>
        </div>
      </Dialog>
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
        "¡Bienvenido/a a mi <i className='text-[#c0a0c3]'>portafolio</i>!",
        // "Ánimate a <strong>contratarme</strong>!",
      ],
      typeSpeed: 50,
      backSpeed: 50,
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
      <div className="bg-[#c0a0c3] w-screen  ">
        <div className="text-2xl grid place-content-center sm:text-3xl w-screen text-gray-700 font-[Alice] py-6 space-y-3 sm:justify-around sm:flex  ">
          <div className="flex items-center justify-center bg-white box-border h-30 w-max p-6 rounded-md  drop-shadow-lg  ">
            <h2>
              Hola, soy Katerin!
              <br />
              <span style={{ whiteSpace: "pre" }} ref={el}></span>
            </h2>
          </div>
          {/* div buttons on the header */}
          <div className="  flex justify-center sm:justify-end space-x-3  items-center ">
            <button
              title="Contactame"
              onClick={() => {
                setShowDialog(true);
              }}
            >
              <div className="box-border p-4 px-5 rounded-full bg-white transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300">
                <i className="far fa-envelope text-[#c0a0c3]"></i>
              </div>
            </button>
            <button
              title="LinkedIn"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/katerin-barrera-1a233115b/"
                );
              }}
            >
              <div className="box-border p-4 px-5 rounded-full bg-white transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300">
                <i class="fab fa-linkedin-in text-[#c0a0c3]"></i>
              </div>
            </button>
            <button
              title="GitHub"
              onClick={() => {
                window.open("https://github.com/katerinBarrera");
              }}
            >
              <div className="box-border p-4 px-5 rounded-full bg-white transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300">
                <i class="fab fa-github text-[#c0a0c3]"></i>
              </div>
            </button>
          </div>
          <ContactDialog />
        </div>
      </div>
    </div>
  );
};

export default Header;
