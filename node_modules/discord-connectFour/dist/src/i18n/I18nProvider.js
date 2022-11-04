"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nProvider = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class I18nProvider {
    constructor() {
        var _a;
        const workingDirectory = (_a = global.__dirname) !== null && _a !== void 0 ? _a : __dirname;
        const localesPath = path_1.default.join(workingDirectory, '..', '..', '..', 'config', 'locales');
        this.availableLocales = new Map(fs_1.default
            .readdirSync(localesPath)
            .map(file => [path_1.default.basename(file, '.json'), path_1.default.resolve(localesPath, file)]));
    }
    loadFromLocale(locale) {
        let filepath = this.availableLocales.get(locale !== null && locale !== void 0 ? locale : I18nProvider.DEFAULT_LOCALE);
        let loaded = filepath !== undefined;
        if (!loaded && locale && locale.startsWith(I18nProvider.FILEPATH_PREFIX)) {
            filepath = path_1.default.resolve(process.cwd(), locale.slice(I18nProvider.FILEPATH_PREFIX.length));
        }
        try {
            if (filepath) {
                this.localeData = I18nProvider.flatten(JSON.parse(fs_1.default.readFileSync(filepath, 'utf-8')));
                loaded = true;
            }
        }
        catch (e) {
        }
        if (!loaded) {
            this.loadFromLocale(I18nProvider.DEFAULT_LOCALE);
            console.warn(`Cannot load language file ${filepath !== null && filepath !== void 0 ? filepath : locale}. Using default one.`);
        }
    }
    __(key, replacements) {
        if (this.localeData && this.localeData[key]) {
            let message = this.localeData[key];
            if (replacements) {
                Object.entries(replacements).forEach(replacement => {
                    message = message.replace(`{${replacement[0]}}`, replacement[1].toString());
                });
            }
            return message;
        }
        else {
            console.warn(`Cannot find language key ${key}. Using key instead.`);
            return key;
        }
    }
    static flatten(object, objectPath = null, separator = '.') {
        return Object.keys(object).reduce((acc, key) => {
            const newObjectPath = [objectPath, key].filter(Boolean).join(separator);
            return typeof (object === null || object === void 0 ? void 0 : object[key]) === 'object'
                ? Object.assign(Object.assign({}, acc), I18nProvider.flatten(object[key], newObjectPath, separator)) : Object.assign(Object.assign({}, acc), { [newObjectPath]: object[key] });
        }, {});
    }
}
exports.I18nProvider = I18nProvider;
I18nProvider.FILEPATH_PREFIX = 'file:';
I18nProvider.DEFAULT_LOCALE = 'en';
