import { Heading } from "@/components/Heading";
import { TicketItem } from "@/features/ticket/component/ticket-item";
import { getTickets } from "@/features/ticket/queries/get-tickets";

const TicketsPage = async () => {
  const tickets = await getTickets();

  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All of your tickets in one space" />

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
