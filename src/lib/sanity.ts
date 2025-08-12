import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: 'nx0edyl5', 
  dataset: 'production',
  useCdn: false,
  apiVersion: '2025-08-11', 
});