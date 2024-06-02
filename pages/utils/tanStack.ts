import { useQuery } from "@tanstack/react-query";

export default function TanStack() {
    const { isPending, error, data } = useQuery({
        queryKey: ["recipes"],
        queryFn: async () => {
            const res = await fetch(`https://dummyjson.com/recipes/`);
            const data = await res.json();
            const recipes = data.recipes;
            return recipes;
        },
    });
    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return data;
}