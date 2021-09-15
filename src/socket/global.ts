export const global = (io: any) => {
    io.on('connection', (socket: any) => {
        socket.on('refresh', () => {
            io.emit('refreshPage', {});
        });
    });
}