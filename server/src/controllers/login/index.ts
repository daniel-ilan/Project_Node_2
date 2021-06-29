import { Response, Request } from "express"
import { IUser } from "../../types"
import User from "../../models/userModel"

const firstTimeUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = req.body;
        const userExists: Boolean = await User.exists({ username: username })
        if (userExists) {
            await User.findOneAndUpdate({ username: username }, { password: password })
            res.status(201).json({ message: "User added" })
        }
        res.status(201).json({ message: "No user found!" })
    } catch (error) {
        throw error
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = req.body;
        const userExists: Boolean = await User.exists({ username: username })
        if (userExists) {
            const user = <IUser>await User.findOne({ username: username }, { password: password })
            res.status(201).json({ user: { ...user } })
        }
        res.status(201).json({ user: null })
    } catch (error) {
        throw error
    }
}

/*
const getUserByUsername = async (username: string): Promise<void> => {
    try {
        const user = await
    } catch (error) {
        throw error
    }
}


const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allTodos: ITodo[] = await Todo.find()
        res.status(200).json({
            message: "Todo updated",
            todo: updateTodo,
            todos: allTodos,
        })
    } catch (error) {
        throw error
    }
}

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(
            req.params.id
        )
        const allTodos: ITodo[] = await Todo.find()
        res.status(200).json({
            message: "Todo deleted",
            todo: deletedTodo,
            todos: allTodos,
        })
    } catch (error) {
        throw error
    }
} */

export { firstTimeUser as registerNewUser }