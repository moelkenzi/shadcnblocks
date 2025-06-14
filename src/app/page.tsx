import { Button } from "@/registry/new-york/ui/button";

const HomePage = () => {
  return (
    <main className="grid flex-1 items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <div className="flex flex-col items-center gap-[32px] sm:items-start">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-center text-2xl">
            a NextJs Starter Project 📦 for{" "}
          </h1>
          <Button className="cursor-pointer">Get Started 🚀</Button>
        </div>
      </div>
    </main>
  );
};
export default HomePage;
