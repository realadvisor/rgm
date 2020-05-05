// @flow

declare module 'typography' {
  declare export default class Typography {
    constructor({| googleFonts: $ReadOnlyArray<string> |}): void;
  }
}
