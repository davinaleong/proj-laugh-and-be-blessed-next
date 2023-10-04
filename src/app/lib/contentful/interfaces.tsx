import { ContentfulClientApi } from "contentful"

export interface LibContentfulEnvVarsInterface {
  CONTENTFUL_CDN: string
  CONTENTFUL_ACCESS_TOKEN: string
  CONTENTFUL_SPACE_ID: string
  CONTENTFUL_ENVIRONMENT_ID: string
  CONTENTFUL_TYPE_ID: string
  CONTENTFUL_TAG_ID: string
  CONTENTFUL_DELIVERY_API_URL: string
  CONTENTFUL_LIMIT: string
  REVALIDATE: number
}

export interface LibContentfulSdkInterface {
  client: ContentfulClientApi<undefined>
  getEntries(slug: string): any
}

export interface LibContentfulQueryInterface {
  "Content-Type": string
  Authorization: string
  body: LibContentfulSysInteface
}

export interface LibContentfulSysInteface {
  sys: LibContentfulTypeSysInterface
  limit?: number
}

export interface LibContentfulTypeSysInterface {
  id: string
  metadata: LibContentfulMetadataInterface
}

export interface LibContentfulMetadataInterface {
  tags: LibContentfulTagsInterface
}

export interface LibContentfulTagsInterface {
  sys: LibContentfulTagsSysInterface
}

export interface LibContentfulTagsSysInterface {
  type: string
  linkType: string
  id: string
}

export interface LibContentfulGraphQlInterface {
  getJokesData(
    typeId: string,
    tagId: string,
    limit: number,
    revalidate: number | false | undefined
  ): Promise<any>
  getContentfulData(requestInit: RequestInit): Promise<any>
  query(
    body: LibContentfulSysInteface,
    revalidate: number | false | undefined
  ): RequestInit
  sysQuery(
    typeId: string,
    tagId: string,
    limit: number
  ): LibContentfulSysInteface
  typeQuery(typeId: string, tagId: string): LibContentfulTypeSysInterface
  metadataQuery(tagId: string): LibContentfulMetadataInterface
  tagsQuery(tagId: string): LibContentfulTagsInterface
  tagsSysQuery(tagId: string): LibContentfulTagsSysInterface
}

export interface LibContentfulInterface {
  LibContentfulEnvVars: LibContentfulEnvVarsInterface
  LibContentfulSdk: LibContentfulSdkInterface
  LibContentfulGraphQl: LibContentfulGraphQlInterface
}
