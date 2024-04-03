import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function PostDetailsSkeleton() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" width={30} height={42} />
      <Skeleton variant="rectangular" width={410} height={32} />
      <Skeleton variant="rounded" width={410} height={80} />
    </Stack>
  );
}
