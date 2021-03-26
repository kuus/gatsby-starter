const visit = require("unist-util-visit");
const { JSDOM } = require("jsdom");
const fromDom = require("hast-util-from-dom");

module.exports = ({ markdownAST }) => {
  visit(markdownAST, "html", (node) => {
    // console.log("node.value", node.value)
    if (!matchesGatsbyImage(node.value)) {
      return;
    }

    const { document } = new JSDOM(node.value).window;
    const tree = fromDom(document.body.firstChild);

    node.type = "jsx";
    node.data = {
      hName: tree.tagName,
      hProperties: tree.properties,
      hChildren: tree.children,
    };
  });

  return markdownAST;
};

// support gatsby-remote-images-anywhere
const matchesGatsbyImage = (rawHTML) =>
  rawHTML.match(/class=['"]gatsby-resp-image/) || rawHTML.match(/class=['"]gria-image-wrapper/);
