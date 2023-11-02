export type orgUser = {
  id: string;
  name: string;
  role: "none" | "member" | "admin";
};

export type teamUser = {
  id: string;
  name: string;
  role: "none" | "read" | "readWrite";
};
