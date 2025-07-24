import BlogPostItem from "@theme-original/BlogPostItem";
import GiscusComponent from "@site/src/components/GiscusComponent";

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <div
        style={{
          marginTop: "2rem",
          paddingTop: "2rem",
          borderTop: "1px solid var(--ifm-color-emphasis-300)",
        }}
      >
        <h3>نظرات</h3>
        <GiscusComponent />
      </div>
    </>
  );
}
