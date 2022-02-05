import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<PrivateLayout />}> */}
          <Route path="" element={<Index />} />
          {/* <Route path="/usuarios" element={<IndexUsuarios />} /> */}
          {/* <Route path="/usuarios/editar/:_id" element={<EditarUsuario />} /> */}
          {/* <Route path="/proyectos" element={<IndexProyectos />} /> */}
          {/* <Route path="/proyectos/nuevo" element={<NuevoProyecto />} /> */}
          {/* </Route> */}
          {/* <Route path="/auth" element={<AuthLayout />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
