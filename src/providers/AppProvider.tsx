import { ReactNode } from "react";
import { queryClient } from "@/lib/reactQuery";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MatchMetaProvider } from "@/context/match-meta";
import { MatchStateProvider } from "@/context/match-state";
import { IS_DEVELOPMENT } from "@/config/constants";
import { MSWProvider } from "@/testing/mocks/mswProvider";
import { NotificationProvider } from "@/context/notifications/NotificationProvider";
import { Notifications } from "@/components/notifications";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <NotificationProvider>
      <MatchMetaProvider>
        <MatchStateProvider>
          <QueryClientProvider client={queryClient}>
            {IS_DEVELOPMENT && <ReactQueryDevtools initialIsOpen={false} />}
            <MSWProvider>
              <Notifications />
              {children}
            </MSWProvider>
          </QueryClientProvider>
        </MatchStateProvider>
      </MatchMetaProvider>
    </NotificationProvider>
  );
};
