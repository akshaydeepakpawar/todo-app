"use client";

import React, { useEffect, useMemo } from "react";
import { useTodos } from "@/hooks/useCreateTodo";
import { useTodoStore } from "@/store/todo-store";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Loader, Loader2 } from "lucide-react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data, isLoading, error } = useTodos();

  const setTodos = useTodoStore((state) => state.setTodos);
  const todos = useTodoStore((state) => state.todos);

  const filter = useTodoStore((state) => state.filter);

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  },[todos,filter]);

  useEffect(()=>{
    if(data) setTodos(data)
  },[data,setTodos])

  if (isLoading) {
    return (
      <Card>
        <CardHeader className="p-8 text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading todos...</p>
        </CardHeader>
      </Card>
    );
  }
  if (error) {
    return (
      <Card>
        <CardHeader className="p-8 text-center">
          <p className="text-destructive">
            Error loading todos: {error.message}
          </p>
        </CardHeader>
      </Card>
    );
  }

  if (filteredTodos.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-muted-foreground">
            {data?.length === 0
              ? "No todos yet. Create your first one!"
              : "No todos match the current filter."}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
