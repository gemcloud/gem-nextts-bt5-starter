// Inline type annotation
// https://www.carlrippon.com/Different-ways-to-strongly-type-function-component-props-with-typescript/

//JS: export default function EmailLink({ string: className }) {
export default function EmailLink({ className }: { className: string }) {
  return (
    <a
      className={className}
      href="mailto:your@yopmail.com?subject=Saying%20hello%20from%20the%20website&body=Hi there,"
    >
      your@yopmail.com
    </a>
  );
}
