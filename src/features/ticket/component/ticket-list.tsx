import { TicketItem } from "@/features/ticket/component/ticket-item";
import { getTickets } from "@/features/ticket/queries/get-tickets";

export const TicketList = async () => {
  const tickets = await getTickets();
  return (
    <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};
