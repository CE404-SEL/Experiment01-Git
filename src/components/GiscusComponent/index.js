import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <div>
      <Giscus
        repo="CE404-SEL/Experiment01-Git"
        repoId="R_kgDOPNVkMQ"
        category="Announcements"
        categoryId="DIC_kwDOPNVkMc4CtW2L"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === "dark" ? "dark" : "light"}
        lang="fa"
        loading="lazy"
      />
    </div>
  );
}
