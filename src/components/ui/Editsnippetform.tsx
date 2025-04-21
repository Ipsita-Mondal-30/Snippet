"use client";

import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { saveSnippet } from "../../app/snippet/action/index";

interface Snippet {
  id: number;
  title: string;
  code: string;
  createdAt: Date;
  updatedAt: Date;
}

interface EditsnippetformProps {
  snippet: Snippet;
}

const Editsnippetform: React.FC<EditsnippetformProps> = ({ snippet }) => {
    const [code, setCode] = useState(snippet.code);
  
    const changeEventHandler = (value: string | undefined) => {
      setCode(value || "");
    };
  
    const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);
  
    return (
      <div className="flex flex-col gap-4">
        <form action={saveSnippetAction} className="flex items-center justify-between">
          <h1 className="font-bold text-xl">Your Code Editor:</h1>
          <Button className="bg-black text-white p-4" type="submit">Save</Button>
        </form>
        <Editor
          height="40vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          value={code}
          onChange={changeEventHandler}
        />
      </div>
    );
  };
  
export default Editsnippetform;