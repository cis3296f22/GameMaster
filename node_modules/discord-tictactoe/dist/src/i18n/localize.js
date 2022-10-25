"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const I18nProvider_1 = require("./I18nProvider");
const provider = new I18nProvider_1.I18nProvider();
const loadFromLocale = (locale) => provider.loadFromLocale(locale);
const __ = (id, replacements) => provider.__(id, replacements);
exports.default = { loadFromLocale, __ };
