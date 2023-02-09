const axios = require('axios');

  
export async function getQuestions(){

    return await axios.get('/api/questions').then(res=>{
        return res.data.pages
    })
}