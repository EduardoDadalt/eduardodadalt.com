import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function RepoCardsLoading() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <Card key={index} className="size-full">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-4 w-[150px]" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-4 w-[250px]" />
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </>
  );
}
