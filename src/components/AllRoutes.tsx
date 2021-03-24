import React, { FC } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const AllRoutes: FC<{
  data: GatsbyTypes.TemplateDefaultQuery;
}> = ({ data }) => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allMdx(filter: {
  //       fileAbsolutePath: { glob: "**/content/**/*"}
  //       frontmatter: { template: { ne: null } }
  //       # fields: { locales: { in: $locale } }
  //     }) {
  //       nodes {
  //         id
  //         url
  //         frontmatter {
  //           title
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <h3>
        All routes component with <code>useStaticQuery</code>
      </h3>
      <p>
        FIXME: this does not work because we cannot neither access page context
        in static queries nor{" "}
        <a href="https://github.com/gatsbyjs/gatsby/discussions/10482">
          pass variables
        </a>{" "}
        to them, so we need to move this query at the page level and pass it
        down to this component
      </p>
      <h3>
        All routes component passing down <code>page query</code>
      </h3>
      <h4>Routes generated from markdown content/*.md files</h4>
      <ol>
        {data.allMdx.nodes.map((node) => (
          <li key={node.id}>
            <Link to={node.url}>url: {node.url}</Link> ({node.frontmatter.title}
            )
          </li>
        ))}
      </ol>
      <h4>Routes generated from pages/*.ts files</h4>
      <ol>
        {data.allFile.nodes.map((node) => (
          <li key={node.id}>
            <Link to={node.url}>url: {node.url}</Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default AllRoutes;
