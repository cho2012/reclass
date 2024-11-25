import { ITask } from "@/app/content/todos/page";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export const todosFatch = async ({
  setTodos,
  setTasks,
}: {
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}) => {
  const token = localStorage.getItem("qid");
  if (token) {
    //todos
    const responseTodos = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}getTodos`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setTodos(responseTodos.data.todos);

    //tasks
    const responseTasks = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}getTasks`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setTasks(responseTasks.data.tasks);
  }
};
