import { darken, lighten} from 'polished';

const primary = '#49265c';
const secondary = '#ff8b0d';
const error = '#f64c75';
const info = '#3b9eff';
const warn = '#fafa11';
const success = '#008300'

export default {
  primary,
  primaryDark: `${darken(0.1, primary)}`,
  primaryLight: `${lighten(0.1, primary)}`,
  secondary,
  secondaryLight: `${lighten(0.1, secondary)}`,
  secondaryDark: `${darken(0.1, secondary)}`,
  error,
}
