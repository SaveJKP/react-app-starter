export default function App() {
  return (
    <div className="flex justify-center bg-blue-950">
      <div className="flex w-[80%] flex-col justify-start gap-y-6 p-6 lg:w-[70%]">
        <h1 className="w-full bg-amber-100 p-6 font-extrabold">
          React App Starter
        </h1>
        <section className="flex w-full bg-amber-100 p-5">
          <ul className="flex-1 list-inside list-disc">
            <span className="font-semibold">Tech Stack:</span>
            <li>Vite</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>Tailwind</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
