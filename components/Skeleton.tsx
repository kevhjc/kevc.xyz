import { ComponentProps } from 'react';
import cn from 'classnames';

const Skeleton = ({ className, ...props }: ComponentProps<'span'>) => {
  return (
    <span
      className={cn(
        'my-px flex h-4 animate-pulse justify-center rounded-sm bg-neutral-300 align-middle dark:bg-neutral-600',
        className
      )}
      {...props}
    />
  );
};

export default Skeleton;
