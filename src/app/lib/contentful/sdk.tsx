import { createClient } from "contentful"
import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENT_TYPE_ID,
} from "./variables"

export const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  environment: CONTENTFUL_ENVIRONMENT_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
})

export async function getEntries(slug: String = ``) {
  let object = {
    content_type: CONTENT_TYPE_ID,
  }
  if (slug !== "") {
    object = {
      content_type: CONTENT_TYPE_ID,
      "fields.slug": slug,
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
