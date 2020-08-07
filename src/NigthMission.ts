import { Mission } from "./Mission"

export class NigthMission extends Mission {
    public setName(name: string) {
        if (name.indexOf("-na-night") !== -1) {
            super.setName(name)   
        } else {
            let correctName = name + "-na-night"
            super.setName(correctName)
        }  
    }
}