

interface StepData {
    [key: string]: any
}

export default class StepManager {
    public curStepIndex: number
    public curStepData: StepData

    constructor (private stepDataList: StepData[], initStepIndex = 0) {
        this._setStep(initStepIndex)
    }

    private _setStep (targetStepIndex: number) {
        if(targetStepIndex >= this.stepDataList.length) {
            console.warn(`木有阶段 ${targetStepIndex} !`)
            return
        }
        this.curStepIndex = targetStepIndex
        this.curStepData = this.stepDataList[targetStepIndex]
    }

    toNext () {
        this._setStep(this.curStepIndex + 1)
    }
    toLast () {
        this._setStep(this.curStepIndex - 1)
    }
    /** 切换到之前的任一 step，不包括当前 step。否则无效 */
    toLastIndex (targetStepIndex: number) {
        if(targetStepIndex >= this.curStepIndex) return
        this._setStep(targetStepIndex)
    }
}