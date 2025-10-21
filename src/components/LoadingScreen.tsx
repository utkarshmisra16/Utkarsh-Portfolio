import { useEffect, useState } from 'react';

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (progress === 100) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="w-32 h-32 mx-auto">
            <div className="absolute inset-0 rounded-full border-4 border-muted" />
            <div
              className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"
              style={{ animationDuration: '1s' }}
            />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold gradient-text">Loading Portfolio</h2>
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-muted-foreground">{progress}%</p>
        </div>
      </div>
    </div>
  );
};
