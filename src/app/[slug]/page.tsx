import styles from "./page.module.css"
import { createClient } from "contentful"

const client = createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  environment: `${process.env.CONTENTFUL_ENVIRONMENT_ID}`,
  accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
})

export async function generateStaticParams() {
  const { items } = await client.getEntries({
    content_type: `${process.env.CONTENT_TYPE_ID}`,
  })

  return items.map((item) => ({
    slug: item.fields.slug,
  }))
}

export async function getData({ slug }) {
  const { items } = await client.getEntries({
    content_type: `${process.env.CONTENT_TYPE_ID}`,
    "fields.slug": slug,
  })

  if (items.length < 0) {
    throw Error(`Item not found.`)
  }

  return items[0]
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { fields } = await getData(params)

  return (
    <main className="flow">
      <section>
        <h2 className="fz-500">{fields.title}</h2>
      </section>
    </main>
  )
}
