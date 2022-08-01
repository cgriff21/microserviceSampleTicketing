import { Publisher, Subjects, TicketCreatedEvent } from '@cgtickets1/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}