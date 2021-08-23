const Section = ({ mod, children }) => {
  let newMod = mod;
  if (Array.isArray(mod)) {
    newMod = mod.join(" ");
  }
  return <section className={newMod}>{children}</section>;
};

export default Section;
