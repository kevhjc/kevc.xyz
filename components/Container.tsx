import { ContainerProps } from '../lib/interfaces';

export default function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <div className="flex flex-wrap h-screen max-w-xl p-8 mx-auto break-words w-fit place-items-center">
      <main>{children}</main>
    </div>
  );
}
