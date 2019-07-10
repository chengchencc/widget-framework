import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import StepManager from 'projects/widget-config/src/assets/StepManager';
// import {  } from '@angular/compiler/src/core';
/** 部件配置页的 5 种状态 */
enum PageState {
  WidgetList,
  InfoConfig,
  DataConfig,
  WidgetConfig,
  Preview,
}


@Component({
  selector: 'app-widget-list-page',
  templateUrl: './widget-list-page.component.html',
  styleUrls: ['./widget-list-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WidgetListPageComponent implements OnInit {

  curPageState = PageState.WidgetList

  stepData =  [
    {
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
  stepManager = new StepManager(this.stepData)


  PageState = PageState
  constructor() { }

  ngOnInit() {
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
