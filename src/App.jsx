import Stats from "./components/Stats";
import LessonList from "./components/LessonList";
import Container from "./components/Container";

function App() {
  return (
    <div className="bg-gradient-to-br from-cyan-400 to-blue-800 min-h-screen p-3 md:p-10">
      <header>
        <Container addons="w-full max-w-4xl">
          <h1 className="text-center font-bold text-xl sm:text-3xl md:text-4xl text-blue-950">
            Seguimiento de Progreso <span className="text-blue-500">Egg</span>
          </h1>
        </Container>
      </header>
      <main className="flex flex-col-reverse justify-end lg:flex-row">
        <LessonList />
        <Stats />
      </main>
    </div>
  );
}

export default App;
