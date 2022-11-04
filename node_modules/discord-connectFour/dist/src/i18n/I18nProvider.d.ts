export declare class I18nProvider {
    private static readonly FILEPATH_PREFIX;
    private static readonly DEFAULT_LOCALE;
    private availableLocales;
    private localeData?;
    constructor();
    loadFromLocale(locale?: string): void;
    __(key: string, replacements?: Replacements): string;
    private static flatten;
}
export interface Replacements {
    [key: string]: string | number | string[];
}
