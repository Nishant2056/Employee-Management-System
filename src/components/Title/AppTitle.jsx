import css from "./AppTitle.module.css";

const AppTitle = () => {
  return (
    <div className={`${css.titleWrapper} container`}>
      <h1>Employee Management System</h1>
      <p>Manage Employee Records with Nishant Bhurtel</p>
    </div>
  );
};

export default AppTitle;
