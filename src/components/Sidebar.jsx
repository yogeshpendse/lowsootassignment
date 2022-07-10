import { useDash } from "../context/Dashcontext";

export function Sidebar() {
  const { state, dispatch } = useDash();
  function handlemenu(param) {
    dispatch({ type: "setfirst", payload: param });
  }

  return (
    <aside className="sidebar cside">
      <div className="sidebar__primarymenu">
        <button
          onClick={() => handlemenu(1)}
          className={
            state.first === 1
              ? "sidebar__button sidebar__button--selected"
              : "sidebar__button"
          }
        >
          <i className="bi bi-images" />
          <span className="sidebar__hovermessage">Metric Library</span>
        </button>
        <button
          onClick={() => handlemenu(2)}
          className={
            state.first === 2
              ? "sidebar__button sidebar__button--selected"
              : "sidebar__button"
          }
        >
          <i className="bi bi-app-indicator" />
          <span className="sidebar__hovermessage">Visualization Types</span>
        </button>
        <button
          onClick={() => handlemenu(3)}
          className={
            state.first === 3
              ? "sidebar__button sidebar__button--selected"
              : "sidebar__button"
          }
        >
          <i className="bi bi-speedometer" />
          <span className="sidebar__hovermessage">My metrics</span>
        </button>
      </div>
      <button
        onClick={() => handlemenu(4)}
        className={
          state.first === 4
            ? "sidebar__button sidebar__button--selected"
            : "sidebar__button"
        }
      >
        <i className="bi bi-folder-minus" />
        <span className="sidebar__hovermessage">console</span>
      </button>
    </aside>
  );
}
