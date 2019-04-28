import { LayoutTemplate, LayoutConfig } from './layout.interface';

export const DefaultLayout:LayoutConfig = {
  id: '0',
  path: null,
  classes: ['body'],
  type: "body",
  layout: [],
  parent: null
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