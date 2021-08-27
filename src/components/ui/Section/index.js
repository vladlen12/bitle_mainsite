const Section = ({ id, mod, children }) => {
  let newMod = mod;
  if (Array.isArray(mod)) {
    newMod = mod.join(" ");
  }
  return (
    <section id={id} className={newMod}>
      {children}
    </section>
  );
};

export default Section;
