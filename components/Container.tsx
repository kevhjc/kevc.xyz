import { ContainerProps } from '../lib/interfaces';

export default function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <div className="mx-auto flex w-fit max-w-xl flex-wrap break-words p-8 sm:mb-8 sm:mt-24">
      <main>{children}</main>
    </div>
  );
}
