import { Document, ObjectId } from "mongoose"

export interface ITodo extends Document {
    name: string
    description: string
    status: boolean
}

export interface IMember extends Document {
    name: string
    email: string
    city: string
}

export interface IUser extends Document {
    _id?: ObjectId
    username: string
    password: string
}