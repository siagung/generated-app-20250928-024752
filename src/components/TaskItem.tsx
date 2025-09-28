import React from 'react';
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useTaskStore, Task } from '@/stores/useTaskStore';
import { cn } from '@/lib/utils';
interface TaskItemProps {
  task: Task;
}
export function TaskItem({ task }: TaskItemProps) {
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };
  return (
    <motion.li
      layout
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="group flex items-center p-4 border-b transition-colors hover:bg-accent"
    >
      <Checkbox
        id={`task-${task.id}`}
        checked={task.completed}
        onCheckedChange={() => toggleTask(task.id)}
        className="h-6 w-6"
        aria-labelledby={`task-label-${task.id}`}
      />
      <label
        id={`task-label-${task.id}`}
        htmlFor={`task-${task.id}`}
        className={cn(
          'ml-4 flex-1 text-lg cursor-pointer transition-colors',
          task.completed ? 'line-through text-muted-foreground' : 'text-foreground'
        )}
      >
        {task.text}
      </label>
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
        onClick={() => deleteTask(task.id)}
        aria-label={`Delete task: ${task.text}`}
      >
        <Trash2 className="h-5 w-5" />
      </Button>
    </motion.li>
  );
}