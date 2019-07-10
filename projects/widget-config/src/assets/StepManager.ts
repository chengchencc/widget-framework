

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
    toLastIndex (targetStepIndex: number) {
        this._setStep(targetStepIndex)
    }
}