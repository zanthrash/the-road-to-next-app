import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { CardCompact } from "@/components/card-compact";
import { Heading } from "@/components/Heading";
import { Placeholder } from "@/components/placeholder";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/component/ticket-list";
import { TicketUpsertForm } from "@/features/ticket/component/ticket-upsert-form";

// export const dynamic = "force-dynamic";

const TicketsPage = async () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All of your tickets in one space" />

      <CardCompact
        className="w-full max-w-[420px] self-center"
        title="Create Ticket"
        description="A new ticket will be created"
        content={<TicketUpsertForm />}
      />

      <ErrorBoundary fallback={<Placeholder label="Failed to load tickets" />}>
        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default TicketsPage;
