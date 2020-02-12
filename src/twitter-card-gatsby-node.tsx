// const path = require('path');
// const puppeteer = require('puppeteer');
// const fs = require(`fs-extra`);
// const { createFileNode: baseCreateFileNode } = require(`gatsby-source-filesystem/create-file-node`);

// const postToImage = require('./src/postToImage').default;
// /*
//  * This is a bit hacky, but lets us create a Gatsby file node programmatically.
//  */
// async function createFileNode(path, createNode, createNodeId, parentNodeId) {
//   const fileNode = await baseCreateFileNode(path, createNodeId);
//   fileNode.parent = parentNodeId;
//   createNode(fileNode, {
//     name: `gatsby-source-filesystem`,
//   });
//   return fileNode;
// }

// exports.onCreateNode = async ({ node, actions, createNodeId, store, cache }) => {
//   const { createNodeField, createNode } = actions;
//   const program = store.getState().program;
//   // We need to store our generated images somewhere that persists
//   // between builds, so let's use Gatsby's cache.
//   const CACHE_DIR = path.resolve(`${program.directory}/.cache/social/`);
//   await fs.ensureDir(CACHE_DIR);
//   // I only care about Mdx nodes
//   if (node.internal.type === `Mdx`) {
//     try {
//       // Generate our image from the node
//       const ogImage = await postToImage(CACHE_DIR, browser, node);
//       // Create the file node for the image
//       const ogImageNode = await createFileNode(ogImage, createNode, createNodeId, node.id);
//       // Attach the image to our Mdx node
//       createNodeField({
//         name: 'socialImage___NODE',
//         node,
//         value: ogImageNode.id,
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   }
// };

// /*
// query($id: String) {
//     post: mdx(fields: { id: { eq: $id } }) {
//         # I've omitted the fields unrelated to the social image
//         fields {
//             socialImage {
//                 childImageSharp {
//                     original {
//                         width
//                         height
//                         src
//                     }
//                 }
//             }
//         }
//     }
// }
// */
