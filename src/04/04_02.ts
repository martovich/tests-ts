import {CityType, GovBuildingsType} from "../02/02_02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(f => f.address.street.title !== street);
}

export function getBuildingsWithStafGreaterThan(buildings: Array<GovBuildingsType>, staffCount: number) {
    return buildings.filter(f => f.staffCount > staffCount);
}