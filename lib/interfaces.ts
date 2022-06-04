export interface ContainerProps {
  title?: string;
  children: JSX.Element[] | JSX.Element;
}

export interface ProjectProps {
  name: string;
  href: string;
  src: string;
  style: string;
}
