import { DeleteButton } from "./DeleteButton";

export function Task({ text, deleter, id, completed, setCheckedHandler }) {
  return (
    <li className="list-item" id={id}>
      <label className="list-item-label">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCheckedHandler(id, e.target.checked)}
          data-list-item-checkbox
        />
        <span data-list-item-text>{text}</span>
      </label>
      <DeleteButton deleter={deleter} id={id} />
    </li>
  );
}
