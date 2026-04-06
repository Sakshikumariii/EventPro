import { useTranslation } from "react-i18next";
import MediaCard from "../../components/ui/MediaCard";

const BlogCard = ({ image, title, description }) => {
  const { t } = useTranslation();

  return (
    <MediaCard
      image={image}
      title={title}
      titleTag="h4"
      description={description}
      bodyClassName="p-6"
      descriptionClassName="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3"
      action={
        <button
          type="button"
          className="bg-black text-white dark:bg-white dark:text-gray-900 px-4 py-2 rounded-md hover:bg-gray-900 dark:hover:bg-gray-200 transition text-sm font-medium"
        >
          {t("read_more_blog")}
        </button>
      }
    />
  );
};

export default BlogCard;
