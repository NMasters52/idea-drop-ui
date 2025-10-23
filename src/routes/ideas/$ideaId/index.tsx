import { createFileRoute } from "@tanstack/react-router";

const fetchIdea = async (ideaId: string) => {
  const res = await fetch(`/api/ideas/${ideaId}`);

  if (!res.ok) throw new Error("failed to fetch data");

  const data = await res.json();

  return data;
};

export const Route = createFileRoute("/ideas/$ideaId/")({
  component: IdeaDetailsPage,
  loader: ({ params }) => {
    return fetchIdea(params.ideaId);
  },
});

function IdeaDetailsPage() {
  const idea = Route.useLoaderData();

  return <div>{idea.title}</div>;
}
