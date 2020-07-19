export type ManType = {
    name: string
    age: number
}

export const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]

export const dimychTransformator = (man: ManType) => {
    return {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}
export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map( m => `Hello ${m.name.split(" ")[0]}`);
}
// console.log(people.map(p => dimychTransformator(p)));
