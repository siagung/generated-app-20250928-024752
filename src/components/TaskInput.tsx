import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTaskStore } from '@/stores/useTaskStore';
import { Plus } from 'lucide-react';
export function TaskInput() {
  const [taskText, setTaskText] = useState('');
  const addTask = useTaskStore((state) => state.addTask);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedText = taskText.trim();
    if (trimmedText) {
      addTask(trimmedText);
      setTaskText('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
      <Input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 h-12 text-lg focus:ring-2 focus:ring-primary/50"
        aria-label="New task input"
      />
      <Button 
        type="submit" 
        className="h-12 px-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        aria-label="Add task"
      >
        <Plus className="h-5 w-5 mr-2" />
        Add
      </Button>
    </form>
  );
}