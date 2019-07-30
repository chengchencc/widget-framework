import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import StepManager from 'projects/widget-config/src/assets/StepManager';
import { ConfigEditorType } from 'projects/widget-core/src/lib/config-editor/utils';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CalcuFieldComponent } from '../../modals/calcu-field/calcu-field.component';
import { MonthFilterComponent } from '../../modals/month-filter/month-filter.component';
import { SearchableListCategory, SearchableListItem } from '../../comps/searchable-list/searchable-list.component';
// import {  } from '@angular/compiler/src/core';

const styleProps = [
  {
    id: 'a', name: '关联上下文',
    propList: [
      {
        id: 'a', name: '关联上下文',
        type: ConfigEditorType.Text
      },
      {
        id: 'a', name: 'property 2',
        type: ConfigEditorType.LongEnum,
        EnumValues: ['value 1', 'v2', 'v3']
      }
    ]
  }, {
    id: 'a', name: '部件信息',
    propList: [
      {
        id: 'a', name: '标题名称',
        type: ConfigEditorType.Text
      }, {
        id: 'a', name: '副标题名称',
        type: ConfigEditorType.Text
      }, {
        id: 'a', name: '选择筛选条件',
        type: ConfigEditorType.Text
      }
    ]
  }
  
]

const widgetCategoryList: SearchableListCategory[] = [{
  categoryName: '通用部件',
  children: [{
    id: 'a', name: '个人信息',
  }, {
    id: 'a', name: '个人信息2',
  }, {
    id: 'a', name: '个人信息3',
  }, {
    id: 'a', name: '个人信息4',
  }, {
    id: 'a', name: '个人信息5',
  }, {
    id: 'a', name: '个人信息6',
  }]
}, {
  categoryName: '通用部件2',
  children: [{
    id: 'a', name: '个人信息',
  }, {
    id: 'a', name: '个人信息2'
  }]
}, {
  categoryName: '通用部件3',
  children: [{
    id: 'a', name: '个人信息',
  }, {
    id: 'a', name: '个人信息2',
  }, {
    id: 'a', name: '个人信息3'
  }]
}, {
  categoryName: '通用部件4',
  children: [{
    id: 'a', name: '个人信息',
  }, {
    id: 'a', name: '个人信息2',
  }, {
    id: 'a', name: '个人信息3',
  }, {
    id: 'a', name: '个人信息4'
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
  id: 'a', name: string,
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
      id: 'a', name: '部件列表',
      btns: [{
        id: 'a', name: '新增部件',
        class: 'btn-primary',
        onClick: () => {
          this.stepManager.toNext()
        }
      }, {
        id: 'a', name: '编辑',
        onClick: () => {}
      }, {
        id: 'a', name: '复制',
        onClick: () => {}
      }, {
        id: 'a', name: '删除',
        onClick: () => {}
      }],
    },
    {
      id: 'a', name: '填写部件信息',
      btns: [{
        id: 'a', name: '下一步',
        class: 'btn-primary',
        onClick: () => {
          this.stepManager.toNext()
        }
      }, {
        id: 'a', name: '取消',
        onClick: () => {
          this.stepManager.toLastIndex(0)

        }
      }],
    },
    {
      id: 'a', name: '配置数据集',
      btns: [{
        id: 'a', name: '上一步',
        onClick: () => {
          this.curPageState = PageState.InfoConfig
          this.stepManager.toLast()

        }
      }, {
        id: 'a', name: '下一步',
        class: 'btn-primary',
        onClick: () => {
          this.curPageState = PageState.InfoConfig
          this.stepManager.toNext()

        }
      }, {
        id: 'a', name: '取消',
        onClick: () => {
          this.stepManager.toLastIndex(0)

        }
      }]
    },
    {
      id: 'a', name: '配置部件',
      btns: [{
        id: 'a', name: '上一步',
        onClick: () => {
          this.curPageState = PageState.InfoConfig
          this.stepManager.toLast()

        }
      }, {
        id: 'a', name: '下一步',
        class: 'btn-primary',
        onClick: () => {
          this.curPageState = PageState.InfoConfig
          this.stepManager.toNext()
        }
      }, {
        id: 'a', name: '取消',
        onClick: () => {
          this.stepManager.toLastIndex(0)

        }
      }]
    },
    {
      id: 'a', name: '预览部件',
      btns: [{
        id: 'a', name: '上一步',
        onClick: () => {
          this.stepManager.toLast()
        }
      }, {
        id: 'a', name: '保存',
        class: 'btn-primary',
        onClick: () => {}
      }, {
        id: 'a', name: '取消',
        onClick: () => {
          this.stepManager.toLastIndex(0)
        }
      }]
    }
  ]
  stepManager = new StepManager(this.stepDataList)

  widgetCategoryList = widgetCategoryList
  selectedWidgetOrCategory: SearchableListItem | SearchableListCategory = null

  PageState = PageState
  metaCompType: 'graphOnly' | 'graphNTable'


  /** config editor */
  getValue = () => {}
  configData = {}

  
  getCurPropCategoryList () {
    return styleProps
  }
  handleChangeValue () {}

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.metaCompType = 'graphOnly'
    // TODO: 异步加载后设置
    // this.curSelection = this.widgetList[0]
  }

  handleSelectWidgetOrCategory (selectedWidgetOrCategory: SearchableListItem | SearchableListCategory) {
    this.selectedWidgetOrCategory = selectedWidgetOrCategory
  }

  handleClickStep (targetStepIndex: number) {
    // 点击老的任一步可以回去
    if(targetStepIndex < this.stepManager.curStepIndex) {
      this.stepManager.toLastIndex(targetStepIndex)
      // 点击下一步就是下一步
    } else if(targetStepIndex == this.stepManager.curStepIndex+1) {
      this.stepManager.toNext()
      return
    }
  }

  handleClickCalcuField () {
    this.modalService.show(CalcuFieldComponent, {});
  }
  handleClickMonthFilter () {
    this.modalService.show(MonthFilterComponent, {});
  }

}
