import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";
import DepartmentPage from "./pages/DepartmentPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-10 m-8">
        <Routes>
          <Route path="/" element={<EmployeePage />} />
          <Route path="/departments" element={<DepartmentPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
