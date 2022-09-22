import { ContainerProps } from '../lib/interfaces';

export default function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <div className="flex flex-wrap items-center justify-center max-w-2xl p-8 mx-auto break-words w-fit md:pt-28">
      <main>{children}</main>
    </div>
  );
}
