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
import logValue from "../log/log-value"

export async function getJokesData(
  typeId: string = CONTENTFUL_TYPE_ID,
  tagId: string = CONTENTFUL_TAG_ID,
  limit: number = CONTENTFUL_LIMIT,
  revalidate: number | false | undefined = REVALIDATE
): Promise<any> {
  return getContentfulData(query(sysQuery(typeId, tagId, limit), revalidate))
}

export async function getContentfulData(
  requestInit: RequestInit
): Promise<any> {
  logValue(`requestInit`, requestInit)

  const response = await fetch(CONTENTFUL_DELIVERY_API_URL, requestInit)
  const data = await response.json()
  return data
}

export function query(
  body: LibContentfulSysInteface,
  revalidate: number | false | undefined = REVALIDATE
): RequestInit {
  logValue(`body`, body)

  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify(body),
    next: { revalidate },
  }
}

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

const LibContentfulGraphQl: LibContentfulGraphQlInterface = {
  getJokesData,
  getContentfulData,
  query,
  sysQuery,
  typeQuery,
  metadataQuery,
  tagsQuery,
  tagsSysQuery,
}

export default LibContentfulGraphQl
