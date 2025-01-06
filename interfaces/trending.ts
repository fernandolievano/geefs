export interface Trending {
  searchterm: string;
  path: string;
  image: string;
  name: string;
}
export interface TrendingResponse {
  locale: string;
  tags: Trending[];
}