import { Editor } from 'tinymce';
import Settings from '../core/Settings';
import IPreset, { Breakpoint, Column, Alignment, Arrangement } from './IPreset';

export default class Bootstrap5 implements IPreset {

    public readonly columns: Column[] = [
        {text: '1', value: '1'},
        {text: '2', value: '2'},
        {text: '3', value: '3'},
        {text: '4', value: '4'},
        {text: '5', value: '5'},
        {text: '6', value: '6'},
        {text: '7', value: '7'},
        {text: '8', value: '8'},
        {text: '9', value: '9'},
        {text: '10', value: '10'},
        {text: '11', value: '11'},
        {text: '12', value: '12'}
    ];

    public readonly breakpoints: Breakpoint[] = [
        {text: 'Small', value: 'small', preffix: 'sm'},
        {text: 'Medium', value: 'medium', preffix: 'md'},
        {text: 'Large', value: 'large', preffix: 'lg'},
        {text: 'Extra large', value: 'extra_large', preffix: 'xl'},
    ];
    
    public readonly arrangements: Arrangement[] = [
        {text: "Justify Content", value: "justify_content", preffix: "justify-content"},
        {text: "Align Items", value: "align_items", preffix: "align-items"},
    ];
    
    public readonly alignments: Alignment[] = [
        {text: "Start", value: "start"},
        {text: "End", value: "end"},
        {text: "Center", value: "center"},
        {text: "Between", value: "between"},
        {text: "Arround", value: "arround"},
        {text: "Baseline (Align Items Only)", value: "baseline"},
        {text: "Stretch  (Align Items Only)", value: "stretch"},
    ];

    constructor(protected settings: Settings, protected editor: Editor) {}

    public arrangementClass = (arrangement: string, location: string): string => `bs-${arrangement}-${location}`;

    /**
     * Gets style url
     *
     * @return  {string}
     */
    public style = (): string => 'bootstrap5.css';

    /**
     * Gets default column
     * @return {string}
     */
    public default = (): string => '12';

    /**
     * Returns regxp for column class
     *
     * @param {string} columnPreffix
     * @return {RegExp}
     */
    public columnClassRegex = (columnPreffix: string): RegExp => new RegExp(`bs-col-${columnPreffix}-([\\d]+)`, 'gi');
    /**
     * Returns regxp for arrangements class
     *
     * @param {string} arrangementPrefix
     * @return {RegExp}
     */
    public arrangementClassRegex = (arrangementPrefix: string): RegExp => new RegExp(`bs-${arrangementPrefix}-(.+)`, 'gi');

    /**
     * Builds column class based on prefix and breakpoint
     *
     * @param {string} breakpoint
     * @param {string} column
     * @return {string}
     */
    public columnClass = (breakpoint: string, column: string): string => `bs-col-${breakpoint}-${column}`;

    /**
     * Check if class is column
     *
     * @param {string} className
     * @return {boolean}
     */
    public isColumn = (className: string): boolean => !!this.breakpoints.find((breakpoint) => !!this.columns.find((column) => this.columnClass(breakpoint.preffix, column.value) === className));

    /**
     * Check if class is arrangement
     *
     * @param {string} className
     * @return {boolean}
     */
    public isArrangement = (className: string): boolean => !!this.arrangements.find((arr) => !!this.alignments.find((alignment) => this.arrangementClass(arr.preffix, alignment.value) === className));

    /**
     * Render container
     *
     * @return {Element}
     */
    public renderContainer(): Element {
        const node = `
        <div class="bs-grid-container container-fluid">
            <div class="bs-grid-row bs-row">
                <div class="bs-grid-col col-lg-12"><div><p><span style="display: none">ga liat</span>Isi disini</p></div></div>
            </div>
        </div>`;
        const div = document.createElement('div');
        div.innerHTML = node.trim();
        return div;
    }

    /**
     * Render row
     *
     * @return {Element}
     */
    public renderRow(): Element {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="bs-grid-row bs-row">
            <div class="bs-grid-col bs-col-lg-12"><div><p><span style="display: none">ga liat</span>Isi disini</p></div></div>
        </div>`.trim();
        return div.firstChild as Element;
    }

    /**
     * Render column
     *
     * @return {Element}
     */
    public renderColumn(data): Element {
        const xs = data.extra_large.length > 0 ? `bs-col-xl-${data.extra_large}` : '';
        const sm = data.small.length > 0 ? `bs-col-sm-${data.small}` : '';
        const md = data.medium.length > 0 ? `bs-col-md-${data.medium}` : '';
        const lg = data.large.length > 0 ? `bs-col-lg-${data.large}` : '';
        const alignItems = data.align_items.length > 0 ? `bs-align-items-${data.align_items}` : '';
        const justifyContent = data.justify_content.length > 0 ? `bs-justify-content-${data.align_items}` : '';

        const className = `${xs} ${sm} ${md} ${lg} ${alignItems} ${justifyContent}`;
        const node = `<div class="bs-grid-col ${className.trim()}"><div><p><span style="display: none">ga liat</span>Isi disini</p></div></div>`;

        const div = document.createElement('div');
        div.innerHTML = node.trim();
        return div.firstChild as Element;
    }
}
