const { TestScheduler } = require("jest");
const { add, sub, checkOdd} = require('./calculator')
const {getResponse}=require('./request')
const {app}=require('./app')
const request=require('supertest')
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

test('testing app',async()=>{
    await request(app).get('/check')
    .expect(200)
})
