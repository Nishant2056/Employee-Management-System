import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AppTitle from "./components/Title/AppTitle.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Table from "./components/Data/Table.jsx";
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

  const [searchText, setSearchText] = useState("");

  const handleOnChange = (textIncoming) => {
    setSearchText(textIncoming);
  };

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchText.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchText.toLowerCase()) ||
      emp.position.toLowerCase().includes(searchText.toLowerCase()) ||
      emp.phone.toLowerCase().includes(searchText.toLowerCase())
  );

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
      <SearchBar
        handleAddRecord={handleAddRecord}
        handleOnChange={handleOnChange}
      ></SearchBar>
      <Table
        employees={filteredEmployees}
        deleteOnClick={handleDeleteRecord}
      ></Table>
    </>
  );
}

export default App;
