export const formatError = (error: any) => {
  return {
    error: true,
    message: error?.shortMessage?.split("Execution reverted with reason: ")[1],
    _error: error,
  };
};
