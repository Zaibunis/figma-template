import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:"017bgzcc",
  dataset:"production",
  apiVersion:"v2025-01-07",
  useCdn: false,
  token:"skR291TJMmpTOtPT0dLebvzc3nGRjEEaPSFXacmMjQiJcDIqrMZEm9bWrUg1OSVxSqt3LvlU2t80eu3OquX3bMSoC50FD8iBZi75XGXJDBflcrxFZnoRFEWiaFFYesJ7CWaPU4E5ufjESJve759zfCzQHROX5xpMkOipczNCvg2tgaYyMB7l"

})
