export default function EachToDo({ desc, status, deleteToDo, id, toggleToDo }) {
  return (
    <>
      <li className="list-item">
        <label className="list-item-label">
          <input type="checkbox" data-list-item-checkbox checked={status} onChange={(e) => toggleToDo(id, e.target.checked)} />
          <span data-list-item-text>{desc}</span>
        </label>
        <button data-button-delete onClick={() => deleteToDo(id)}>
          Delete
        </button>
      </li>
    </>
  );
}
