import {GovBuildingsType, HouseType} from "../02/02_02";

export function getStreetTitlesOfGevernmentsBuildings(buildings: Array<GovBuildingsType>) {
    return buildings.map( b => b.address.street.title);
}

export function getStreetTitlesOfHouses(houses: Array<HouseType>) {
    return houses.map( b => b.address.street.title);
}

export function createMessages(houses: Array<HouseType>) {
    return houses.map( h => `Hello gaus from ${h.address.street.title}`);
}
