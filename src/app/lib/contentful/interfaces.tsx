import { ContentfulClientApi } from "contentful"

export interface LibContentfulEnvVarsInterface {
  CONTENTFUL_ACCESS_TOKEN: string
  CONTENTFUL_SPACE_ID: string
  CONTENTFUL_ENVIRONMENT_ID: string
  CONTENT_TYPE_ID: string
}

export interface LibContentfulSdkInterface {
  client: ContentfulClientApi<undefined>
  getEntries(slug: string): any
}
