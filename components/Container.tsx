import { ContainerProps } from '../lib/interfaces';

const Container = (props: ContainerProps) => {
  const { children } = props;

  return (
    <main className="m-auto min-w-0 sm:max-w-[520px]">
      <div className="flex flex-1 flex-col items-center gap-y-4 p-8 sm:min-h-screen sm:justify-center">
        {children}
      </div>
    </main>
  );
};

export default Container;
