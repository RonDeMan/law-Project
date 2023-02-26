const axios = require('axios');
let target =  process.env.NODE_ENV === 'development'
                ? 'http://localhost:8080'
                : 'http://lawprojectnode-env.eba-ph3nyhch.eu-west-3.elasticbeanstalk.com'
  
export async function setAnswer(questionId, answer){
    return await axios.post(`${target}/answers/${questionId}`,{answer}).then(res=>{
        console.log(res)
    })
}

export async function getAllAnswers(){
    return await axios.get(`${target}/answers`).then(res=>{
        console.log(res.data)
        return res.data.map(answer=> {
            let clientAnswer = answer.answer
            if (clientAnswer === "true" || clientAnswer === "false" || clientAnswer == "null"){
                clientAnswer = clientAnswer === "true"? true: false
            }
            return { id: answer.questionId, answer:clientAnswer }
        })
    })
}