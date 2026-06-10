import SubHeader from "../components/sub-header";
import BlogList from "../components_blog/blog-list";

export const metadata = {
  title: "Blog & Medical News – Medilo Healthcare",
  description: "Stay up-to-date with our hospital medical articles, research notes, and patient wellness tips.",
};

export default function BlogPage() {
  return (
    <main>
      <SubHeader title="Latest Posts & Articles" currentPage="Blog" />
      <BlogList />
    </main>
  );
}
