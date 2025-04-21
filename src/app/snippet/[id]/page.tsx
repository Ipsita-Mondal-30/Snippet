import React from 'react'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import * as actions from '@/app/snippet/action'

const SnippetDetailPage = async({params}: {params: {id: string}}) => {
    const id  = parseInt((await params).id);
    const snippet=await prisma.snippet.findUnique({
        where:{
            id
        }
    })
    if(!snippet){
        return <div>Snippet not found</div>
    }
    const deleteSnippetaction=actions.deleteSnippet.bind(null,snippet.id);
  return (
    <div className="flex flex-col gap-4 p-4">
  <div className="flex items-center justify-between">
    <h1 className="font-bold text-xl ">{snippet.title}</h1>
    <div className="flex items-center gap-5">
      <Link href={`/snippet/${snippet.id}/edit`}><Button className="bg-black text-white">Edit</Button></Link>
      <form action={deleteSnippetaction} className="flex items-center justify-between">
      <Button className="bg-red-500" variant={"destructive"} type="submit">Delete</Button></form>
    </div>
  </div>
  <pre className="p-5 bg-gray-300 rounded border-gray-500 gap-8">
    <code>{snippet.code}</code>
  </pre>
</div>

  )
}

export default SnippetDetailPage