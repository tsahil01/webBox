import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center min-h-screen p-5">
        <h1 className="text-7xl font-bold">Hello World</h1>
        <Button>Click me</Button>
      </div>
    </>
  );
}
