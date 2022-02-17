import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      [name: string]: string;
    };
  }
}
