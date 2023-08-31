export interface FooterComponentInterface {
  title: String
  author: String
  year: Number
}

export function FooterComponent({
  title,
  author,
  year,
}: FooterComponentInterface): JSX.Element {
  const now = new Date()
  const yearString: JSX.Element =
    now.getFullYear() !== year ? (
      <>
        {year} &ndash; {now.getFullYear()}
      </>
    ) : (
      <>{year}</>
    )

  return (
    <footer>
      <p className="ta-center fz-300">
        <em>
          {title} &copy; {author}, {yearString}
        </em>
      </p>
    </footer>
  )
}
