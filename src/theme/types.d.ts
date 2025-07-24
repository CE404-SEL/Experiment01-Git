declare module "@site/src/components/GiscusComponent" {
  import { ComponentType } from "react";

  const GiscusComponent: ComponentType;
  export default GiscusComponent;
}

declare module "@theme-original/DocItem" {
  import { ComponentType } from "react";

  const DocItem: ComponentType<any>;
  export default DocItem;
}

declare module "@theme-original/BlogPostItem" {
  import { ComponentType } from "react";

  const BlogPostItem: ComponentType<any>;
  export default BlogPostItem;
}
