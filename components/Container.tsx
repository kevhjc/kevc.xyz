import { ContainerProps } from '../lib/interfaces';

export default function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <main className="text-md m-auto min-w-[200px] max-w-[460px]">
      <div className="flex min-h-screen flex-1 flex-col items-center justify-center gap-y-4 p-8">
        {children}
      </div>
    </main>
  );
}
