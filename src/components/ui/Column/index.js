const Column = ({ mod, children }) => {
  let newMod = mod;
  if (Array.isArray(mod)) {
    newMod = mod.join(" ");
  }
  return <div className={newMod}>{children}</div>;
};

export default Column;
