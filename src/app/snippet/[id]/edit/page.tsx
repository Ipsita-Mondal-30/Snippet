import React from 'react';


import Editsnippetform from '../../../../components/ui/Editsnippetform';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

const Edit =async ({params}: {params: {id: string}}) => {
    const id  = parseInt((await params).id);
    const snippet=await prisma.snippet.findUnique({
        where:{
            id

        },
    select: {
      id: true,
      title: true,
      code: true,
      createdAt: true,
      updatedAt: true,
    },
  });

    if(!snippet) notFound();
    return (
      <Editsnippetform snippet={snippet} />
    );
};

export default Edit; 