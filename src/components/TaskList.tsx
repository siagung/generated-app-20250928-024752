import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTaskStore } from '@/stores/useTaskStore';
import { TaskItem } from './TaskItem';
import { CheckCircle2 } from 'lucide-react';
export function TaskList() {
  const tasks = useTaskStore((state) => state.tasks);
  if (tasks.length === 0) {
    return (
      <div className="text-center py-16 px-4 border-2 border-dashed rounded-lg">
        <CheckCircle2 className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-medium text-foreground">All tasks completed!</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Add a new task to get started.
        </p>
      </div>
    );
  }
  return (
    <motion.ul layout className="space-y-0">
      <AnimatePresence>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}