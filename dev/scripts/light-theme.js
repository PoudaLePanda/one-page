// "use strict";
// !function () {
//     const e = {
//         _scheme: "auto",
//         change: {
//             light: "<i>Activer le mode sombre</i>",
//             dark: "<i>Désactiver le mode sombre</i>"
//         },
//         buttonsTarget: ".theme-switcher",
//         localStorageKey: "picoPreferedColorScheme",
//         init() {
//             this.scheme = this.schemeFromLocalStorage,
//                 this.initSwitchers()
//         },
//         get schemeFromLocalStorage() {
//             return void 0 !== window.localStorage && null !== window.localStorage.getItem(this.localStorageKey) ? window.localStorage.getItem(this.localStorageKey) : this._scheme
//         },
//         get preferedColorScheme() {
//             return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
//         },
//         initSwitchers() {
//             const e = document.querySelectorAll(this.buttonsTarget);
//             e.forEach(e => {
//                 e.addEventListener("click", () => {
//                     "dark" == this.scheme ? this.scheme = "light" : this.scheme = "dark"
//                 }
//                     , !1)
//             }
//             )
//         },
//         addButton(e) {
//             let t = document.createElement(e.tag);
//             t.className = e.class,
//                 document.querySelector(e.target).appendChild(t)
//         },
//         set scheme(e) {
//             "auto" == e ? "dark" == this.preferedColorScheme ? this._scheme = "dark" : this._scheme = "light" : "dark" != e && "light" != e || (this._scheme = e),
//                 this.applyScheme(),
//                 this.schemeToLocalStorage()
//         },
//         get scheme() {
//             return this._scheme
//         },
//         applyScheme() {
//             document.querySelector("html").setAttribute("color-mode", this.scheme);
//             const e = document.querySelectorAll(this.buttonsTarget);
//             e.forEach(e => {
//                 const t = "dark" == this.scheme ? this.change.dark : this.change.light;
//                 e.innerHTML = t,
//                     e.setAttribute("aria-label", t.replace(/<[^>]*>?/gm, ""))
//             }
//             )
//         },
//         schemeToLocalStorage() {
//             void 0 !== window.localStorage && window.localStorage.setItem(this.localStorageKey, this.scheme)
//         }
//     }
//     e.addButton({
//         tag: "BUTTON",
//         class: "button is-primary contrast switcher theme-switcher",
//         target: "body"
//     }),
//         e.init()
// }();
