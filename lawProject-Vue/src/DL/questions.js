const axios = require('axios');

  
export async function getQuestions(){

    return await axios.get('http://localhost:3000/questions').then(res=>{
        return res.data.pages
    })
}