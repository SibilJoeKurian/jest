const { TestScheduler } = require("jest");
const {add,sub} = require('./calculator')
test('add', () => {
    let result = add(2, 3)
    expect(result).toBe(5)
})

test('sub',()=>{
    let result=sub(2,3)
    expect(result).toBe(-1)
})