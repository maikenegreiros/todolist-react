import css from "./Layout.module.sass";

export default function Layout(props) {
  return (
    <>
      <header className={css.header}>
        <h1 className={css.title}>Todo App</h1>
      </header>
      {props.children}
    </>
  );
}
