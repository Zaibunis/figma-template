import { createClient } from "next-sanity";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";


const client = createClient({
  projectId: "017bgzcc",
  dataset: "production",
  useCdn: true,
  apiVersion: "v2025-01-07",
});

export async function sanityFetch({query, params ={}}:{query : string ,params?: any}){
    return await client.fetch(query, params)
}