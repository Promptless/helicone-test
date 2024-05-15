import { useQuery } from "@tanstack/react-query";
import { TimeFilter } from "../../components/templates/dashboard/dashboardPage";
import { Result } from "../../lib/result";
import { ModelMetric } from "../../lib/api/models/models";
import { FilterLeaf, filterListToTree } from "../lib/filters/filterDefs";

const useModels = (
  timeFilter: TimeFilter,
  limit: number,
  userFilters?: FilterLeaf[]
) => {
  const { data: models, isLoading } = useQuery({
    queryKey: ["modelMetrics", timeFilter, userFilters],
    queryFn: async (query) => {
      return await fetch("/api/models", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filter: userFilters ? filterListToTree(userFilters, "and") : "all",
          offset: 0,
          limit,
          timeFilter,
        }),
      }).then((res) => res.json() as Promise<Result<ModelMetric[], string>>);
    },
    refetchOnWindowFocus: false,
  });

  return { models, isLoading };
};

export { useModels };
