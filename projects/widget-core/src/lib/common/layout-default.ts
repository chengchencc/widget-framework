import { LayoutTemplate, LayoutConfig } from './layout.interface';
import { ConfigEditorProp, ConfigEditorType } from '../config-editor/utils';

export const DefaultLayout:LayoutConfig = {
  id: '0',
  path: null,
  classes: ['body'],
  type: "body",
  layout: [],
};

export const DefaultLayoutTemplates:LayoutTemplate[]=[
    {
      id: "div",
      name: "div",
      layoutConfig: {
        id: null,
        classes: ["div"],
        style: null,
        layout: [],
        type: "div"
      }
    },
    {
      id: "container",
      name: "container",
      layoutConfig: {
        id: null,
        classes: ["container"],
        style: null,
        layout: [],
        type: "div"
      }
    },
    {
      id: "grid",
      name: "grid",
      layoutConfig: {
        id: null,
        classes: ["grid"],
        style: null,
        settings: null,
        layout: [],
        type: "grid",
        content: []
      }
    },
    {
      id: "row-66",
      name: "row-66",
      layoutConfig: {
        id: null,
        classes: ["row"],
        style: null,
        type: "group",
        layout: [
          {
            id: null,
            classes: ["col-6"],
            style: null,
            type: "div",
            layout: []
          },
          {
            id: null,
            classes: ["col-6"],
            style: null,
            type: "div",
            layout: []
          }
        ]
      }
    },
    {
      id: "row-4-8",
      name: "row-4-8",
      layoutConfig: {
        id: null,
        classes: ["row"],
        style: null,
        type: "group",
        layout: [
          {
            id: null,
            classes: ["col-4"],
            style: null,
            type: "div",
            layout: []
          },
          {
            id: null,
            classes: ["col-8"],
            style: null,
            type: "div",
            layout: []
          }
        ]
      }
    },
    {
      id: "row-4-4-4",
      name: "row-4-4-4",
      layoutConfig: {
        id: null,
        classes: ["row"],
        style: null,
        type: "group",
        layout: [
          {
            id: null,
            classes: ["col-4"],
            style: null,
            type: "div",
            layout: []
          },
          {
            id: null,
            classes: ["col-4"],
            style: null,
            type: "div",
            layout: []
          },
          {
            id: null,
            classes: ["col-4"],
            style: null,
            type: "div",
            layout: []
          }
        ]
      }
    },
    {
      id: "row-3-3-3",
      name: "row-3-3-3",
      layoutConfig: {
        id: null,
        classes: ["row"],
        style: null,
        type: "group",
        layout: [
          {
            id: null,
            classes: ["col-3"],
            style: null,
            type: "div",
            layout: []
          },
          {
            id: null,
            classes: ["col-3"],
            style: null,
            type: "div",
            layout: []
          },
          {
            id: null,
            classes: ["col-3"],
            style: null,
            type: "div",
            layout: []
          },
          {
            id: null,
            classes: ["col-3"],
            style: null,
            type: "div",
            layout: []
          }
        ]
      }
    },
  ];

/**
 * 保存不同布局的设置项
 * layoutType -> setting proplist 映射，
 */
export const LayoutSettingsPropListMap: {
  [ layoutType: string ]: ConfigEditorProp[]
} = {
  grid: [{
      name: 'gridType',
      type: ConfigEditorType.LongEnum,
      EnumValues: ['fit', 'scrollVertical', 'scrollHorizontal', 'fixed', 'verticalFixed', 'horizontalFixed']
    }, {
      name: 'compactType',
      type: ConfigEditorType.LongEnum,
      EnumValues: ['none', 'compactUp', 'compactLeft', 'compactLeft&Up', 'compactUp&Left', 'compactUp&Right'],
      defaultValue: 'none'
    }, {
      name: 'margin',
      type: ConfigEditorType.Number,
    }, {
      name: 'displayGrid',
      type: ConfigEditorType.LongEnum,
      EnumValues: ['always', 'onDrag&Resize', 'none'],
      defaultValue: 'none'
    }, {
      name: 'fixedColWidth',
      type: ConfigEditorType.Number,
    }, {
      name: 'fixedRowHeight',
      type: ConfigEditorType.Number,
    }, {
      name: 'mobileBreakpoint',
      type: ConfigEditorType.Number,
    }, {
      name: 'minCols',
      type: ConfigEditorType.Number,
    }, {
      name: 'maxCols',
      type: ConfigEditorType.Number,
    }, {
      name: 'minRows',
      type: ConfigEditorType.Number,
    }, {
      name: 'maxRows',
      type: ConfigEditorType.Number,
    }, {
      name: 'defaultItemCols',
      type: ConfigEditorType.Number,
    }, {
      name: 'defaultItemRows',
      type: ConfigEditorType.Number,
    }, {
      name: 'maxItemCols',
      type: ConfigEditorType.Number,
    }, {
      name: 'maxItemRows',
      type: ConfigEditorType.Number,
    }, {
      name: 'minItemCols',
      type: ConfigEditorType.Number,
    }, {
      name: 'minItemRows',
      type: ConfigEditorType.Number,
    }, {
      name: 'minItemArea',
      type: ConfigEditorType.Number,
    }, {
      name: 'maxItemArea',
      type: ConfigEditorType.Number,
    }, {
      name: 'outerMarginTop',
      type: ConfigEditorType.Number,
    }, {
      name: 'outerMarginRight',
      type: ConfigEditorType.Number,
    }, {
      name: 'outerMarginBottom',
      type: ConfigEditorType.Number,
    }, {
      name: 'outerMarginLeft',
      type: ConfigEditorType.Number,
    }, {
      name: 'scrollSensitivity',
      type: ConfigEditorType.Number,
    }, {
      name: 'scrollSpeed',
      type: ConfigEditorType.Number,
    }
],
  div: []
}