import { Etch } from "@/gql/graphql";

export interface props {
  sort: string;
  setSort: React.Dispatch<string>;
  filter: string;
  setFilter: React.Dispatch<string>;
  searchValue: string;
  setSearchValue: React.Dispatch<string>;
  files: Etch[];
  isLoading: boolean;
}

export interface modal {
  current?: string | undefined;
  list?: string[] | undefined;
}

export interface FileProps extends Etch {
  activeModals: modal;
  setActiveModals: React.Dispatch<modal>;
}

export interface plan {
  price?: string;
  title?: string;
  subtitle?: string;
  period?: string;
  recommended?: boolean;
  features?: string[];
}
