// @flow

export const ratio = (r: number) => `
  position: relative;
  width: 100%;
  padding-top: ${r * 100}%;
  > * {
    position: absolute;
    left: 0;
    top: 0;
  }
`;
