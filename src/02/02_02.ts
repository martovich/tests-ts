export type StreetType = {
    title: string
}
export type AddressType = {
    street: StreetType
    number: number
}
export type HouseType = {
    id?: number
    builderAt: number
    repaired: boolean
    address: AddressType
}
export type GovBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovBuildingsType>
    citizensNumber: number
}