import css from "./Table.module.css";
import TableNoData from "./TableNoData";
import TableRow from "./TableRow";

const Table = ({ employees, deleteOnClick }) => {
  return (
    <table className={`${css.dataContainer} table container`}>
      <caption
        style={{
          borderBottomLeftRadius: "6px",
          borderBottomRightRadius: "6px",
        }}
      >
        Showing {employees.length} of {employees.length} records
      </caption>
      <thead>
        <tr>
          <th scope="col" style={{ borderTopLeftRadius: "6px" }}>
            ID
          </th>
          <th scope="col">NAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">PHONE</th>
          <th scope="col">POSITION</th>
          <th scope="col" style={{ borderTopRightRadius: "6px" }}>
            ACTIONS
          </th>
        </tr>
      </thead>
      <tbody>
        {employees.length === 0 ? (
          <TableNoData />
        ) : (
          employees.map((emp, index) => (
            <TableRow
              key={emp.phone}
              data={emp}
              index={index}
              deleteOnClick={deleteOnClick}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
