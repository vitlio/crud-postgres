const db = require('../db/db.js')

class UserController{
    async createUser(req, res){
        const { name } = req.body
        const newUser = await db.query('INSERT INTO users(name) VALUES($1) RETURNING *', [name])
        return res.send(newUser.rows[0])
    }

    async getUsers(req, res){
        const allUsers = await db.query('SELECT name FROM users')
        return res.send(allUsers.rows)
    }

    async updateUser(req, res){
        const { name1, name2 } = req.body
        const updatedUser = await db.query('UPDATE users SET name=$1 WHERE name=$2 RETURNING *', 
                                            [name2, name1])
        return res.send(updatedUser.rows[0])
    }

    async deleteUser(req, res){
        const { name } = req.params
        const deletedUser = await db.query('DELETE FROM users WHERE name=$1 RETURNING *', [name])
        return res.send(deletedUser.rows[0])
    }
}

module.exports = new UserController()