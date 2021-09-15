import { IUser } from '../../interface/user.interface';
import mongoose from 'mongoose';

import { userSchema } from './User.schema';

const userModel: mongoose.Model<IUser> = mongoose.model<IUser>('User', userSchema, 'User');
export { userModel as UserModel };