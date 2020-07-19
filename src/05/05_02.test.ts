import {CityType} from "../02/02_02";
import {createMessages, getStreetTitlesOfGevernmentsBuildings, getStreetTitlesOfHouses} from "./05_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                builderAt: 2012,
                repaired: true,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                builderAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                builderAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 101,
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    number: 103,
                    street: {
                        title: "South Str"
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test("list of streets titles of governments buildings", () => {
    let streetNames = getStreetTitlesOfGevernmentsBuildings(city.governmentBuildings);
    expect(streetNames.length).toBe(2);
    expect(streetNames[0]).toBe("Central Str");
    expect(streetNames[1]).toBe("South Str");
})

test("list of streets titles", () => {
    let streetNames = getStreetTitlesOfHouses(city.houses);
    expect(streetNames.length).toBe(3);
    expect(streetNames[0]).toBe("White street");
    expect(streetNames[1]).toBe("Happy street");
    expect(streetNames[2]).toBe("Happy street");
})

test("create greeting messages for streets", () => {
    let messages = createMessages(city.houses);
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello gaus from White street");
    expect(messages[1]).toBe("Hello gaus from Happy street");
    expect(messages[2]).toBe("Hello gaus from Happy street");
})