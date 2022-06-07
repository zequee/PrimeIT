import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { NewUser, ListUsers, Menu } from "./pages/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<NewUser />} />
            <Route path="/users/" element={<ListUsers />} />
            <Route path="/users/:id_user" element={<ListUsers />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
        <ToastContainer />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
