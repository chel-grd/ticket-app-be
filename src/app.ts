import dotenv from 'dotenv';
import { databaseSetUp } from './setupDatabase';
import { serverSetUp } from "./setupServer";

async function init() {
    dotenv.config({});

    await serverSetUp();
    await databaseSetUp();
}

init();