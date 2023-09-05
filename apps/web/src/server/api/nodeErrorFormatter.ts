export const formatError = (error: any) => ({
  error: true,
  message: error?.shortMessage?.split("Execution reverted with reason: ")[1],
});
