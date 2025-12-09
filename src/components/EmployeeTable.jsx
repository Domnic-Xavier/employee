// import DeleteIcon from "@mui/icons-material/Delete";

export default function EmployeeTable({ employees, deleteEmployee }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-gray-400">
          <th className="p-2">ID</th>
          <th className="p-2">Name</th>
          <th className="p-2">Email</th>
          <th className="p-2">Department</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id} className="text-center">
            <td className="p-2">{emp.id}</td>
            <td className="p-2">{emp.name}</td>
            <td className="p-2">{emp.email}</td>
            <td className="p-2">{emp.department?.name}</td>

            <td className="p-2">
              <button
                className="px-2 py-1 rounded bg-red-700 text-white hover:bg-red-700"
                onClick={() => deleteEmployee(emp.id)}
              >
                {/* <DeleteIcon className="text-red-600" /> */}
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
