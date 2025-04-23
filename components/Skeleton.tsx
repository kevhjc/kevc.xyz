import { ComponentProps } from 'react';
import cn from 'classnames';

const Skeleton = ({ className, ...props }: ComponentProps<'span'>) => {
  return (
    <span
      className={cn(
        className,
        'skeleton inline-flex animate-pulse rounded-sm bg-neutral-200 align-middle dark:bg-neutral-500'
      )}
      {...props}
    />
  );
};

export default Skeleton;
