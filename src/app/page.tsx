import NotActiveLabel from "./components/not-active-label";
import ActiveLabel from "./components/active-label";

export default function Home() {
  return (
      <main>
          <h1 className="text-2xl">Home page</h1>
          <ActiveLabel>Active</ActiveLabel>
          <NotActiveLabel>Not Active</NotActiveLabel>

      </main>
  );
}
