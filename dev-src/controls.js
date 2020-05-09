// @flow
import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Global, css } from '@emotion/core';
import Typography from 'typography';
// $FlowFixMe too many typings
import Highlight, { defaultProps } from 'prism-react-renderer';
import { ratio } from './mixins';
import { GithubIcon } from './icons';

export const Select = (props: {|
  value: string,
  onChange: string => void,
  options: $ReadOnlyArray<string>,
|}) => {
  return (
    // eslint-disable-next-line
    <select value={props.value} onChange={e => props.onChange(e.target.value)}>
      {props.options.map(o => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
};

export const Checkbox = (props: {|
  value: boolean,
  onChange: boolean => void,
  id: string,
  children: React.Node,
|}) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: baseline;
      `}
    >
      <input
        id={props.id}
        type="checkbox"
        checked={props.value}
        onChange={e => props.onChange(e.target.checked)}
      />
      <label
        css={css`
          padding-left: 4px;
        `}
        htmlFor={props.id}
      >
        {props.children}
      </label>
    </div>
  );
};

export const Stack = (props: {| children: React.Node |}) => {
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 24px;
        > div:not(:first-of-type),
        > pre {
          box-shadow: 0 0 0 2px white, 0 0 0 3px var(--secondary-color),
            0 0 0 5px white, 0 0 0 6px var(--secondary-color);
        }
      `}
    >
      {props.children}
    </div>
  );
};

export const Info = (props: {| children: React.Node |}) => {
  return (
    <div
      css={css`
        padding: 8px;
        background-color: #fafafa;
      `}
    >
      {props.children}&#8203;
    </div>
  );
};

export const Ratio = (props: {| value: number, children: React.Node |}) => {
  return (
    <div
      css={css`
        ${ratio(props.value)}
      `}
    >
      {props.children}
    </div>
  );
};

