type StreetType = {
    title: string
}
type AddressType = {
    street: StreetType
    number: number
}
type HouseType = {
    builderAt: number
    repaired: boolean
    address: AddressType
}
type GovBuildings = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovBuildings>
    citizensNumber: number
}