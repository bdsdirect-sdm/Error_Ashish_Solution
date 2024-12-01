import { Server } from 'socket.io'
import { joinRoom, sendMessage } from './event'

export let io: Server

export const setSocket = (httpServer: any) => {

    io = new Server(httpServer, {
        cors: {
            origin: "*",
            methods: ["GET", "POST", "PUT"],
            credentials: true
        }
    })

    io.on('connection', (socket) => {

        socket.on('joinchat', async (data: any) => {
        });

        socket.on('send_message', async (message: any) => {
            sendMessage(socket, message);
        });

        socket.on('disconnect', () => {
        });
    });
}