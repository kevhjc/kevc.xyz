import { ContainerProps } from '../lib/interfaces';

export default function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <div className="mx-auto flex w-fit min-w-[460px] max-w-[660px] items-center justify-center p-8 md:pt-28">
      <main>{children}</main>
    </div>
  );
}
