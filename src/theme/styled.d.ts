// import original module declarations
import "styled-components";
import theme from "./darkThemeTheme";

type Theme = typeof theme;

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
