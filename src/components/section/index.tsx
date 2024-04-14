import { DetailedHTMLProps, HTMLAttributes } from "react";

export default function Section({
  title,
  description,
  children,
  ...props
}: {
  title: string;
  description?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  return (
    <section {...props}>
      <h2 className="text-2xl font-bold">{title}</h2>
      {!!description && (
        <p className="text-gray-500 dark:text-gray-300"> {description}</p>
      )}
      {children}
    </section>
  );
}
