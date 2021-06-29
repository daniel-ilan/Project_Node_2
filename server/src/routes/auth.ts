import { Router } from "express"
import { registerNewUser, login } from '../controllers/login'

const router: Router = Router()

router.get("/login", login)

router.post("/signup", registerNewUser)

/* router.put("/edit-todo/:id", updateTodo)

router.delete("/delete-todo/:id", deleteTodo) */

export default router