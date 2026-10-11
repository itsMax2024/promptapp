import PromptForm from "../components/PromptForm";

export default function CreatePromptPage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-8 text-3xl font-bold">Create Prompt</h1>

      <PromptForm />
    </main>
  );
}
