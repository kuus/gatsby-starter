import React from "react";
import styled from "styled-components";

const List = styled.div`
  border: 1px solid green;
`

const Item = styled.div`
  display: inline-block;
  border: 1px solid blue;
  padding: 10px;
`

const Members = ({ data }) => {
  return (
    <List>
      {data.edges.map(({ node }) => <Item>{node.frontmatter.title}</Item>)}
    </List>
  );
}

export default Members;
