// @flow

declare module 'next/link' {
  declare export default ({|
    href: string,
    children: React$Node,
    replace?: boolean,
    scroll?: boolean,
    shallow?: boolean,
    passHref?: boolean,
    prefetch?: boolean,
  |}) => React$Node;
}

type ParsedUrlQuery = { [key: string]: string | string[] };
declare module 'next/router' {
  declare export var useRouter: () => {|
    route: string,
    pathname: string,
    query: ParsedUrlQuery,
    asPath: string,
    basePath: string,
  |};
}

declare module 'next/head' {
  declare export default ({|
    children: React$Node,
  |}) => React$Node;
}
