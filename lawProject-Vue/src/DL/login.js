const axios = require('axios');

  
export async function login(email,password){

    return await axios.post('/api/login',{email,password}).then(res=>{
        console.log("Logged in")    
        return(res)

    }).catch((errors) => {    
        console.log("Cannot log in")    
        throw errors
    })  
}

export async function logout(){
    return await axios.get('/api/logout').then(res=>{
        console.log("Logged out")    
        return(res)

    }).catch((errors) => {    
        console.log("Cannot log out")    
        throw errors
    })  
}

export async function getUserInfo(){
    return await axios.get('/api//user').then(res=>{
        return res
    }).catch(errors=>{
        throw errors
    })
}