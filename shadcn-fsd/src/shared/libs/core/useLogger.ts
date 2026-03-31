import { useEffect } from 'react';

export const useLogger = (name: string, ...rest: unknown[]) => {
  useEffect(() => {
    console.log(`Component ${name} mounted with props: `, ...rest);

    return () => {
      console.log(`Component ${name} unmounted with props: `, ...rest);
    };
  }, []);

  useEffect(() => {
    console.log(`Component ${name} update with props: `, ...rest);
  });
};
