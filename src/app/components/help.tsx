export interface HelpComponentInterface {
  content: String
}

export function HelpComponent({
  content,
}: HelpComponentInterface): JSX.Element {
  return (
    <section>
      <p>{content}</p>
    </section>
  )
}
