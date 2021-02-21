const fetch=require('node-fetch')

async function getResponse() {
    try {
        let result = await fetch('http://localhost:3000/check')
        let data = await result.json()
        return data
    }catch (e) { }
    
}
