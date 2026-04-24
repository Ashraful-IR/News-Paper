import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Newspaper App!</h1>
      <p className="mt-4 text-lg text-gray-600">
        Stay updated with the latest news and articles.
      </p>
    </div>
  );
}
