import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    username: string;
    password: string;
    role?: string;  // optional field
    date?: Date;  // optional field
    tickets?: string[];

    comparePassword(password: string): Promise<boolean>;
}