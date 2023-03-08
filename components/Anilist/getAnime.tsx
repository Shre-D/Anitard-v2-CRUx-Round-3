import { useQuery, gql } from "@apollo/client";

export interface reception {
  id: Number;
  idMal: number | null;
  title: {
    romaji: string;
    english?: string | null;
    native?: string | null;
  } & Record<string, string | null>;
  genres: string[];
  studios: {
    nodes: {
      name: string;
    }[];
  };
  seasonYear: number;
  season: string | null;
  description: string | null;
  averageScore: number;
  status: string;
  format: string;
  trailer: {
    id: string;
    site: string;
  } | null;
}

export interface MediaResponse {
  Media: reception;
}

const getAnimeDetails = gql`
  query($id: Int) {
    Media(idMal: $id, type: ANIME) {
      id
      idMal
      siteUrl
      title {
        romaji
        english
        native
      }
      genres
      studios {
        nodes {
          name
        }
      }
      seasonYear
      season
      coverImage {
        medium
      }
      bannerImage
      volumes
      episodes
      description(asHtml: false)
      averageScore
      status
      format
      trailer {
        id
        site
      }
    }
  }
`;

export default function getAnime(id: Number, type: "ANIME") {
  const { loading, error, data } = useQuery(getAnimeDetails, {
    variables: { id, type },
  });
  if (loading) return loading;
  if (error) return <>{JSON.stringify(error)}</>;
  return data;
}
