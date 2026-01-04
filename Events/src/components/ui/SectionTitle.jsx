const SectionTitle = ({ highlight }) => {
  if (!highlight) return null;

  return (
    <h1 className="section-title-main">
      <span className="section-title-highlight">{highlight}</span>
    </h1>
  );
};

export default SectionTitle;
