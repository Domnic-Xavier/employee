import { useState } from "react";
import axios from "axios";

export default function EmployeeForm({ refresh, departments, setSearchResult }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [searchId, setSearchId] = useState(""); 

  const saveEmployee = async () => {
    await axios.post("http://localhost:8080/api/employees", {
      name,
      email,
      department: { id: departmentId },
    });

    setName("");
    setEmail("");
    setDepartmentId("");

    refresh();
  };

  const searchEmployee = async () => {
    if (!searchId) {
      alert("Enter Employee ID");
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:8080/api/employees/${searchId}`
      );
      setSearchResult([res.data]); // send searched result to parent table
    } catch (e) {
      alert("Employee not found!");
      setSearchResult([]);
    }
  };

  return (
    <div className="mb-6 p-4 rounded bg-gray-50 flex flex-col gap-4">
      <div className="flex justify-between me-5 mb-5">
      <h3 className="text-xl font-semibold mb-3">Employee Details</h3>

      <div className="flex gap-4 items-center">
        <input
          type="text"
          className="border p-2 rounded-full w-60 hover:outline-blue-600 border-md"
          placeholder="Search"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />

        <button
          onClick={searchEmployee}
          className="bg-blue-600 text-white px-4 py-2 rounded-full"
        >
          Search
        </button>
      </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        <input
          type="text"
          className="border-b-2 p-2 rounded w-60"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          className="border-b-2 p-2 rounded w-60"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select
          className="border-b-2 p-2 rounded w-60"
          value={departmentId}
          onChange={(e) => setDepartmentId(e.target.value)}
        >
          <option value="">Select Department</option>
          {departments.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>

        <button
          onClick={saveEmployee}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}
