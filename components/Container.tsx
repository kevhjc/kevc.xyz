import { ContainerProps } from '../lib/interfaces';

export default function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <div className="mx-auto flex h-screen w-fit max-w-2xl flex-wrap place-items-center break-words p-4 text-lg leading-loose">
      <main>{children}</main>
    </div>
  );
}
