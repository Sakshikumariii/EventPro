import { BLOGS } from "../../constants/constant";
import BlogCard from "./BlogCard";
import SectionTitle from "../../components/ui/SectionTitle";


const Blog = () => {
  return (
    <section id="blog" className="py-8 md:py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-12">
          <SectionTitle  highlight="Blog" />
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOGS.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
