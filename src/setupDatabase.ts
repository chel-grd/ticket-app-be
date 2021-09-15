import mongoose from 'mongoose';

async function databaseSetUp() {
    const connected: boolean = await connectToDatabase();
    if (!connected) {
        process.exit(1);
    }
}

async function connectToDatabase(): Promise<boolean> {
    // const connectionOptions = {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // };

    try {
        await mongoose.connect(`${process.env.TICKET_APP_DB_URL}`);
        console.log('Connected to database');
        return true;
    } catch (error) {
        console.log('Error occurred while connecting to database', error)
        return false;
    }
}

export { databaseSetUp };