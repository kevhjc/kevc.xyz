import { ContainerProps } from '../lib/interfaces';

export default function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <div className="flex flex-wrap h-screen max-w-xl p-8 m-auto break-words rounded-full place-items-center">
      <main>{children}</main>
    </div>
  );
}
