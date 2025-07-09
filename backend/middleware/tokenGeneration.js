import jwt from 'jsonwebtoken'
import dotenvx from '@dotenvx/dotenvx'; // loads .env automatically

dotenvx.config({path:'../.env'})

export function TokenGeneration(id, username){
    const token = jwt.sign({id,username},process.env.JWT_SECRATE_KEY, {expiresIn: '1h'})
    return token
}

// console.log(token)