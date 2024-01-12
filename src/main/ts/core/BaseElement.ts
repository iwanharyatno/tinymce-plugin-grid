import {Editor, I18n} from 'tinymce';
import Settings from './Settings';

export default class BaseElement {
    constructor(protected settings: Settings, protected editor: Editor, protected i18n: I18n) {
        this.getElement = this.getElement.bind(this);
        this.isElement = this.isElement.bind(this);
        this.getElementColumn = this.getElementColumn.bind(this);
        this.isElementColumn = this.isElementColumn.bind(this);
        this.getElementRow = this.getElementRow.bind(this);
        this.isElementRow = this.isElementRow.bind(this);
        this.selectElement = this.selectElement.bind(this);
    }

    protected cmd(command: string, value: any = null) {
        return () => this.editor.execCommand(command, false, value);
    }

    protected getElement() {
        return this.editor.dom.getParent(this.editor.selection.getStart(), '.bs-grid-container') as Element;
    }

    protected isElement(container: any) {
        return this.editor.dom.is(container, '.bs-grid-container') && this.editor.getBody().contains(container);
    }

    protected getElementColumn() {
        return this.editor.dom.getParent(this.editor.selection.getStart(), '.bs-grid-col') as Element;
    }

    protected isElementColumn(column: any) {
        if (false === this.editor.getBody().contains(column)) {
            return false;
        }

        const parents = this.editor.dom.getParents(column, '.bs-grid-col');

        for (const parent of parents) {
            if (parent.classList.contains('bs-grid-col')) {
                return true;
            }
        }

        return false;
    }

    protected getElementRow() {
        return this.editor.dom.getParent(this.editor.selection.getStart(), '.bs-grid-row') as Element;
    }

    protected isElementRow(row: any) {
        return this.editor.dom.is(row, '.bs-grid-row') && this.editor.getBody().contains(row);
    }

    protected selectElement(target: any) {
        const element = this.getElementColumn();

        if (element) {
            this.editor.selection.collapse();
            this.editor.focus(false);
        }
    }
}