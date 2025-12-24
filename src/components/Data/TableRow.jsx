import { useRef } from "react";

const TableRow = ({ data, index, deleteOnClick, handleEditRecord }) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const positionRef = useRef(null);
  const closeBtnRef = useRef(null);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedRecord = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      position: positionRef.current.value,
    };
    if (handleEditRecord) {
      handleEditRecord(data.phone, updatedRecord);
    }
    closeBtnRef.current.click();
  };

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td>{data.position}</td>
      <td className="d-flex justify-content-between gap-2">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={`#editModal-${index}`}
        >
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

        <div
          className="modal fade"
          id={`editModal-${index}`}
          tabIndex="-1"
          aria-labelledby={`editModalLabel-${index}`}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id={`editModalLabel-${index}`}>
                  Edit Records
                </h3>
                <button
                  type="button"
                  className="btn-close w-auto"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  ref={closeBtnRef}
                />
              </div>
              <div className="modal-body">
                <form onSubmit={handleEditSubmit} key={JSON.stringify(data)}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={nameRef}
                      defaultValue={data.name}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      ref={emailRef}
                      defaultValue={data.email}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="number"
                      className="form-control"
                      ref={phoneRef}
                      defaultValue={data.phone}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Position</label>
                    <input
                      type="text"
                      className="form-control"
                      ref={positionRef}
                      defaultValue={data.position}
                    />
                  </div>
                  <div className="modal-footer d-flex justify-content-around">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button className="btn btn-primary">Update Record</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
