const Row = ({ id, onClick, mod, children }) => {
  let newMod = mod;
  if (Array.isArray(mod)) {
    newMod = mod.join(" ");
  }
  return (
    <div id={id} onClick={onClick} className={newMod}>
      {children}
    </div>
  );
};

export default Row;
