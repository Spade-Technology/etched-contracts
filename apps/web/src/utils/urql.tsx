import { withUrqlClient } from "next-urql";
import { createContext, useState } from "react";
import { cacheExchange } from "@urql/exchange-graphcache";

import { fetchExchange } from "urql";
import { devtoolsExchange } from "@urql/devtools";

export const refetchContext = createContext({
  refetchEtches: () => {},
  setRefetchEtches: (refetchEtches: () => void) => {},

  refetchTeamEtches: () => {},
  setRefetchTeamEtches: (refetchEtches: () => void) => {},

  refetchTeams: () => {},
  setRefetchTeams: (refetchTeams: () => void) => {},

  refetchOrganisations: () => {},
  setRefetchOrganisations: (refetchOrganisatisns: () => void) => {},

  setAny: (key: string, value: any) => {},
});

export const RefetchProvider = ({ children }: any) => {
  const [state, setState] = useState({
    refetchEtches: () => {},
    setRefetchEtches: (refetchEtches: () => void) => setState({ ...state, refetchEtches }),

    refetchTeams: () => {},
    setRefetchTeams: (refetchTeams: () => void) => setState({ ...state, refetchTeams }),

    refetchTeamEtches: () => {},
    setRefetchTeamEtches: (refetchTeamEtches: () => void) => setState({ ...state, refetchTeamEtches }),

    refetchOrganisations: () => {},
    setRefetchOrganisations: (refetchOrganisations: () => void) => setState({ ...state, refetchOrganisations }),

    setAny: (key: string, value: any) => setState({ ...state, [key]: value }),
  });

  return <refetchContext.Provider value={state}>{children}</refetchContext.Provider>;
};

export const withUrql = (index: any) =>
  withUrqlClient((ssrExchange) => ({
    url: process.env.NEXT_PUBLIC_THEGRAPH_URL as string,
    exchanges: [devtoolsExchange, cacheExchange({}), fetchExchange],
  }))(index);
