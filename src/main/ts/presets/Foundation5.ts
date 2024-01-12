import { Editor } from 'tinymce';
import Settings from '../core/Settings';
import IPreset, { Alignment, Arrangement, Breakpoint, Column } from './IPreset';

export default class Foundation5 implements IPreset {

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
        {text: 'Small', value: 'small', preffix: 'small'},
        {text: 'Medium', value: 'medium', preffix: 'medium'},
        {text: 'Large', value: 'large', preffix: 'large'},
    ];
    
    public readonly arrangements: Arrangement[] = [
        {text: "Justify Content", value: "justify_content", preffix: "justify-content"},
        {text: "Align Items", value: "align_items", preffix: "align-items"},
    ];

    public arrangementClass = (arrangement: string, location: string): string => `${arrangement}-${location}`;
    
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

    /**
     * Gets style url
     */
    public style = (): string => 'foundation5.css';

    /**
     * Gets default column
     * @return {string}
     */
    public default = (): string => '12';

    /**
     * Returns regxp for column class
     */
    public columnClassRegex = (columnPreffix: string): RegExp => new RegExp(`${columnPreffix}-([\\d]+)`, 'gi');
    
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
    public columnClass = (breakpoint: string, column: string): string => `${breakpoint}-${column}`;

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
     */
    public renderContainer(): Element {
        const node = `
        <div class="grid-container container">
            <div class="grid-row row">
                <div class="grid-col columns large-12"><p>Lorem ipsum</p></div>
            </div>
        </div>`;
        const div = document.createElement('div');
        div.innerHTML = node.trim();
        return div;
    }

    /**
     * Render row
     */
    public renderRow(): Element {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="grid-row row">
            <div class="grid-col columns large-12"><p>Lorem ipsum</p></div>
        </div>`.trim();
        return div.firstChild as Element;
    }

    /**
     * Render column
     */
    public renderColumn(data): Element {
        const sm = data.small.length > 0 ? `small-${data.small}` : '';
        const md = data.medium.length > 0 ? `medium-${data.medium}` : '';
        const lg = data.large.length > 0 ? `large-${data.large}` : '';
        const className = `${sm} ${md} ${lg}`;
        const node = `<div class="grid-col columns ${className.trim()}"><p>Lorem ipsum</p></div>`;

        const div = document.createElement('div');
        div.innerHTML = node.trim();
        return div.firstChild as Element;
    }

}