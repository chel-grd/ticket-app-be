import { Context } from 'koa';

import { UserModel } from '../../models/user/User.model';

export class User {
    public async getUser(ctx: Context): Promise<void> {
        try {
            const { id } = ctx.state.user;
            const user = await UserModel.findOne({ _id: id }, { password: 0 }).populate('tickets.ticket');
            ctx.body = { message: 'User found successfully', user };
        } catch (error) {
            ctx.body = error;
        }
    }
}