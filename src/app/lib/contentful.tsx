import { createClient } from "contentful"

export const client = createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  environment: `${process.env.CONTENTFUL_ENVIRONMENT_ID}`,
  accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
})

export async function getEntries(slug: String = ``) {
  let object = {
    content_type: `${process.env.CONTENT_TYPE_ID}`,
  }
  if (slug !== "") {
    object = {
      content_type: `${process.env.CONTENT_TYPE_ID}`,
      "fields.slug": `${slug}`,
    }
  }

  const { items } = await client.getEntries(object)
  if (items.length < 0) {
    throw Error(`No items found.`)
  }

  return items
}

export const contentfulLib = {
  client,
  getEntries,
}
