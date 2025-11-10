"use client";
import { useParams } from "next/navigation";

export default function page() {
  const params = useParams();
  const usersid = params?.usersid as string;
  const postsid = params?.postsid as string;
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3x1 font-bold">
        Post {postsid} del usuario {usersid}
      </h1>
    </div>
  );
}
