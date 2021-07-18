import 'styled-components';
import { MyTheme } from '.'

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}