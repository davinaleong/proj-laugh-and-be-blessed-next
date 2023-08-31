export interface HeaderComponentProps {
  heading: String
  content: String
}

export function HeaderComponent({ heading, content }: HeaderComponentProps) {
  return (
    <header className="flow | border-v-b-solid-50-gray-50">
      <h1 className="fz-700">{heading}</h1>
      <p className="m-v-b-400">{content}</p>
    </header>
  )
}
