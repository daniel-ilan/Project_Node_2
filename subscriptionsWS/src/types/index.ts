import { Date, Document } from "mongoose"

export interface IMember extends Document {
    name: string
    email: string
    city: string
}

export interface IMovie extends Document {
    name: string
    genres: string[]
    image: string
    permited: Date
}