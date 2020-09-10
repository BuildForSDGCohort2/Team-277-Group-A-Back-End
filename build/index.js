"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

const startApp = async () => {
  const header = document.querySelector('[data-app-name]');
  if (!header) return;
  const programName = await (0, _app.default)();
  header.textContent = programName;
};

document.addEventListener('DOMContentLoaded', startApp);