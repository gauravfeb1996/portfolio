export function A({ children, href, className = '', ...props }) {
  return (
    <a className={className} href={href} {...props}>
      {children}
    </a>
  );
}
