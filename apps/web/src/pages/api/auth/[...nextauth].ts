// import { getAuthOptions } from "@/server/auth";
// import { NextApiRequest, NextApiResponse } from "next";
// import NextAuth from "next-auth";

// export default async function auth(req: NextApiRequest, res: NextApiResponse) {
//   const authOptions = getAuthOptions(req);

//   // if authOptions is of string, return it as an error
//   if (typeof authOptions === "string") {
//     res.status(500).send(authOptions);
//     return;
//   }

//   if (!Array.isArray(req.query.nextauth)) {
//     res.status(400).send("Bad request");
//     return;
//   }

//   const isDefaultSigninPage = req.method === "GET" && req.query.nextauth.find((value) => value === "signin");

//   // Hide Sign-In with Ethereum from default sign page
//   if (isDefaultSigninPage) {
//     authOptions.providers.pop();
//   }

//   return await NextAuth(req, res, authOptions);
// }


import { getAuthOptions } from "@/server/auth";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";

export default async function auth (req: NextApiRequest, res: NextApiResponse) {
  // console.log("Auth function called", { method: req.method, query: req.query });

  const authOptions = getAuthOptions(req);
  // console.log("Auth options retrieved", { authOptions });

  if (typeof authOptions === "string") {
    // console.error("Auth options error", { error: authOptions });
    res.status(500).send(authOptions);
    return;
  }

  if (!Array.isArray(req.query.nextauth)) {
    // console.error("Bad request: nextauth query is not an array", { query: req.query });
    res.status(400).send("Bad request");
    return;
  }

  const isDefaultSigninPage = req.method === "GET" && req.query.nextauth.find((value) => value === "signin");
  // console.log("Is default signin page", { isDefaultSigninPage });

  if (isDefaultSigninPage) {
    // console.log("Removing last provider for default sign-in page", { providersCount: authOptions.providers.length });
    authOptions.providers.pop();
  }

  // console.log("Calling NextAuth", { providersCount: authOptions.providers.length });
  return await NextAuth(req, res, authOptions);
}