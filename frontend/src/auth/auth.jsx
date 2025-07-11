import axios from 'axios'

export const LoginHandler = async ( user, pass)=>{

    
    try { const res = await axios.post( 'http://localhost:3000/', {
        user, pass
    }
)
return res             
}
    catch (err) {
        console.log(err, "with frustrations in the loss of the industry of technokrate")
    }
}