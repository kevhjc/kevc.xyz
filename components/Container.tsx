import { ContainerProps } from '../lib/interfaces';

export default function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <main className="text-md m-4 mx-auto flex h-screen min-w-[200px] max-w-[430px] flex-1 flex-col items-center justify-center gap-y-6 p-4">
      {children}
    </main>
  );
}
