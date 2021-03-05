import React from "react";
import { StaticQuery, graphql } from "gatsby";

export default function Members({ props }) {
  return (
    <StaticQuery<GatsbyTypes.MembersQueryQuery>
      query={graphql`
        query MembersQuery {
          allMdx(filter: {fileAbsolutePath: {glob: "**/members/**/*"}}) {
            edges {
              node {
                slug
                frontmatter {
                  title
                  logos {
                    logo {
                      relativePath
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <>{console.log(data)}</>
      )}
    />
  );
}
