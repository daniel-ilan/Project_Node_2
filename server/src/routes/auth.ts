import { Router } from 'express';
import { signUp, login } from '../controllers/auth';

const router: Router = Router();

router.post('/login', login);

router.post('/signup', signUp);

/* router.put("/edit-todo/:id", updateTodo)

router.delete("/delete-todo/:id", deleteTodo) */

export default router;
