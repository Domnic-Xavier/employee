import { useEffect, useState } from "react";
import axios from "axios";

export default function DepartmentPage() {
  const [departments, setDepartments] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    const res = await axios.get("http://localhost:8080/api/departments");
    setDepartments(res.data);
  };

  const saveDepartment = async () => {
    await axios.post("http://localhost:8080/api/departments", { name });
    setName("");
    loadDepartments();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Departments</h2>

      {/* Department Form */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          value={name}
          className="border-b-2 p-2 rounded w-64"
          placeholder="Department name"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={saveDepartment}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Department List */}
      <table className="w-full">
        <thead>
          <tr className="bg-gray-400 ">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((d) => (
            <tr key={d.id} className="text-center">
              <td className="p-2">{d.id}</td>
              <td className="p-2">{d.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
