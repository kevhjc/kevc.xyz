import { ContainerProps } from '../lib/interfaces';

export default function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <div className="mx-auto flex w-fit max-w-[650px] items-center justify-center p-8 md:pt-28">
      <main>{children}</main>
    </div>
  );
}
