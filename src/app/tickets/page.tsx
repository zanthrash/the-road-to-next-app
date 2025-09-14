import { Suspense } from "react";
import { Heading } from "@/components/Heading";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/component/ticket-list";

const TicketsPage = async () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All of your tickets in one space" />

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
