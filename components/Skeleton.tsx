import { ComponentProps } from 'react';
import cn from 'classnames';

export default function Skeleton({
  className,
  ...props
}: ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        className,
        'skeleton inline-block h-[1em] rounded-sm bg-neutral-200 align-middle'
      )}
      {...props}
    />
  );
}
