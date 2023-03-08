/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />
declare module '*.vue' {
    import type {DefineComponent} from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare const $copy: (data: string) => void
declare const $error: (error: any, isI18n: boolean = true) => string

declare namespace Intl {
    type Key = 'calendar' | 'collation' | 'currency' | 'numberingSystem' | 'timeZone' | 'unit';

    function supportedValuesOf(input: Key): string[];
}
