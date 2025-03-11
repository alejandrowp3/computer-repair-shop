import { getCustomer } from "@/lib/queries/getCustomer";
import BackButton from "@/components/ui/BackButton";
import * as Sentry from "@sentry/nextjs";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    console.log(await searchParams);
    const { customerId } = await searchParams;
    console.log(customerId);

    // Edit customer form
    if (customerId) {
      const customer = await getCustomer(Number(customerId));
      console.log(customer);

      if (!customer) {
        console.log("Customer not found");
        return (
          <>
            <h2 className="text-2xl mb-2 font-bold">
              Customer ID #{customerId} not found
            </h2>
            <BackButton title="Go back" variant={"default"} />
          </>
        );
      }
      console.log(customer);

      // put customer form component here

      return <div>Edit customer form</div>;
    } else {
      // New customer form
      console.log("New customer form");
    }
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);
      throw error;
    }
  }
}
