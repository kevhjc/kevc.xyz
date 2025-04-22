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
        'skeleton inline-flex animate-pulse rounded-sm bg-neutral-200 align-middle dark:bg-neutral-500'
      )}
      {...props}
    />
  );
}
