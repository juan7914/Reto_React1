import React, {useEffect , useState} from 'react';
import {getAllUser, getPageUser,getUserDetails} from '../models/fetchservice'

const Fetchexample = () => {

    useEffect(() => {
         obtainUser();        
    },[]);

    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(12);
    const [selectedUser, setSelectedUser] = useState({});
    const [totalperpage, settotalPerpage] = useState(6);
    const [page, setPage] = useState(2);

    
    const obtainUser = ()=>{
        getAllUser().then((response)=>{
            console.log("All Users", response.data)
                setUsers(response.data)//actualizo el estado del componente de Usuarios
                setPage(response.page)//actualizo el estado del numero de pagina donde estoy
                setTotalUsers(response.total)//actualizo el estado del total de usuarios
                settotalPerpage(response.per_page)//actualiza el estado del total de paginas
        }).catch((err)=>{
            console.log(`Somenthing went wrong ${err}`)
        }).finally(()=>{
            console.log('Ended obtainig users:')
            console.table((users))
        })
    }

       const obtainPageUsers=(page)=>{
        getPageUser(page)        
        .then((response =>{                
                console.log('All Page_users:', response.data)//llamo los datos
                setUsers(response.data)//actualizo el estado del componente de Usuarios
                setPage(response.page)//actualizo el estado del numero de pagina donde estoy
                setTotalUsers(response.total)//actualizo el estado del total de usuarios
                settotalPerpage(response.per_page)//actualiza el estado del total de paginas
                       
        })).catch((err)=>{
            console.log(`Somenthing went wrong ${err}`)
        }).finally(()=>{
        console.log('Ended obtainig users:')        
        });
    }
    const obtainUserDetails=(id)=>{
        getUserDetails(id)
        .then((response)=>{
            console.log("Details of user", response.data)
            setSelectedUser(response.data)
        }).catch((err)=>{
            console.log("Somenting retroving err", err)
        }).finally(()=>{
            console.log('Ended obtainig Details_user:')        
        });
    }
        
    return (
        <div>
            <h2>Users:</h2>          
                 {
                    users.map((user, index)=>{
                        return(
                            <p key={index} onClick={()=>obtainUserDetails(user.id)} >
                            {user.first_name} 
                            {user.last_name}
                            </p>                        )
                    }) 
                 }   
                
                <p>Showing {totalperpage}  users of {totalUsers} in page {page}</p>
                  
                <button onClick={()=>{obtainPageUsers(1)}}>
                    1
                </button>
                <button onClick={()=>{obtainPageUsers(2)}}>
                    2
                </button>

                <div>
                    
                    {
                        selectedUser === {} ?

                        (<h6>Please click on user for to see its Details</h6>) :
                        (
                            <div>
                                <h3>Details of user</h3>                                                       
                                <p>Name:{selectedUser.first_name}</p>
                                <p>Last_Name:{selectedUser.last_name}</p>
                                <p>Email:{selectedUser.email}</p>
                                <img alt='img' src={selectedUser.avatar} style={{width:'300px', height:'300px'}}/>
                            </div>
                        )
                        
                                              
                    }
                </div>
                          
        </div>
    );
}

export default Fetchexample;
