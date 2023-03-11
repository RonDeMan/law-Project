import app from '../utils/axiosConfig'
let target =  process.env.NODE_ENV === 'development'
                ? 'http://localhost:8080'
                : 'http://lawprojectnode-env.eba-ph3nyhch.eu-west-3.elasticbeanstalk.com'

export async function getQuestions(){

    return await app.get(`${target}/questions`).then(res=>{
        return res.data.pages
    })
}