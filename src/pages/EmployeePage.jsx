import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

export default function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    loadEmployees();
    loadDepartments();
  }, []);

  const loadEmployees = async () => {
    const res = await axios.get("http://localhost:8080/api/employees");
    setEmployees(res.data);
  };

  const loadDepartments = async () => {
    const res = await axios.get("http://localhost:8080/api/departments");
    setDepartments(res.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:8080/api/employees/${id}`);
    loadEmployees();
  };



  return (
    <div>
      <EmployeeForm
        refresh={loadEmployees}
        departments={departments}
        setSearchResult={setSearchResult}
      />

      <EmployeeTable
        employees={searchResult.length > 0 ? searchResult : employees}
        deleteEmployee={deleteEmployee}
      />

      
    </div>
  );
}
