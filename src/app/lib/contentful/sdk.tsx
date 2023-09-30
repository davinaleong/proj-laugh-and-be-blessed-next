import { ContentfulClientApi, createClient } from "contentful"
import { LibContentfulSdkInterface } from "./interfaces"
import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_TYPE_ID,
  CONTENTFUL_TAG_ID,
  REVALIDATE,
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
    "metadata.tags.sys.id[all]": CONTENTFUL_TAG_ID,
  }
  if (slug !== "") {
    object = {
      content_type: CONTENTFUL_TYPE_ID,
      "fields.slug": slug,
    }
  }

  try {
    const { items } = await client.getEntries(object)
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
