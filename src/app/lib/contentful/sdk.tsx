import { ContentfulClientApi, createClient } from "contentful"
import { LibContentfulSdkInterface } from "./interfaces"
import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_TYPE_ID,
  CONTENTFUL_TAG_ID,
  CONTENTFUL_LIMIT,
} from "./variables"
import logValue from "../log/log-value"

export const client: ContentfulClientApi<undefined> = createClient({
  space: CONTENTFUL_SPACE_ID,
  environment: CONTENTFUL_ENVIRONMENT_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
})

export async function getEntries(slug: string = ``) {
  let object = {
    content_type: CONTENTFUL_TYPE_ID,
    limit: Number(CONTENTFUL_LIMIT),
  }
  if (slug !== "") {
    object = {
      content_type: CONTENTFUL_TYPE_ID,
      "fields.slug": slug,
    }
  }
  console.log(`object`, object)

  try {
    const { total, items } = await client.getEntries(object)
    console.log(`total`, total)

    return items
  } catch (error) {
    logValue(`Error`, error)
    return []
  }
}

const LibContentfulSdk: LibContentfulSdkInterface = {
  client,
  getEntries,
}

export default LibContentfulSdk
