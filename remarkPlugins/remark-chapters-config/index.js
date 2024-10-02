import { visit } from "unist-util-visit"
import { h } from "hastscript"

// This plugin is just an example! You can handle directives however you please!
export default function plugin() {
  return function (tree) {
    visit(tree, ['textDirective', 'leafDirective', 'containerDirective'], ondirective)
  }

  function ondirective(node) {
    const data = node.data || (node.data = {})
    const hast = h(node.name, node.attributes)

    data.hName = hast.tagName
    data.hProperties = hast.properties
  }
}
