export interface CardComponentInterface {
  heading: String
  slug: String
}

export function CardComponent({
  heading,
  slug,
}: CardComponentInterface): JSX.Element {
  return (
    <a href={`${slug}`} className="card bg-full shadow-v-br-400">
      <h3 className="fz-500">{heading}</h3>
    </a>
  )
}
