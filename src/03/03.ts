import {StudentType} from "../02/02";
import {GovBuildingsType, HouseType} from "../02/02_02";

export const addSkill = (st : StudentType, skill: string) => {
    st.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        }
    )
}
export function addSkill2(st : StudentType, skill: string) {
    st.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        }
    )
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export function doesStudentLiveIn(s: StudentType, c: string) {
    return s.address.city.title === c;
}

export function addMoneyToBudget(building: GovBuildingsType, budget: number) {
    building.budget += budget;
}

export function repairHouse(houseType: HouseType) {
    houseType.repaired = true;
}
export function toFireStaff(govBuilding: GovBuildingsType, staffCountFire: number) {
    govBuilding.staffCount -= staffCountFire;
}
export function toHireStaff(govBuilding: GovBuildingsType, staffCountHire: number) {
    govBuilding.staffCount += staffCountHire;
}