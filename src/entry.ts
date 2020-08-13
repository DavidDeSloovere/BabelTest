import "./scss/app.scss";

import app from "./script/app";
app.init();

declare var module: any;
if (module.hot) {
  module.hot.accept(function () {
    console.log("🦁 HMR");
  });
}
