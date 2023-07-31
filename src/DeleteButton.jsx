export function DeleteButton({ deleter, id }) {
  return (
    <>
      <button onClick={() => deleter(id)} data-button-delete>
        Delete
      </button>
    </>
  );
}
