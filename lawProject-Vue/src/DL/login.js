const axios = require('axios');
axios.defaults.withCredentials = true

let target =  process.env.NODE_ENV === 'development'
                ? 'http://lawprojectnode-env.eba-ph3nyhch.eu-west-3.elasticbeanstalk.com'
                : 'http://localhost:8080'
  
export async function login(email,password){

    return await axios.post(`${target}/login`,{email,password}).then(res=>{
        console.log("Logged in")    
        return(res)

    }).catch((errors) => {    
        console.log("Cannot log in")    
        throw errors
    })  
}

export async function logout(){
    return await axios.get(`${target}/logout`).then(res=>{
        console.log("Logged out")    
        return(res)

    }).catch((errors) => {    
        console.log("Cannot log out")    
        throw errors
    })  
}

export async function getUserInfo(){
    return await axios.get(`${target}/user`).then(res=>{
        return res
    }).catch(errors=>{
        throw errors
    })
}

export async function isLoggedIn(){
    return await axios.get(`${target}/loggedIn`).then(res=>{
        console.log(res.data)
        return res.data
    })
}