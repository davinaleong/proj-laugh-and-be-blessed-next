export interface CardComponentInterface {
  heading: String
  content?: String
}

export function CardComponent({
  heading,
}: CardComponentInterface): JSX.Element {
  return (
    <button type="button" className="card bg-full shadow-v-br-400">
      <h3 className="fz-500">{heading}</h3>
    </button>
  )
}
