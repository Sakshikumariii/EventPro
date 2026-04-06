import SectionTitle from "./SectionTitle";

const SectionGrid = ({
  id,
  title,
  className = "",
  sectionClassName = "py-16 md:py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300",
  containerClassName = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  titleWrapperClassName = "text-center mb-12",
  gridClassName = "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
  children,
}) => {
  return (
    <section id={id} className={`${sectionClassName} ${className}`.trim()}>
      <div className={containerClassName}>
        <div className={titleWrapperClassName}>
          <SectionTitle highlight={title} />
        </div>
        <div className={gridClassName}>{children}</div>
      </div>
    </section>
  );
};

export default SectionGrid;
