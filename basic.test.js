const { TestScheduler } = require("jest");
const { add, sub, checkOdd} = require('./calculator')
const {getResponse}=require('./request')


test('add', () => {
    let result = add(2, 3)
    expect(result).toBe(5)
})

test('sub', () => {
    let result = sub(2, 3)
    expect(result).toBe(-1)
})
test('check Even',()=>{
    expect(checkOdd(2)).toBe('even')
})
test('check odd',()=>{
    expect(checkOdd(3)).toBe('odd')
})
test('async test', async () => {
   let result=await getResponse();
   expect(result.status).toBe(200)
})