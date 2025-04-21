"use client";

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@radix-ui/react-label'
import { Button } from '@/components/ui/button'
import { useActionState } from 'react'
import * as actions from '@/app/snippet/action'

export default function CreateSnippetPage() {
  const [formStateData, xyz] = useActionState(actions.createSnippet, { message: "" });

  return (
    <form action={xyz} className="flex flex-col gap-4 p-4">
      <div>
        <Label htmlFor="Title">Title</Label>
        <Input type="text" name="title" id="Title" />
      </div>

      <div>
        <Label htmlFor="Code">Code</Label>
        <Textarea name="code" id="Code" />
      </div>

      {formStateData.message && (
        <div className="p-2 bg-red-300 border-2 border-red-600">{formStateData.message}</div>
      )}

      <Button type="submit" className="my-4">
        New
      </Button>
    </form>
  )
}
