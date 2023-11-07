import { withUrqlClient } from "next-urql";
import { createContext, useState } from "react";
import { cacheExchange } from "@urql/exchange-graphcache";

import { fetchExchange } from "urql";
import { devtoolsExchange } from "@urql/devtools";

type operation = {
  name: string;
  status: string;
  progress: number;
  error?: string;
  statusType: "loading" | "success" | "error";
};

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

  addOperation: (operations: operation): string => "",
  setOperation: (key: string, operations: Partial<operation>): string => "",
  operations: {} as Record<string, operation>,
});

export const RefetchProvider = ({ children }: any) => {
  const [state, setState] = useState({
    refetchEtches: () => {},

    refetchTeams: () => {},

    refetchTeamEtches: () => {},

    refetchOrganisations: () => {},

    operations: {} as Record<string, operation>,
  });

  const mutations = {
    setRefetchEtches: (refetchEtches: () => void) => setState({ ...state, refetchEtches }),

    setRefetchTeams: (refetchTeams: () => void) => setState({ ...state, refetchTeams }),

    setRefetchTeamEtches: (refetchTeamEtches: () => void) => setState({ ...state, refetchTeamEtches }),

    setRefetchOrganisations: (refetchOrganisations: () => void) => setState({ ...state, refetchOrganisations }),

    addOperation: (operations: operation): string => {
      const key = Math.random().toString(36).substring(7);
      console.log("aze");
      console.log({ ...state.operations }, operations);
      setState({ ...state, operations: { ...state.operations, [key]: operations } });
      return key;
    },
    setOperation: (key: string, operation: Partial<operation>): string => {
      setState({
        ...state,
        operations: {
          ...state.operations,
          [key]: {
            ...state.operations[key],
            ...operation,
          } as operation,
        },
      });
      return key;
    },

    setAny: (key: string, value: any) => setState({ ...state, [key]: value }),
  };

  return <refetchContext.Provider value={{ ...mutations, ...state }}>{children}</refetchContext.Provider>;
};

export const withUrql = (index: any) =>
  withUrqlClient((ssrExchange) => ({
    url: process.env.NEXT_PUBLIC_THEGRAPH_URL as string,
    exchanges: [devtoolsExchange, cacheExchange({}), fetchExchange],
  }))(index);
