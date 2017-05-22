/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../src/ng2FrameworkFactory';
import * as import2 from '../../src/baseComponentFactory';
import * as import3 from '../../src/ng2FrameworkComponentWrapper';
import * as import4 from '../../src/agGridNg2';
const styles_AgGridNg2:any[] = ([] as any[]);
export const RenderType_AgGridNg2:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_AgGridNg2,
  data: {}
}
);
export function View_AgGridNg2_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,([] as any[]),(null as any),(null as any));
}
function View_AgGridNg2_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(16777216,(null as any),(null as any),4,'ag-grid-angular',([] as any[]),(null as any),(null as any),(null as any),View_AgGridNg2_0,RenderType_AgGridNg2)),
    import0.ɵprd(512,(null as any),import1.Ng2FrameworkFactory,import1.Ng2FrameworkFactory,[
      import2.BaseComponentFactory,
      import0.NgZone
    ]
    ),
    import0.ɵprd(512,(null as any),import3.Ng2FrameworkComponentWrapper,import3.Ng2FrameworkComponentWrapper,([] as any[])),
    import0.ɵdid(4898816,(null as any),1,import4.AgGridNg2,[
      import0.ElementRef,
      import0.ViewContainerRef,
      import1.Ng2FrameworkFactory,
      import3.Ng2FrameworkComponentWrapper,
      import0.ComponentFactoryResolver
    ]
    ,(null as any),(null as any)),
    import0.ɵqud(603979776,1,{columns: 1})
  ]
  ,(null as any),(null as any));
}
export const AgGridNg2NgFactory:import0.ComponentFactory<import4.AgGridNg2> = import0.ɵccf('ag-grid-angular',import4.AgGridNg2,View_AgGridNg2_Host_0,{
  gridOptions: 'gridOptions',
  slaveGrids: 'slaveGrids',
  rowData: 'rowData',
  floatingTopRowData: 'floatingTopRowData',
  floatingBottomRowData: 'floatingBottomRowData',
  columnDefs: 'columnDefs',
  defaultColDef: 'defaultColDef',
  rowStyle: 'rowStyle',
  context: 'context',
  groupColumnDef: 'groupColumnDef',
  localeText: 'localeText',
  icons: 'icons',
  datasource: 'datasource',
  enterpriseDatasource: 'enterpriseDatasource',
  viewportDatasource: 'viewportDatasource',
  groupRowRendererParams: 'groupRowRendererParams',
  aggFuncs: 'aggFuncs',
  fullWidthCellRendererParams: 'fullWidthCellRendererParams',
  sortingOrder: 'sortingOrder',
  rowClass: 'rowClass',
  rowSelection: 'rowSelection',
  overlayLoadingTemplate: 'overlayLoadingTemplate',
  overlayNoRowsTemplate: 'overlayNoRowsTemplate',
  headerCellTemplate: 'headerCellTemplate',
  quickFilterText: 'quickFilterText',
  rowModelType: 'rowModelType',
  rowHeight: 'rowHeight',
  rowBuffer: 'rowBuffer',
  colWidth: 'colWidth',
  headerHeight: 'headerHeight',
  groupDefaultExpanded: 'groupDefaultExpanded',
  minColWidth: 'minColWidth',
  maxColWidth: 'maxColWidth',
  viewportRowModelPageSize: 'viewportRowModelPageSize',
  viewportRowModelBufferSize: 'viewportRowModelBufferSize',
  layoutInterval: 'layoutInterval',
  autoSizePadding: 'autoSizePadding',
  maxPagesInCache: 'maxPagesInCache',
  maxConcurrentDatasourceRequests: 'maxConcurrentDatasourceRequests',
  paginationOverflowSize: 'paginationOverflowSize',
  paginationPageSize: 'paginationPageSize',
  paginationInitialRowCount: 'paginationInitialRowCount',
  headerCellRenderer: 'headerCellRenderer',
  localeTextFunc: 'localeTextFunc',
  groupRowInnerRenderer: 'groupRowInnerRenderer',
  groupRowRenderer: 'groupRowRenderer',
  isScrollLag: 'isScrollLag',
  isExternalFilterPresent: 'isExternalFilterPresent',
  getRowHeight: 'getRowHeight',
  doesExternalFilterPass: 'doesExternalFilterPass',
  getRowClass: 'getRowClass',
  getRowStyle: 'getRowStyle',
  getHeaderCellTemplate: 'getHeaderCellTemplate',
  traverseNode: 'traverseNode',
  getContextMenuItems: 'getContextMenuItems',
  getMainMenuItems: 'getMainMenuItems',
  processRowPostCreate: 'processRowPostCreate',
  processCellForClipboard: 'processCellForClipboard',
  getNodeChildDetails: 'getNodeChildDetails',
  groupRowAggNodes: 'groupRowAggNodes',
  getRowNodeId: 'getRowNodeId',
  isFullWidthCell: 'isFullWidthCell',
  fullWidthCellRenderer: 'fullWidthCellRenderer',
  doesDataFlower: 'doesDataFlower',
  toolPanelSuppressRowGroups: 'toolPanelSuppressRowGroups',
  toolPanelSuppressValues: 'toolPanelSuppressValues',
  toolPanelSuppressPivots: 'toolPanelSuppressPivots',
  toolPanelSuppressPivotMode: 'toolPanelSuppressPivotMode',
  suppressRowClickSelection: 'suppressRowClickSelection',
  suppressCellSelection: 'suppressCellSelection',
  suppressHorizontalScroll: 'suppressHorizontalScroll',
  suppressScrollOnNewData: 'suppressScrollOnNewData',
  debug: 'debug',
  enableColResize: 'enableColResize',
  enableCellExpressions: 'enableCellExpressions',
  enableSorting: 'enableSorting',
  enableServerSideSorting: 'enableServerSideSorting',
  enableFilter: 'enableFilter',
  enableServerSideFilter: 'enableServerSideFilter',
  angularCompileRows: 'angularCompileRows',
  angularCompileFilters: 'angularCompileFilters',
  angularCompileHeaders: 'angularCompileHeaders',
  groupSuppressAutoColumn: 'groupSuppressAutoColumn',
  groupSelectsChildren: 'groupSelectsChildren',
  groupIncludeFooter: 'groupIncludeFooter',
  groupUseEntireRow: 'groupUseEntireRow',
  groupSuppressRow: 'groupSuppressRow',
  groupSuppressBlankHeader: 'groupSuppressBlankHeader',
  forPrint: 'forPrint',
  suppressMenuHide: 'suppressMenuHide',
  rowDeselection: 'rowDeselection',
  unSortIcon: 'unSortIcon',
  suppressMultiSort: 'suppressMultiSort',
  suppressScrollLag: 'suppressScrollLag',
  singleClickEdit: 'singleClickEdit',
  suppressLoadingOverlay: 'suppressLoadingOverlay',
  suppressNoRowsOverlay: 'suppressNoRowsOverlay',
  suppressAutoSize: 'suppressAutoSize',
  suppressParentsInRowNodes: 'suppressParentsInRowNodes',
  showToolPanel: 'showToolPanel',
  suppressColumnMoveAnimation: 'suppressColumnMoveAnimation',
  suppressMovableColumns: 'suppressMovableColumns',
  suppressFieldDotNotation: 'suppressFieldDotNotation',
  enableRangeSelection: 'enableRangeSelection',
  suppressEnterprise: 'suppressEnterprise',
  rowGroupPanelShow: 'rowGroupPanelShow',
  pivotPanelShow: 'pivotPanelShow',
  suppressContextMenu: 'suppressContextMenu',
  suppressMenuFilterPanel: 'suppressMenuFilterPanel',
  suppressMenuMainPanel: 'suppressMenuMainPanel',
  suppressMenuColumnPanel: 'suppressMenuColumnPanel',
  enableStatusBar: 'enableStatusBar',
  rememberGroupStateWhenNewData: 'rememberGroupStateWhenNewData',
  enableCellChangeFlash: 'enableCellChangeFlash',
  suppressDragLeaveHidesColumns: 'suppressDragLeaveHidesColumns',
  suppressMiddleClickScrolls: 'suppressMiddleClickScrolls',
  suppressPreventDefaultOnMouseWheel: 'suppressPreventDefaultOnMouseWheel',
  suppressUseColIdForGroups: 'suppressUseColIdForGroups',
  suppressCopyRowsToClipboard: 'suppressCopyRowsToClipboard',
  pivotMode: 'pivotMode',
  suppressAggFuncInHeader: 'suppressAggFuncInHeader',
  suppressColumnVirtualisation: 'suppressColumnVirtualisation',
  suppressFocusAfterRefresh: 'suppressFocusAfterRefresh',
  functionsPassive: 'functionsPassive',
  functionsReadOnly: 'functionsReadOnly',
  defaultColGroupDef: 'defaultColGroupDef',
  editType: 'editType',
  scrollbarWidth: 'scrollbarWidth',
  groupRowInnerRendererFramework: 'groupRowInnerRendererFramework',
  groupRowRendererFramework: 'groupRowRendererFramework',
  fullWidthCellRendererFramework: 'fullWidthCellRendererFramework',
  processSecondaryColDef: 'processSecondaryColDef',
  processSecondaryColGroupDef: 'processSecondaryColGroupDef',
  suppressRowHoverClass: 'suppressRowHoverClass',
  suppressTouch: 'suppressTouch',
  animateRows: 'animateRows',
  groupSelectsFiltered: 'groupSelectsFiltered',
  groupRemoveSingleChildren: 'groupRemoveSingleChildren',
  getBusinessKeyForNode: 'getBusinessKeyForNode',
  checkboxSelection: 'checkboxSelection',
  enableRtl: 'enableRtl',
  suppressClickEdit: 'suppressClickEdit',
  enableRtlSupport: 'enableRtlSupport',
  excelStyles: 'excelStyles',
  dateComponent: 'dateComponent',
  dateComponentFramework: 'dateComponentFramework',
  dateComponentParams: 'dateComponentParams',
  sendToClipboard: 'sendToClipboard',
  navigateToNextCell: 'navigateToNextCell',
  tabToNextCell: 'tabToNextCell',
  processCellFromClipboard: 'processCellFromClipboard',
  getDocument: 'getDocument',
  enableGroupEdit: 'enableGroupEdit',
  embedFullWidthRows: 'embedFullWidthRows',
  suppressTabbing: 'suppressTabbing',
  suppressPaginationPanel: 'suppressPaginationPanel',
  paginationStartPage: 'paginationStartPage',
  floatingFilter: 'floatingFilter',
  groupHideOpenParents: 'groupHideOpenParents',
  defaultExportParams: 'defaultExportParams',
  infiniteBlockSize: 'infiniteBlockSize',
  infiniteInitialRowCount: 'infiniteInitialRowCount',
  allowContextMenuWithControlKey: 'allowContextMenuWithControlKey',
  groupMultiAutoColumn: 'groupMultiAutoColumn',
  pagination: 'pagination',
  stopEditingWhenGridLosesFocus: 'stopEditingWhenGridLosesFocus',
  paginationAutoPageSize: 'paginationAutoPageSize',
  groupHeaderHeight: 'groupHeaderHeight',
  floatingFiltersHeight: 'floatingFiltersHeight',
  pivotHeaderHeight: 'pivotHeaderHeight',
  pivotGroupHeaderHeight: 'pivotGroupHeaderHeight',
  maxBlocksInCache: 'maxBlocksInCache',
  cacheOverflowSize: 'cacheOverflowSize',
  suppressAggAtRootLevel: 'suppressAggAtRootLevel',
  purgeClosedRowNodes: 'purgeClosedRowNodes',
  postProcessPopup: 'postProcessPopup',
  suppressAsyncEvents: 'suppressAsyncEvents',
  cacheQuickFilter: 'cacheQuickFilter'
}
,{
  gridReady: 'gridReady',
  columnEverythingChanged: 'columnEverythingChanged',
  newColumnsLoaded: 'newColumnsLoaded',
  columnPivotModeChanged: 'columnPivotModeChanged',
  columnRowGroupChanged: 'columnRowGroupChanged',
  columnPivotChanged: 'columnPivotChanged',
  gridColumnsChanged: 'gridColumnsChanged',
  columnValueChanged: 'columnValueChanged',
  columnMoved: 'columnMoved',
  columnVisible: 'columnVisible',
  columnPinned: 'columnPinned',
  columnGroupOpened: 'columnGroupOpened',
  columnResized: 'columnResized',
  displayedColumnsChanged: 'displayedColumnsChanged',
  virtualColumnsChanged: 'virtualColumnsChanged',
  rowGroupOpened: 'rowGroupOpened',
  rowDataChanged: 'rowDataChanged',
  floatingRowDataChanged: 'floatingRowDataChanged',
  rangeSelectionChanged: 'rangeSelectionChanged',
  columnRowGroupAddRequest: 'columnRowGroupAddRequest',
  columnRowGroupRemoveRequest: 'columnRowGroupRemoveRequest',
  columnPivotAddRequest: 'columnPivotAddRequest',
  columnPivotRemoveRequest: 'columnPivotRemoveRequest',
  columnValueAddRequest: 'columnValueAddRequest',
  columnValueRemoveRequest: 'columnValueRemoveRequest',
  columnAggFuncChangeRequest: 'columnAggFuncChangeRequest',
  clipboardPaste: 'clipboardPaste',
  modelUpdated: 'modelUpdated',
  cellClicked: 'cellClicked',
  cellDoubleClicked: 'cellDoubleClicked',
  cellContextMenu: 'cellContextMenu',
  cellValueChanged: 'cellValueChanged',
  cellFocused: 'cellFocused',
  rowSelected: 'rowSelected',
  selectionChanged: 'selectionChanged',
  filterChanged: 'filterChanged',
  filterModified: 'filterModified',
  sortChanged: 'sortChanged',
  virtualRowRemoved: 'virtualRowRemoved',
  rowClicked: 'rowClicked',
  rowDoubleClicked: 'rowDoubleClicked',
  gridSizeChanged: 'gridSizeChanged',
  viewportChanged: 'viewportChanged',
  dragStarted: 'dragStarted',
  dragStopped: 'dragStopped',
  itemsAdded: 'itemsAdded',
  itemsRemoved: 'itemsRemoved',
  columnRowGroupChangeRequest: 'columnRowGroupChangeRequest',
  columnPivotChangeRequest: 'columnPivotChangeRequest',
  columnValueChangeRequest: 'columnValueChangeRequest',
  rowValueChanged: 'rowValueChanged',
  bodyScroll: 'bodyScroll',
  rowEditingStarted: 'rowEditingStarted',
  rowEditingStopped: 'rowEditingStopped',
  cellEditingStarted: 'cellEditingStarted',
  cellEditingStopped: 'cellEditingStopped',
  displayedColumnsWidthChanged: 'displayedColumnsWidthChanged',
  scrollVisibilityChanged: 'scrollVisibilityChanged',
  flashCells: 'flashCells',
  cellMouseOver: 'cellMouseOver',
  cellMouseOut: 'cellMouseOut',
  columnHoverChanged: 'columnHoverChanged',
  paginationReset: 'paginationReset',
  paginationPageLoaded: 'paginationPageLoaded',
  paginationPageRequested: 'paginationPageRequested',
  paginationChanged: 'paginationChanged',
  bodyHeightChanged: 'bodyHeightChanged',
  componentStateChanged: 'componentStateChanged',
  beforeFilterChanged: 'beforeFilterChanged',
  afterFilterChanged: 'afterFilterChanged',
  beforeSortChanged: 'beforeSortChanged',
  afterSortChanged: 'afterSortChanged'
}
,([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2FsYmVydG8vdm9sYXRpbGUvcmVsZWFzZXMvMTAuMC4wL2FnLWdyaWQtYW5ndWxhci9zcmMvYWdHcmlkTmcyLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2FsYmVydG8vdm9sYXRpbGUvcmVsZWFzZXMvMTAuMC4wL2FnLWdyaWQtYW5ndWxhci9zcmMvYWdHcmlkTmcyLnRzIiwibmc6Ly8vVXNlcnMvYWxiZXJ0by92b2xhdGlsZS9yZWxlYXNlcy8xMC4wLjAvYWctZ3JpZC1hbmd1bGFyL3NyYy9hZ0dyaWROZzIudHMuQWdHcmlkTmcyX0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGFnLWdyaWQtYW5ndWxhcj48L2FnLWdyaWQtYW5ndWxhcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7Z0JBQUE7OztJQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7Ozs7OztJQUFBO0tBQUE7Z0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
