import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardComponent = ({
  image,
  imageName,
  projectName,
  resumeProject,
  onClick,
  projectDialog,
  nota,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="my-8">
      <CardMedia component="img" height="140" image={image} alt={imageName} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projectName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="text-justify"
        >
          {resumeProject}
          <div className="self-end flex mt-5">
            <span>{nota}</span>
          </div>
        </Typography>
      </CardContent>
      {/* <CardActions className="self-end flex "> */}
      <div className="flex justify-center sm:inset-x-0 sm:bottom-0">
        <button
          className="text-xl text-[#6950dbad] font-semibold m-4 self-end flex  "
          onClick={onClick}
          // {() => {
          //   //   setShowDialogProject1(true);
          //   {setProject3(true);}
          // }}
        >
          Leer más
        </button>
        {projectDialog}
        {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
        {/* </CardActions> */}
      </div>
    </Card>
  );
};

export default CardComponent;

{
  /* <Card sx={{ maxWidth: 345 }} className="my-8">
            <CardMedia
              component="img"
              height="140"
              image={gestion}
              alt="proyecto1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sistema de gestión de proyectos
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
            </CardActions>
          </Card> */
}
