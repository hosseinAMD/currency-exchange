import { MenuItem } from "models/MenuItem";
import t from "i18n";
import { paths } from "router/paths";

export const menuItems: Array<MenuItem> = [
  {
    title: t("currencyConvertor"),
    path: paths.home,
    exact: true,
  },
  {
    title: t("viewConversionHistory"),
    path: paths.history,
  },
];
