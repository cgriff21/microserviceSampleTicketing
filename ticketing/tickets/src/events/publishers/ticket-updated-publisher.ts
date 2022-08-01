import { Publisher, Subjects, TicketUpdatedEvent } from '@cgtickets1/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}