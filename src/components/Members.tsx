import React from "react";

const Members = ({ data }) => {
  return (
    <>
      {data.edges.map(({ node }) => <div>{node.frontmatter.title}</div>)}
    </>
  );
}

export default Members;
