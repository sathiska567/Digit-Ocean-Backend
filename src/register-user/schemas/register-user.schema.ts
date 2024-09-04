import { Schema , Document } from "mongoose";


export interface RegisterUser extends Document {
        email:string,
        password:string,
        name:string,
}


export const RegisterUserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})