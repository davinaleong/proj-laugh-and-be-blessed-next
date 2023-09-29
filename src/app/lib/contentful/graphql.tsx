import {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENT_TYPE_ID,
  CONTENTFUL_DELIVERY_API_URL,
} from "./variables"
import { LibContentfulGraphQlInterface } from "./interfaces"

export function requestBuilder(
  query,
  revalidate: number | false | undefined = 1000
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
  query,
  revalidate: number | false | undefined = 1000
): Promise<any> {
  const response = await fetch(
    CONTENTFUL_DELIVERY_API_URL,
    requestBuilder(query, revalidate)
  )
  const data = await response.json()
  return data
}

const LibContentfulGraphQl: LibContentfulGraphQlInterface = {
  requestBuilder,
  fetchGraphQl,
}

export default LibContentfulGraphQl
