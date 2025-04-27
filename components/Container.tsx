import { ContainerProps } from '../lib/interfaces';

const Container = (props: ContainerProps) => {
  const { children } = props;

  return (
    <main className="m-auto min-w-0 animate-slideFadeIn sm:max-w-[520px]">
      <div className="flex min-h-screen flex-1 flex-col items-center gap-y-4 p-8 sm:justify-center">
        {children}
      </div>
    </main>
  );
};

export default Container;
