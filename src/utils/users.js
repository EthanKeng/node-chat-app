const users = []

const addUser = ({ id, username, room }) => {
    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // Check for exixting user
    const exixtingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //Validate username
    if (exixtingUser) {
        return {
            error: 'Username is used!'
        }
    }
    // Store User
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user)=> user.id ==id)
    if (index!==-1){
        return users.splice(index,1)[0]
    }
}


const getUser = (id)=>{
    return users.find((u)=> u.id == id)
}

const getUsersInRoom = (room)=>{
    return users.filter((u)=> u.room == room.trim().toLowerCase())
}


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

// addUser({
//     id: 22,
//     username: 'YC',
//     room: 'Taiwan'
// })

// addUser({
//     id: 12,
//     username: 'Maiko',
//     room: 'Japan'
// })

// addUser({
//     id: 32,
//     username: 'Denis',
//     room: 'Taiwan'
// })


// console.log(getUser(12))
// console.log(getUsersInRoom(' Taiwan'))