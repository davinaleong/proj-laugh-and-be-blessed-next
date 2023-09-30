import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Link from "next/link"

import { getEntries } from "./../lib/contentful/sdk"

export async function generateStaticParams() {
  const items = await getEntries()

  return items.map((item) => ({
    slug: item.fields.slug,
  }))
}

async function getData(slug: string) {
  const items = await getEntries(slug)
  return items[0]
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const { fields } = await getData(slug)

  return (
    <main className="flow">
      <section className="flow">
        <header className="entry-header">
          <h2 className="fz-500">{`${fields.title}`}</h2>
          <Link href="/" className="btn btn-slide">
            Back
          </Link>
        </header>

        <div className="flow">{documentToReactComponents(fields.content)}</div>
      </section>
    </main>
  )
}
