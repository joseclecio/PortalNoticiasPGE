import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Usuarios";
import Noticias from "./pages/Noticias";
import AddUser from "./pages/AddUsuario";
import EditUser from "./pages/EditUsuario";
import AddNoticias from "./pages/AddNoticias";
import EditNoticias from "./pages/EditNoticias";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/notices" element={<Noticias />} />
          <Route path="/notices/add" element={<AddNoticias />} />
          <Route path="/notices/edit/:id" element={<EditNoticias />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;