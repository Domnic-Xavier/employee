export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6 text-lg font-semibold">
      <a href="/" className=" hover:border-b-">Employees</a>
      <a href="/departments" className="hover:underline">Departments</a>
    </nav>
  );
}
