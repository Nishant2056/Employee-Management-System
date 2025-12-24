import { IoIosAdd } from "react-icons/io";
import css from "./SearchBar.module.css";
import { useRef } from "react";

const SearchBar = ({ handleAddRecord }) => {
  const closeBtnRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const positionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      position: positionRef.current.value,
    };

    handleAddRecord(newRecord);
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    positionRef.current.value = "";
    closeBtnRef.current.click();
  };

  return (
    <div className={`${css.searchBarContainer} container d-flex gap-3`}>
      {/* <input type="text" placeholder="Search by Name, email or position" /> */}

      <div className="input-group flex-nowrap">
        <input type="text" placeholder="Search by Name, email or position" />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <IoIosAdd />
        Add New Record
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                Register New Record
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
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" ref={nameRef} />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>

                  <input type="email" className="form-control" ref={emailRef} />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Phone
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    ref={phoneRef}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Position
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    ref={positionRef}
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
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
