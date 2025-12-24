import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AppTitle from "./components/Title/AppTitle.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Table from "./components/Data/Table.jsx";
import AddUserModal from "./components/SearchBar/AddUserModal.jsx";
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState([
    {
      name: "Nishant Bhurtel",
      email: "bhurtelnishant@gmail.com",
      phone: "9825767766",
      position: "Developer",
    },
    {
      name: "Narayan Gyawali",
      email: "narayangyawali@gmail.com",
      phone: "9855754225",
      position: "Designer",
    },
    {
      name: "Sameer Ali",
      email: "sameerali@gmail.com",
      phone: "9825755896",
      position: "QA",
    },
  ]);

  const handleAddRecord = (newRecord) => {
    if (!newRecord.name || !newRecord.email || !newRecord.phone) {
      return;
    }
    const updatedEmployees = [...employees, newRecord];
    setEmployees(updatedEmployees);
  };

  const handleDeleteRecord = (phone) => {
    setEmployees(employees.filter((emp) => emp.phone !== phone));
  };
  return (
    <>
      <AppTitle></AppTitle>
      <SearchBar handleAddRecord={handleAddRecord}></SearchBar>
      <Table employees={employees} deleteOnClick={handleDeleteRecord}></Table>
      <AddUserModal></AddUserModal>
    </>
  );
}

export default App;
