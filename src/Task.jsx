export function Task({ text, deleter, id, completed, setCheckedHandler }) {
  //   const [checked, setChecked] = useState(false);
  //   function setCheckedHandler() {
  //     setChecked(!checked);
  //   }
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
      <button onClick={() => deleter(id)} data-button-delete>
        Delete
      </button>
    </li>
  );
}