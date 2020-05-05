// @flow

/**
 * <!-- {"order": 1} -->
 *
 * # Main
 *
 * Hello world
 */

export default () => null;

export const getStaticProps = async () => {
  // The best is to place this method at _app.js but this doesn't work now
  const doc = await import('../dev-src/doc');
  return doc.getStaticProps();
};
