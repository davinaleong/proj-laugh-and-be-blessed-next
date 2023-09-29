import { ContentfulClientApi } from "contentful"

export interface LibContentfulEnvVarsInterface {
  CONTENTFUL_CDN: string
  CONTENTFUL_ACCESS_TOKEN: string
  CONTENTFUL_SPACE_ID: string
  CONTENTFUL_ENVIRONMENT_ID: string
  CONTENT_TYPE_ID: string
  CONTENTFUL_DELIVERY_API_URL: string
}

export interface LibContentfulSdkInterface {
  client: ContentfulClientApi<undefined>
  getEntries(slug: string): any
}

export interface LibContentfulGraphQlInterface {
  requestBuilder(
    query: any,
    revalidate: number | false | undefined
  ): RequestInit
  fetchGraphQl(query: any, revalidate: number | false | undefined): Promise<any>
}
