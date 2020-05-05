// @flow

import * as React from 'react';
import { Box } from 'react-system';
import { Layout, Code, Stack, Markdown, MenuLink } from '../dev-src/controls';
import type { Doc } from '../dev-src/doc';

type Props = {|
  pageDocs?: $ReadOnlyArray<Doc>,
|};

const App = ({
  Component,
  pageProps,
  router,
}: {
  Component: React.AbstractComponent<{||}>,
  pageProps: Props,
  router: {| pathname: string |},
}) => {
  const doc =
    pageProps.pageDocs?.find(pd => pd.pathname === router.pathname) ?? null;

  return (
    <Layout
      nav={
        <>
          <Box as="h3" mb="0.75rem">
            Examples
          </Box>
          {pageProps.pageDocs
            ?.filter(d => d.order < 100)
            .map(d => (
              <MenuLink key={d.pathname} href={d.pathname}>
                {d.title}
              </MenuLink>
            ))}
          <Box as="h3" mb="0.75rem" mt="2rem">
            Tests
          </Box>
          {pageProps.pageDocs
            ?.filter(d => d.order >= 100)
            .map(d => (
              <MenuLink key={d.pathname} href={d.pathname}>
                {d.title}
              </MenuLink>
            ))}
        </>
      }
    >
      <Stack>
        {doc && <Markdown>{doc.markdown}</Markdown>}
        <Component />
        {doc && <Code>{doc.source}</Code>}
      </Stack>
    </Layout>
  );
};

export default App;