export const Code = React.memo<{| children: string |}>(props => {
  return (
    <div
      css={css`
        pre[class*='language-'],
        code[class*='language-'] {
          color: #d4d4d4;
          font-size: 0.8rem;
          text-shadow: none;
          font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          direction: ltr;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          line-height: 1.5;
          -moz-tab-size: 4;
          -o-tab-size: 4;
          tab-size: 4;
          -webkit-hyphens: none;
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
        }

        pre[class*='language-']::selection,
        code[class*='language-']::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          pre[class*='language-'],
          code[class*='language-'] {
            text-shadow: none;
          }
        }

        pre[class*='language-'] {
          padding: 1em;
          margin: 0;
          overflow: auto;
          background: #1e1e1e;
        }

        :not(pre) > code[class*='language-'] {
          padding: 0.1em 0.3em;
          border-radius: 0.3em;
          color: #db4c69;
          background: #f9f2f4;
        }

        .namespace {
          opacity: 0.7;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: #6a9955;
        }

        .token.punctuation {
          color: #d4d4d4;
        }

        .token.property,
        .token.tag,
        .token.boolean,
        .token.number,
        .token.constant,
        .token.symbol,
        .token.deleted {
          color: #b5cea8;
        }

        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
          color: #7dd823;
        }

        .token.operator,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .style .token.string {
          color: #d4d4d4;
          background: #1e1e1e;
        }

        .token.atrule,
        .token.attr-value,
        .token.keyword {
          color: #ff4d00;
        }

        .token.function {
          color: #ffe33d;
        }

        .token.regex,
        .token.important,
        .token.variable {
          color: #d16969;
        }

        .token.important,
        .token.bold {
          font-weight: bold;
        }

        .token.italic {
          font-style: italic;
        }

        .token.constant {
          color: #9cdcfe;
        }

        .token.class-name {
          color: #4ec9b0;
        }

        .token.parameter {
          color: #9cdcfe;
        }

        .token.interpolation {
          color: #9cdcfe;
        }

        .token.punctuation.interpolation-punctuation {
          color: #569cd6;
        }

        .token.boolean {
          color: #569cd6;
        }

        .token.property {
          color: #9cdcfe;
        }

        .token.selector {
          color: #d7ba7d;
        }

        .token.tag {
          color: #ff5bd7;
        }

        .token.attr-name {
          color: #9cdcfe;
        }

        .token.attr-value {
          color: #ce9178;
        }

        .token.entity {
          color: #4ec9b0;
          cursor: unset;
        }

        .token.namespace {
          color: #4ec9b0;
        }

        .token-line {
          min-height: 12px;
        }

        pre[class*='language-javascript'],
        code[class*='language-javascript'] {
          color: #4ec9b0;
        }

        pre[class*='language-css'],
        code[class*='language-css'] {
          color: #ce9178;
        }

        pre[class*='language-html'],
        code[class*='language-html'] {
          color: #d4d4d4;
        }

        .language-html .token.punctuation {
          color: #808080;
        }
        /*********************************************************
* Line highlighting
*/
        pre[data-line] {
          position: relative;
        }

        pre[class*='language-'] > code[class*='language-'] {
          position: relative;
          z-index: 1;
        }

        .line-highlight {
          position: absolute;
          left: 0;
          right: 0;
          padding: inherit 0;
          margin-top: 1em;
          background: #f7ebc6;
          box-shadow: inset 5px 0 0 #f7d87c;
          z-index: 0;
          pointer-events: none;
          line-height: inherit;
          white-space: pre;
        }
      `}
    >
      <Highlight
        {...defaultProps}
        code={props.children}
        language="jsx"
        theme={undefined}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
});

export const Layout = (props: {| children: React.Node, nav: React.Node |}) => {
  const typography = React.useMemo(
    () =>
      new Typography({
        googleFonts: [],
      }),
    [],
  );

  const strTypography = typography
    .toString()
    .replace(/:first-child/g, ':first-of-type');

  return (
    <>
      <Head>
        <title>RGM - tiny react google map library</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <Link href="/favicon.ico" passHref>
          <link rel="shortcut icon" />
        </Link>
      </Head>
      <Global
        styles={css`
          :root {
            --primary-color: #333;
            --secondary-color: #666;

            --layout-border: 1px solid var(--primary-color);
            --font-size: 16px;

            @media only screen and (max-width: 640px) {
              --none-on-mobile: none;
              --font-size: 14px;
            }
          }

          body,
          html {
            margin: 0;
            height: 100%;
            color: var(--primary-color);
            font-size: var(--font-size);
          }

          html {
            -webkit-font-smoothing: antialiased;
            box-sizing: border-box;
          }

          html {
            overflow-y: scroll;
          }

          /* dont allow google to change fonts inside map */
          .gm-style {
            font: unset;
            font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI',
              'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
              'Droid Sans', 'Helvetica Neue', sans-serif;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
            min-width: 0;
          }

          #__next {
            min-height: 100%;
            display: flex;
          }

          ${strTypography}

          a {
            color: unset;
          }

          blockquote {
            margin: 0 auto;
            padding: 0.1rem 1rem;
            border-left: 5px solid #eee;
          }

          blockquote:before {
            display: none;
          }

          blockquote:not(:first-of-type) {
            margin-top: 0.75em;
          }
        `}
      />
      <div
        css={css`
      width: 100%;
      max-width: 1024px;
      margin: 0 auto;

      display grid;
      grid-gap: 2px;
      grid-template-rows: auto 1fr;
      grid-template-areas:
                   "head head"
                   "main nav"
                   "pad pad";
      grid-template-columns: 1fr minmax(240px, auto);
      grid-template-rows: auto 1fr auto;

      @media only screen and (max-width: 640px) {
        grid-template-areas:
                   "head"
                   "main"
                   "nav"
                   "pad";
        grid-template-rows: auto 1fr auto auto;
        grid-template-columns: 1fr;
      }
    `}
      >
        <header
          css={css`
            border-bottom: var(--layout-border);
            grid-area: head;
            display: flex;
            align-items: center;

            padding: 20px 0px 12px 0px;

            @media only screen and (max-width: 1048px) {
              padding: 16px 8px 12px 8px;
            }

            @media only screen and (max-width: 640px) {
              padding: 12px 8px 8px 8px;
            }
          `}
        >
          <div
            css={css`
              margin-right: auto;
              display: flex;
              align-items: baseline;
            `}
          >
            <Link href={'/'} passHref>
              <h1
                css={css`
                  margin-bottom: 0;
                  cursor: pointer;
                `}
              >
                RGM
              </h1>
            </Link>
            <div
              css={css`
                padding-left: 4px;
                font-size: 0.75rem;
              `}
            >
              react google map
            </div>
          </div>

          <a href="https://github.com/realadvisor/rgm">
            <GithubIcon size={32} />
          </a>
        </header>
        <main
          css={css`
            grid-area: main;
            padding: 16px;
            border: var(--layout-border);
            border-left: none;
            border-right: var(--none-on-mobile, var(--layout-border));
          `}
        >
          {props.children}
        </main>
        <nav
          css={css`
            padding: 16px;
            border: var(--layout-border);
            border-right: none;
            border-left: var(--none-on-mobile, var(--layout-border));
            /* clickable on mobile */
            padding-bottom: 48px;
          `}
        >
          {props.nav}
        </nav>
        <div
          css={css`
            grid-area: pad;
            border-top: var(--layout-border);
            text-align: right;
            padding: 4px;
            font-size: 0.5rem;
          `}
        >
          EXAMPLES ARE PROVIDED UNDER THE{' '}
          <a href="https://github.com/realadvisor/rgm/blob/master/LICENSE-EXAMPLES">
            BEER-WARE
          </a>{' '}
          LICENSE
        </div>
      </div>
    </>
  );
};

export const Markdown = (props: {| children: string |}) => {
  return (
    <div
      css={css`
        h1 {
          font-size: 1.5rem;
        }
      `}
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  );
};

export const MenuLink = (props: {| children: React.Node, href: string |}) => {
  const router = useRouter();
  const pathname = router.pathname.replace(router.basePath, '');

  return (
    <div
      css={css`
        line-height: 1.6rem;
      `}
    >
      <span
        css={css`
          visibility: ${pathname === props.href ? 'visible' : 'hidden'};
        `}
      >
        ❯
      </span>{' '}
      <Link href={props.href} passHref>
        <a
          css={
            pathname === props.href
              ? css`
                  color: #000;
                  text-decoration: none;
                `
              : null
          }
        >
          {props.children}
        </a>
      </Link>
    </div>
  );
};
