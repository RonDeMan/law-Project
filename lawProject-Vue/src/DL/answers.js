const axios = require('axios');

  
export async function setAnswer(questionId, answer){
    return await axios.post(`/api/answers/${questionId}`,{answer}).then(res=>{
        console.log(res)
    })
}

export async function getAllAnswers(){
    return await axios.get('/api/answers').then(res=>{
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