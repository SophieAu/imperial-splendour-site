export const circularModulo = (base: number) => (value: number) =>
  value < 0 ? base + value : value % base;

export const cn = (className?: string | false) => (!!className ? ` ${className}` : '');

export const detectWebpSupport =
  '!function(e){"use strict";function s(s){if(s){var t=e.documentElement;t.classList?t.classList.add("webp"):t.className+=" webp",window.sessionStorage.setItem("webpSupport",!0)}}!function(e){if(window.sessionStorage&&window.sessionStorage.getItem("webpSupport"))s(!0);else{var t=new Image;t.onload=t.onerror=function(){e(2===t.height)},t.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA"}}(s)}(document);';

export const detectNoScript = `!function(b){'use strict';b.addEventListener("DOMContentLoaded",function(){var c=b.getElementsByClassName("noscript");Array.from(c).map(function(a){return a.classList.remove("noscript")})})}(document);`;
