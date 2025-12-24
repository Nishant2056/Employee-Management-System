const TableRow = ({ data, index, deleteOnClick }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td>{data.position}</td>
      <td className="d-flex justify-content-between gap-2">
        <button type="button" className="btn btn-primary">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            deleteOnClick(data.phone);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
