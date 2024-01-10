import { Suspense } from "react";
import { TicketsList } from "./TicketList";
import Link from "next/link";
import Loading from "../loading";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>
      <div>
        <Link href="/tickets/create" className="btn-primary py-1 px-2 rounded-md">
          Create New Ticket
        </Link>
      </div>
      <Suspense fallback={<Loading />}>
        <TicketsList />
      </Suspense>
    </main>
  );
}
