const axios = require('axios')

async function getResponse() {
    try {
        return await axios.get('http://localhost:3000/check') 
    }catch (e) { }
    
}
//getResponse().then(result=>console.log(result.data))
module.exports={getResponse}