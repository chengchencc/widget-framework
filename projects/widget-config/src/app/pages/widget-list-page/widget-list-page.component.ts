import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import StepManager from 'projects/widget-config/src/assets/StepManager';
// import {  } from '@angular/compiler/src/core';

const widgetList = [{
  categoryName: '通用部件',
  widgets: [{
    name: '个人信息',
  }, {
    name: '个人信息2',
  }, {
    name: '个人信息3',
  }, {
    name: '个人信息4',
  }, {
    name: '个人信息5',
  }, {
    name: '个人信息6',
  }]
}, {
  categoryName: '通用部件2',
  widgets: [{
    name: '个人信息',
  }, {
    name: '个人信息2'
  }]
}, {
  categoryName: '通用部件3',
  widgets: [{
    name: '个人信息',
  }, {
    name: '个人信息2',
  }, {
    name: '个人信息3'
  }]
}, {
  categoryName: '通用部件4',
  widgets: [{
    name: '个人信息',
  }, {
    name: '个人信息2',
  }, {
    name: '个人信息3',
  }, {
    name: '个人信息4'
  }]
}]

/** 部件配置页的 5 种状态 */
enum PageState {
  WidgetList,
  InfoConfig,
  DataConfig,
  WidgetConfig,
  Preview,
}

interface WidgetCategory {
  categoryName: string,
  widgets: Widget[]
}
interface Widget {
  name: string,
}


@Component({
  selector: 'app-widget-list-page',
  templateUrl: './widget-list-page.component.html',
  styleUrls: ['./widget-list-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WidgetListPageComponent implements OnInit {

  curPageState = PageState.WidgetList

  stepDataList =  [
    {
      name: '部件列表',
      btns: [{
        name: '新增部件',
        class: 'btn-primary',
        onClick: () => {
          this.stepManager.toNext()
        }
      }, {
        name: '编辑',
        onClick: () => {}
      }, {
        name: '复制',
        onClick: () => {}
      }, {
        name: '删除',
        onClick: () => {}
      }],
    },
    {
      name: '填写部件信息',
      btns: [{
        name: '下一步',
        class: 'btn-primary',
        onClick: () => {
          this.stepManager.toNext()
        }
      }, {
        name: '取消',
        onClick: () => {
          this.stepManager.toLastIndex(0)

        }
      }],
    },
    {
      name: '配置数据集',
      btns: [{
        name: '上一步',
        onClick: () => {
          this.curPageState = PageState.InfoConfig
          this.stepManager.toLast()

        }
      }, {
        name: '下一步',
        class: 'btn-primary',
        onClick: () => {
          this.curPageState = PageState.InfoConfig
          this.stepManager.toNext()

        }
      }, {
        name: '取消',
        onClick: () => {
          this.stepManager.toLastIndex(0)

        }
      }]
    },
    {
      name: '配置部件',
      btns: [{
        name: '上一步',
        onClick: () => {
          this.curPageState = PageState.InfoConfig
          this.stepManager.toLast()

        }
      }, {
        name: '下一步',
        class: 'btn-primary',
        onClick: () => {
          this.curPageState = PageState.InfoConfig
          this.stepManager.toNext()
        }
      }, {
        name: '取消',
        onClick: () => {
          this.stepManager.toLastIndex(0)

        }
      }]
    },
    {
      name: '预览部件',
      btns: [{
        name: '上一步',
        onClick: () => {
          this.stepManager.toLast()
        }
      }, {
        name: '保存',
        class: 'btn-primary',
        onClick: () => {}
      }, {
        name: '取消',
        onClick: () => {
          this.stepManager.toLastIndex(0)
        }
      }]
    }
  ]
  stepManager = new StepManager(this.stepDataList)

  widgetList = widgetList
  curSelection: WidgetCategory | Widget = null

  PageState = PageState
  constructor() { }

  ngOnInit() {
    // TODO: 异步加载后设置
    this.curSelection = this.widgetList[0]
  }

  
  transitToNextState () {
    
  }
  transitToLastState () {
    
  }

}




  // ButtonGroups = {
  //   [PageState.WidgetList]: [{
  //       name: '新增部件',
  //       class: 'btn-primary',
  //       onClick: () => {
  //         this.curPageState = PageState.InfoConfig
  //       }
  //     }, {
  //       name: '编辑',
  //       onClick: () => {}
  //     }, {
  //       name: '复制',
  //       onClick: () => {}
  //     }, {
  //       name: '删除',
  //       onClick: () => {}
  //     }],
  //   [PageState.InfoConfig]: [{
  //       name: '下一步',
  //       class: 'btn-primary',
  //       onClick: () => {
  //         this.curPageState = PageState.InfoConfig
  //       }
  //     }, {
  //       name: '取消',
  //       onClick: () => {}
  //   }],
  //   [PageState.DataConfig]: [{
  //       name: '上一步',
  //       onClick: () => {
  //         this.curPageState = PageState.InfoConfig

  //       }
  //     }, {
  //       name: '下一步',
  //       class: 'btn-primary',
  //       onClick: () => {
  //         this.curPageState = PageState.InfoConfig

  //       }
  //     }, {
  //       name: '取消',
  //       onClick: () => {}
  //   }],
  //   [PageState.WidgetConfig]: [{
  //       name: '上一步',
  //       onClick: () => {
  //         this.curPageState = PageState.InfoConfig

  //       }
  //     }, {
  //       name: '下一步',
  //       class: 'btn-primary',
  //       onClick: () => {
  //         this.curPageState = PageState.InfoConfig

  //       }
  //     }, {
  //       name: '取消',
  //       onClick: () => {}
  //   }],
  //   [PageState.Preview]: [{
  //       name: '上一步',
  //       onClick: () => {
  //         this.curPageState = PageState.InfoConfig

  //       }
  //     }, {
  //       name: '保存',
  //       class: 'btn-primary',
  //       onClick: () => {}
  //     }, {
  //       name: '取消',
  //       onClick: () => {}
  //   }]
  // }
