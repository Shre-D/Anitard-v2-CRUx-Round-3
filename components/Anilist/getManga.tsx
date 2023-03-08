import { useQuery, gql } from "@apollo/client";

export interface Media {
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
  endDate: Date;
  isAdult?: boolean;
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
  Media: Media;
}

const getMangaDetails = gql`
  query($id: Int) {
    Media(idMal: $id, type: MANGA) {
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

export default function getAnime(id: Number, type: "MANGA") {
  const { loading, error, data } = useQuery(getMangaDetails, {
    variables: { id, type },
  });
  if (loading) return <> Loading</>;
  if (error) return <>{JSON.stringify(error)}</>;
  return data;
}
