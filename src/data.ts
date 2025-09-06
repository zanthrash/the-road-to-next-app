import { Ticket } from "@/features/ticket/types";

export const initialTickets: Ticket[] = [
  {
    id: "1",
    title: "Ticket 1",
    content: "This is the detail for the First awesome ticket",
    status: "DONE" as const,
  },
  {
    id: "2",
    title: "Ticket 2",
    content: "Second ticket",
    status: "OPEN" as const,
  },
  {
    id: "3",
    title: "Ticket 3",
    content: "Third ticket",
    status: "IN_PROGRESS" as const,
  },
];
