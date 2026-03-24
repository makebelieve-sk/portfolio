export type AppErrorPageProps = {
    error: Error & { digest?: string };
    unstable_retry: () => void;
};
