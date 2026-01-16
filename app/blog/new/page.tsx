"use client";

import { useFormState } from "react-dom";
import { createBlog } from "../actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function NewBlog() {
  const [_, action] = useFormState(createBlog, null);

  return (
    <form action={action} className="p-10 max-w-2xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">New Blog</h1>
      <Input name="title" placeholder="Title" />
      <Textarea name="content" placeholder="Content" rows={10} />
      <Button>Create</Button>
    </form>
  );
}
