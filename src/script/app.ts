import "bootstrap";
import $ from "jquery";

console.log("app js loaded");

const now = new Date().toUTCString();
document.getElementById("placeholder").innerHTML = now;

class App {
  init() {
    console.log("🎉");

    $("#my-toast").toast("show");
  }
}

export default new App();
