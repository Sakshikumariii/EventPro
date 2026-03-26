const MediaCard = ({
  image,
  title,
  description,
  action,
  footer,
  titleTag: TitleTag = "h3",
  className = "",
  imageClassName = "w-full h-56 object-cover",
  bodyClassName = "p-5",
  descriptionClassName = "text-gray-600 dark:text-gray-300 text-sm mt-2",
}) => {
  return (
    <article
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ${className}`.trim()}
    >
      <img src={image} alt={title} loading="lazy" className={imageClassName} />
      <div className={bodyClassName}>
        <TitleTag className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </TitleTag>
        {description ? <p className={descriptionClassName}>{description}</p> : null}
        {footer}
        {action}
      </div>
    </article>
  );
};

export default MediaCard;
