import styles from "../styles/Home.module.css";

interface LayoutProps {
  children: JSX.Element;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Navbar</a>
        <form className={styles.form_inline}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
      {children}
    </>
  );
}
