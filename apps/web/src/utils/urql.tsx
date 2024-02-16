import { cacheExchange } from "@urql/exchange-graphcache";
import { withUrqlClient } from "next-urql";
import { createContext, useEffect, useState } from "react";

import { devtoolsExchange } from "@urql/devtools";
import { Client, fetchExchange } from "urql";

type operationInput = {
  name: string;
  status: string;
  progress: number;
  error?: string;
  description?: string;
  statusType: "loading" | "success" | "error";
};

type operation = {
  timestamp: number;
} & operationInput;

export const refetchContext = createContext({
  refetchTagsOfOwner: () => {},
  setRefetchTagsOfOwner: (refetchTagsOfOwner: () => void) => {},

  refetchTagsOfEtchAndOwner: () => {},
  setRefetchTagsOfEtchAndOwner: (refetchTagsOfEtchAndOwner: () => void) => {},

  refetchEtches: () => {},
  setRefetchEtches: (refetchEtches: () => void) => {},

  refetchEtch: () => {},
  setRefetchEtch: (refetchEtch: () => void) => {},

  refetchTeamEtches: () => {},
  setRefetchTeamEtches: (refetchEtches: () => void) => {},

  refetchTeams: () => {},
  setRefetchTeams: (refetchTeams: () => void) => {},

  refetchOrganisations: () => {},
  setRefetchOrganisations: (refetchOrganisatisns: () => void) => {},

  setAny: (key: string, value: any) => {},

  addOperation: (operations: operation): string => "",
  setOperation: (key: string, operations: Partial<operation>): string => "",
  clearOperations: () => {},
  operations: {} as Record<string, operation>,
});

export const RefetchProvider = ({ children }: any) => {
  const [state, setState] = useState({
    refetchTagsOfOwner: () => {},

    refetchTagsOfEtchAndOwner: () => {},

    refetchEtches: () => {},

    refetchEtch: () => {},

    refetchTeams: () => {},

    refetchTeamEtches: () => {},

    refetchOrganisations: () => {},

    operations: {} as Record<string, operation>,
  });

  const mutations = {
    setRefetchTagsOfOwner: (refetchTagsOfOwner: () => void) => setState({ ...state, refetchTagsOfOwner }),

    setRefetchTagsOfEtchAndOwner: (refetchTagsOfEtchAndOwner: () => void) => setState({ ...state, refetchTagsOfEtchAndOwner }),

    setRefetchEtches: (refetchEtches: () => void) => setState({ ...state, refetchEtches }),

    setRefetchEtch: (refetchEtch: () => void) => setState({ ...state, refetchEtch }),

    setRefetchTeams: (refetchTeams: () => void) => setState({ ...state, refetchTeams }),

    setRefetchTeamEtches: (refetchTeamEtches: () => void) => setState({ ...state, refetchTeamEtches }),

    setRefetchOrganisations: (refetchOrganisations: () => void) => setState({ ...state, refetchOrganisations }),

    addOperation: (operation: operationInput): string => {
      const key = Math.random().toString(36).substring(7);

      setState({ ...state, operations: { ...state.operations, [key]: { ...operation, timestamp: Date.now() } } });

      return key;
    },
    setOperation: (key: string, operation: Partial<operationInput>): string => {
      setState({
        ...state,
        operations: {
          ...state.operations,
          [key]: {
            ...state.operations[key],
            ...operation,
            timestamp: Date.now(),
          } as operation,
        },
      });
      if (operation.statusType === "success" || operation.statusType === "error")
        localStorage.setItem(
          "operations-history",
          JSON.stringify({
            ...state.operations,
            [key]: {
              ...state.operations[key],
              ...operation,
              timestamp: Date.now(),
            } as operation,
          })
        );
      return key;
    },
    clearOperations: () => {
      setState({ ...state, operations: {} });
      localStorage.removeItem("operations-history");
    },

    setAny: (key: string, value: any) => setState({ ...state, [key]: value }),
  };

  useEffect(() => {
    setState({
      ...state,
      operations: Object.entries(JSON.parse(localStorage.getItem("operations-history") || "{}") as Record<string, operation>)
        .filter(([key, el]) => el.timestamp > Date.now() - 1000 * 60 * 60 * 24)
        .reduce((acc, [key, el]) => ({ ...acc, [key]: el }), {}),
    });
  }, []);

  return <refetchContext.Provider value={{ ...mutations, ...state }}>{children}</refetchContext.Provider>;
};

export const urqlConfig = {
  url: process.env.NEXT_PUBLIC_THEGRAPH_URL as string,
  exchanges: [devtoolsExchange, cacheExchange({}), fetchExchange],
};

export const withUrql = (index: any) => withUrqlClient((ssrExchange) => urqlConfig)(index);
