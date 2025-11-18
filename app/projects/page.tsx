import Header from "../components/Header";

export default function Projects() {
  return (
    <>
      <Header />
      <main className="mt-24 px-8">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow">
            <h2 className="text-2xl font-semibold">Project 1</h2>
            <p className="mt-2">
              Description of your first project goes here.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow">
            <h2 className="text-2xl font-semibold">Project 2</h2>
            <p className="mt-2">
              Description of your second project goes here.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow">
            <h2 className="text-2xl font-semibold">Project 3</h2>
            <p className="mt-2">
              Description of your third project goes here.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
