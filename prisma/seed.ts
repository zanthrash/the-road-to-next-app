import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

const tickets = [
  {
    title: "Ticket 1",
    content: "This is the detail for the First awesome ticket. From DB",
    status: "DONE" as const,
  },
  {
    title: "Ticket 2",
    content: "Second ticket. From DB",
    status: "OPEN" as const,
  },
  {
    title: "Ticket 3",
    content: "Third ticket. From DB",
    status: "IN_PROGRESS" as const,
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log("DB Seed Started...");

  await prisma.ticket.deleteMany({});
  await prisma.ticket.createMany({ data: tickets });

  const t1 = performance.now();
  console.log(`DB Seed Finished... ${(t1 - t0).toFixed(2)} ms`);
};

seed();
