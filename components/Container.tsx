import { ContainerProps } from '../lib/interfaces';

const Container = (props: ContainerProps) => {
  const { children } = props;

  return (
    <main className="text-md m-auto min-w-0 max-w-[460px] animate-slideFadeIn">
      <div className="flex min-h-screen flex-1 flex-col items-center justify-center gap-y-4 p-8">
        {children}
      </div>
    </main>
  );
};

export default Container;
