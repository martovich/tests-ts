test("should take old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];
    // const predicate = (age: number) => {
    //     return age > 90;
    // }
    //const predicate = (age: number) => age > 90;
    const oldAges = ages.filter(f => f > 90);
    //const oldAges = ages.filter(predicate);
    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test("should take courses cheaper 160", () => {
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150}
    ];
    // const cheapPredicate = (course: CourceType) => {
    //     return course.price < 160;
    // }
    //const cheapPredicate = (course: CourceType) => course.price < 160;
    const cheapCourses = courses.filter(f => f.price < 160);
    //const cheapCourses = courses.filter(cheapPredicate);
    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe("CSS");
    expect(cheapCourses[1].title).toBe("REACT");
})

test("get only comleted tasks", () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true}
    ];
    expect(tasks.filter(f => f.isDone).length).toBe(2);
    expect(tasks.filter(f => !f.isDone).length).toBe(2);
    expect(tasks.filter(f => f.isDone)[0].id).toBe(2);
    expect(tasks.filter(f => f.isDone)[1].id).toBe(4);
    expect(tasks.filter(f => !f.isDone)[0].id).toBe(1);
    expect(tasks.filter(f => !f.isDone)[1].id).toBe(3);
})