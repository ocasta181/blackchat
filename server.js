const express = require('express')
const app = express()

const port = 3001
app.use(express.static('build'))

const server = app.listen(port, () => {
    console.log('listening on port '+port)
})

const io = require('socket.io')(server)

io.on('connection', (socket) => {
    // if (player_count < 2){
    //     player_count += 1
    //     // console.log('player ' + player_count + " entered the game")
    //     socket.emit('player_info', {'player_id': player_count})
    // } else {
    //     console.log('too many players!')
    //     socket.emit('warn', "game is full")
    // }
    console.log('connected to socket: ',socket)
    socket.on('message', (data) => {
        io.sockets.emit('message', data)
    })
})

// socket.broadcast.emit()