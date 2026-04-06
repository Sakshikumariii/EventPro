import { BLOGS } from "../../constants/blog.constants";
import BlogCard from "./BlogCard";
import { useTranslation } from "react-i18next";
import SectionGrid from "../../components/ui/SectionGrid";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <SectionGrid id="blog" title={t("blog")} gridClassName="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {BLOGS.map((blog) => (
        <BlogCard
          key={blog.id}
          image={blog.image}
          title={blog.title}
          description={blog.description}
        />
      ))}
    </SectionGrid>
  );
};

export default Blog;
