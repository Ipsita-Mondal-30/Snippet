import Image from "next/image";
import {Button }from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const snippets=await prisma.snippet.findMany();
  return (
   <div>
    <h1 className="font-bold text-4xl">Home</h1>
    <div className="flex items-center justify-between ">
      <h1>Snippets</h1>
     <Link href="/snippet/new" className="flex items-center justify-center">
     <Button className="bg-black text-white ">New</Button>
</Link>

    </div>
    <div>
    {
      snippets.map((snippet)=>
      <div key={snippet.id} className="flex flex-col gap-4 p-4 border-b bg-gray-300"> 
        <h1>{snippet.title}</h1>
        <Link href={`/snippet/${snippet.id}`} className="flex items-center justify-center">
          <Button variant= {'link'} className="bg-black text-white ">View</Button>
        </Link>
      </div> 
    )
    }
    </div>
   </div>
  );
}
