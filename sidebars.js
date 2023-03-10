/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  learnSidebar: [{ type: 'autogenerated', dirName: 'learn' }],
  apiSidebar: [{ type: 'autogenerated', dirName: 'api' }],

  // learnSidebar: [
  //   {
  //     type: 'category',
  //     label: 'Introduction',
  //     link: { type: "doc", id: 'learn/introduction' },

  //     items: [{ type: 'autogenerated', dirName: 'api' }],
  //   },
  //   'intro',
  //   {
  //     type: 'category',
  //     label: 'Introduction',
  //     items: [{ type: 'autogenerated', dirName: 'learn/introduction' }],
  //   },
  // ],
  // apiSidebar: [
  //   {
  //     type: 'doc',
  //     id: 'api/introduction',
  //     customProps: {
  //       /* props */
  //     },
  //   },
  //   {
  //     type: 'category',
  //     label: 'API Reference',
  //     link: { type: "doc", id: 'apireference-index' },
  //     items: [{ type: 'autogenerated', dirName: 'api' }],
  //   },
  // ],
};

module.exports = sidebars;
