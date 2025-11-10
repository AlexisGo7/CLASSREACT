"use client";
import { useParams } from "next/navigation";

export default function page() {
  const params = useParams();
  const id = params?.id as string;
  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Product Details #{id}</h1>
        <p className="text-gray-700">ID Recibido: {id}</p>
      </div>
    </>
  );
}
