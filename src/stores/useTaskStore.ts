import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
export interface Task {
  id: string;
  text: string;
  completed: boolean;
}
interface TaskStoreState {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}
export const useTaskStore = create<TaskStoreState>((set) => ({
  tasks: [],
  addTask: (text) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: uuidv4(), text, completed: false },
      ],
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));