import { createFileRoute } from "@tanstack/react-router";

import SalesPage from "@/components/sales-page";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <SalesPage />;
}
