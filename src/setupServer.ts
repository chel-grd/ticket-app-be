import bodyParser from 'koa-bodyparser';
import Koa from 'koa';
import koaCors from 'koa2-cors';
import { Server } from 'socket.io';
import http from 'http';

import { registerRoutes } from './routes';
import { global } from './socket/global';

async function serverSetUp() {
    const server: Koa = new Koa();
    middleWares(server);
    await startServer(server);

}

function middleWares(server: Koa) {

    server.use(koaCors());
    server.use(bodyParser());

    const routes = registerRoutes().routes();
    server.use(routes);
}

async function startServer(server: Koa) {
    try{
        const serverPort = process.env.PORT || 5000;

        const httpServer = new http.Server(server.callback());
        const io = new Server(httpServer, { cors : {origin: '*'} });
        
        global(io);
        httpServer.listen(serverPort, () => {
            console.log(`Server running on port ${serverPort}`);
        })
    } catch (error) {
        console.log(error);
        return error;
    }
}

export { serverSetUp }