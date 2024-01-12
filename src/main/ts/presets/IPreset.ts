import Settings from '../core/Settings';
import {Editor} from 'tinymce';

interface Column {
    text: string;
    value: string;
}

interface Breakpoint {
    text: string;
    value: string;
    preffix: string;
}

interface Alignment {
    text: string;
    value: string;
}

interface Arrangement {
    text: string,
    value: string,
    preffix: string
}

interface IPreset {
    columns: Column[];
    breakpoints: Breakpoint[];
    arrangements: Arrangement[];
    alignments: Alignment[];
    /**
     * Gets style url
     *
     * @return  {string}
     */
    style(): string;
    /**
     * Gets default column
     * @return {string}
     */
    default(): string;
    /**
     * Returns regxp for column class
     *
     * @param {string} columnPreffix
     * @return {RegExp}
     */
    columnClassRegex(columnPreffix: string): RegExp;
    /**
     * Returns regxp for column class
     *
     * @param {string} arrangementPrefix
     * @return {RegExp}
     */
    arrangementClassRegex(arrangementPrefix: string): RegExp;
    /**
     * Builds column class based on prefix and breakpoint
     *
     * @param {string} prefix
     * @param {string} breakpoint
     * @return {string}
     */
    columnClass(prefix: string, breakpoint: string): string;
    /**
     * Builds arrangement class based on arrangement type and location
     *
     * @param {string} arrangement
     * @param {string} location
     * @return {string}
     */
    arrangementClass(arrangement: string, location: string): string;
    /**
     * Check if class is column
     *
     * @param {string} className
     * @return {boolean}
     */
    isColumn(className: string): boolean;
    /**
     * Check if class is arrangement
     *
     * @param {string} className
     * @return {boolean}
     */
    isArrangement(className: string): boolean;
    /**
     * Render container
     *
     * @return {Element}
     */
    renderContainer(): Element;
    /**
     * Render row
     *
     * @return {Element}
     */
    renderRow(): Element;
    /**
     * Render column
     *
     * @return {Element}
     */
    renderColumn(data): Element;
}

type IPresetConstructor = new(settings: Settings, editor: Editor) => IPreset;

declare var IPreset: IPresetConstructor;

export default IPreset;
export {Column, Breakpoint, Alignment, Arrangement};