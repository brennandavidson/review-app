import { notFound } from "next/navigation";
import { getClient, getAllClientSlugs } from "@/data/clients";
import ClientAppPage from "@/components/ClientAppPage";

export function generateStaticParams() {
  return getAllClientSlugs().map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const client = getClient(slug);

  if (!client) {
    notFound();
  }

  return <ClientAppPage client={client} />;
}
