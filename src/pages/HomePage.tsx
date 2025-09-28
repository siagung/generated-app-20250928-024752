import { TaskInput } from '@/components/TaskInput';
import { TaskList } from '@/components/TaskList';
import { ThemeToggle } from '@/components/ThemeToggle';
export function HomePage() {
  return (
    <>
      <ThemeToggle className="fixed top-6 right-6" />
      <div className="min-h-screen bg-background font-sans antialiased">
        <div className="relative isolate">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div 
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3B82F6] to-[#9333ea] opacity-10 dark:opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
              style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            />
          </div>
        </div>
        <main className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col space-y-12">
            <header className="text-center">
              <h1 className="text-5xl sm:text-6xl font-bold font-display tracking-tight text-foreground">
                Zenith
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                A minimalist task manager for clarity and focus.
              </p>
            </header>
            <section>
              <TaskInput />
            </section>
            <section>
              <div className="bg-card border rounded-lg shadow-sm overflow-hidden">
                <TaskList />
              </div>
            </section>
          </div>
        </main>
        <footer className="text-center py-8 text-muted-foreground">
          <p>Built with ❤️ at Cloudflare</p>
        </footer>
      </div>
    </>
  );
}