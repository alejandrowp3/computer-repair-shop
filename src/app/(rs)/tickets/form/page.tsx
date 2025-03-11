import { getTicket } from "@/lib/queries/getTicket";
import { getCustomer } from "@/lib/queries/getCustomer";
import BackButton from "@/components/ui/BackButton";
import * as Sentry from "@sentry/nextjs";

export default async function TicketFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId, ticketId } = await searchParams;
    console.log(customerId, ticketId);

    if (!customerId && !ticketId) {
      return (
        <>
          <h2 className="text-2xl mb-2 font-bold">
            Ticket ID or Customer ID required to load ticket form
          </h2>
          <BackButton title="Go back" variant={"default"} />
        </>
      );
    }

    // New Ticket Form
    if (customerId) {
      const customer = await getCustomer(Number(customerId));

      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2 font-bold">
              Customer ID #{customerId} not found
            </h2>
            <BackButton title="Go back" variant={"default"} />
          </>
        );
      }

      if (!customer.active) {
        return (
          <>
            <h2 className="text-2xl mb-2 font-bold">
              Customer ID #{customerId} is not active
            </h2>
            <BackButton title="Go back" variant={"default"} />
          </>
        );
      }
      return <div>New ticket form</div>;
    }

    // Edit ticket form
    if (ticketId) {
      const ticket = await getTicket(Number(ticketId));

      if (!ticket) {
        return (
          <>
            <h2 className="text-2xl mb-2 font-bold">
              Ticket ID #{ticketId} not found
            </h2>
            <BackButton title="Go back" variant={"default"} />
          </>
        );
      }

      const customer = await getCustomer(ticket.customerId);


      console.log(ticket, customer);

      // put ticket form component here

      return <div>Edit ticket form</div>;
    } else {
      // New ticket form
      return <div>New ticket form</div>;
    }
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);
      throw error;
    }
  }
}
