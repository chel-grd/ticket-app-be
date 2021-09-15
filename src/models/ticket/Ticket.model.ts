import mongoose from 'mongoose';

import { ITicket } from '../../interface/ticket.interface';

import { ticketSchema } from './Ticket.schema';

const ticketModel: mongoose.Model<ITicket> = mongoose.model<ITicket>('Ticket', ticketSchema, 'Ticket');
export { ticketModel as TicketModel };