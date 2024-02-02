import { useSession } from "@clerk/nextjs";

export const SessionItem = ({ userSession, index }: any) => {
  // currentSession is the particular session on this device
  const currentSession = useSession();
  const sessionBelongsToThisDevice = currentSession.session?.id === userSession.id;
  const activity = userSession.latestActivity;

  const revokeSession = () => {
    return userSession.revoke();
  };

  return (
    <div className="mb-4 rounded-lg bg-white shadow">
      <div className="flex flex-wrap items-center justify-between border-b px-4 py-3 sm:flex-nowrap">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Device #{index + 1}{" "}
            {sessionBelongsToThisDevice && (
              <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 align-bottom text-sm font-medium text-indigo-700">
                This device
              </span>
            )}
          </h3>
        </div>
        <div className="flex-shrink-0">
          {!sessionBelongsToThisDevice ? (
            <button
              type="button"
              className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={revokeSession}
            >
              Revoke
            </button>
          ) : (
            <div style={{ height: "34px" }} />
          )}
        </div>
      </div>

      <div className="px-4 py-3">
        <div>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-6">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">IP Address</dt>
              <dd className="mt-1 overflow-ellipsis text-gray-900">{activity.ipAddress}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Device type</dt>
              <dd className="mt-1 text-gray-900">{activity.isMobile ? "Mobile" : "Desktop"}</dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Browser</dt>
              <dd className="mt-1 text-gray-900">{activity.browserName}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Operating system</dt>
              <dd className="mt-1 text-gray-900">{activity.deviceType}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Session Id</dt>
              <dd className="mt-1 text-gray-900">{activity.id}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
