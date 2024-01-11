export type SearchResponseResult = {
  id: number;
  title: string;
  img: string;
  vtype: string;
  nfid: number;
  synopsis: string;
  avgrating: number;
  year: number;
  runtime: number;
  imdbid: string;
  poster: string;
  imdbrating: number;
  top250: number;
  top250tv: number;
  clist: string;
  titledate: string;
  countries: { [key in string]: string };
};
export type SearchResponse = {
  results?: SearchResponseResult[];
  total: number;
  elapse: number;
};
