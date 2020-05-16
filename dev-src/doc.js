// @flow

import fs from 'fs';
import path from 'path';
import { Remarkable } from 'remarkable';

export type Doc = {|
  title: string,
  source: string,
  pathname: string,
  markdown: string,
  order: number,
|};

export type StaticProps = {|
  props: {| pageDocs: $ReadOnlyArray<Doc> |},
|};

export const getStaticProps = (): StaticProps => {
  const md = new Remarkable('full', { html: true });

  const files = fs.readdirSync(path.join(process.cwd(), 'pages'));

  const pageDocs = files
    .filter(name => !name.startsWith('_'))
    .map(name => {
      let source = fs.readFileSync(
        path.join(process.cwd(), 'pages', name),
        'utf-8',
      );

      // Drop everything after getStaticProps
      source = source.slice(0, source.indexOf('export const getStaticProps'));

      const reComments = /\/\*\*[\s\S]+?\*\//g;
      const comments = source.match(reComments);
      source = source.replace(reComments, '');
      source = source.replace(/\n{2,}/g, '\n\n');

      let comment = comments?.join('\n') ?? '';

      comment = comment
        .replace(/\*\//g, '')
        .replace(/\/\*\*/g, '')
        .replace(/^\s*?\*[\s]*?/gm, '');

      const markdown = md.render(comment);

      const parsed = md.parse(comment, { references: {} });

      const headerOpenIdx = parsed.findIndex(p => p.type === 'heading_open');

      const meta = parsed.find(p => p.type === 'htmlblock')?.content ?? null;

      let order = 0;

      if (meta != null) {
        try {
          const obj = JSON.parse(
            meta.replace(/<!--\s*/g, '').replace(/\s*-->/g, ''),
          );
          order = obj.order ?? order;
        } catch {
          // do nothing
        }
      }

      const title: string =
        headerOpenIdx === -1
          ? '[undefined]'
          : parsed[headerOpenIdx + 1].content ?? '';

      const pathend = name.split('.')[0];

      return {
        title,
        order,
        source,
        pathname: `/${pathend === 'index' ? '' : pathend}`,
        markdown,
      };
    });

  pageDocs.sort((a, b) => Math.sign(a.order - b.order));

  return { props: { pageDocs } };
};
