 export async function getAllUser(){
    let response = await fetch('https://reqres.in/api/users')
        console.log('Response :', response)
        console.log('Ok?',response.ok)
        console.log('Status',response.status)
//we return in json                    
        return response.json();
    
                        
}

export async function getPageUser(page){
    let response = await fetch(`https://reqres.in/api/users?page=${page}`)
    return response.json()
}

export async function getUserDetails(id){
    let response = await fetch(`https://reqres.in/api/users/${id}`)
    return response.json()
}