/** Shares responsive widths and gutters via .container in styles/layout/_container.scss; className adds layout-specific styles. */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`container ${className}`}>{children}</div>;
}
