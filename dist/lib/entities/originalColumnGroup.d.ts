// Type definitions for ag-grid-community v21.2.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { OriginalColumnGroupChild } from "./originalColumnGroupChild";
import { ColGroupDef } from "./colDef";
import { Column } from "./column";
import { IEventEmitter } from "../interfaces/iEventEmitter";
export declare class OriginalColumnGroup implements OriginalColumnGroupChild, IEventEmitter {
    static EVENT_EXPANDED_CHANGED: string;
    static EVENT_EXPANDABLE_CHANGED: string;
    private localEventService;
    private colGroupDef;
    private originalParent;
    private children;
    private groupId;
    private expandable;
    private expanded;
    private padding;
    private level;
    constructor(colGroupDef: ColGroupDef, groupId: string, padding: boolean, level: number);
    setOriginalParent(originalParent: OriginalColumnGroup | null): void;
    getOriginalParent(): OriginalColumnGroup | null;
    getLevel(): number;
    isVisible(): boolean;
    isPadding(): boolean;
    setExpanded(expanded: boolean | undefined): void;
    isExpandable(): boolean;
    isExpanded(): boolean;
    getGroupId(): string;
    getId(): string;
    setChildren(children: OriginalColumnGroupChild[]): void;
    getChildren(): OriginalColumnGroupChild[];
    getColGroupDef(): ColGroupDef;
    getLeafColumns(): Column[];
    private addLeafColumns;
    getColumnGroupShow(): string | undefined;
    setupExpandable(): void;
    setExpandable(): void;
    findChildren(): OriginalColumnGroupChild[];
    private onColumnVisibilityChanged;
    addEventListener(eventType: string, listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
}
