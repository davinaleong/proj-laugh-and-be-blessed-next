import {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_DELIVERY_API_URL,
  CONTENTFUL_TYPE_ID,
  CONTENTFUL_TAG_ID,
  CONTENTFUL_LIMIT,
  REVALIDATE,
} from "./variables"
import {
  LibContentfulSysInteface,
  LibContentfulTypeSysInterface,
  LibContentfulMetadataInterface,
  LibContentfulTagsInterface,
  LibContentfulTagsSysInterface,
  LibContentfulGraphQlInterface,
} from "./interfaces"

export function sysQuery(
  typeId: string = CONTENTFUL_TYPE_ID,
  tagId: string = CONTENTFUL_TAG_ID,
  limit: number = CONTENTFUL_LIMIT
): LibContentfulSysInteface {
  return {
    sys: typeQuery(typeId, tagId),
    limit,
  }
}

export function typeQuery(
  typeId: string,
  tagId: string
): LibContentfulTypeSysInterface {
  return {
    id: typeId,
    metadata: metadataQuery(tagId),
  }
}

export function metadataQuery(tagId: string): LibContentfulMetadataInterface {
  return {
    tags: tagsQuery(tagId),
  }
}

export function tagsQuery(tagId: string): LibContentfulTagsInterface {
  return {
    sys: tagsSysQuery(tagId),
  }
}

export function tagsSysQuery(tagId: string): LibContentfulTagsSysInterface {
  return {
    type: "Link",
    linkType: "Tag",
    id: tagId,
  }
}

export function requestBuilder(
  query: LibContentfulSysInteface,
  revalidate: number | false | undefined = REVALIDATE
): RequestInit {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: { revalidate },
  }
}

export async function fetchGraphQl(
  query: LibContentfulSysInteface,
  revalidate: number | false | undefined = REVALIDATE
): Promise<any> {
  const response = await fetch(
    CONTENTFUL_DELIVERY_API_URL,
    requestBuilder(query, revalidate)
  )
  const data = await response.json()
  return data
}

const LibContentfulGraphQl: LibContentfulGraphQlInterface = {
  sysQuery,
  typeQuery,
  metadataQuery,
  tagsQuery,
  tagsSysQuery,
  requestBuilder,
  fetchGraphQl,
}

export default LibContentfulGraphQl
