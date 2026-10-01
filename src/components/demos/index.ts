import TransactionLog from './TransactionLog.astro';

// Interactive demos a featured project can show. To add one, create a
// component in this folder, register it here under a name, and set
// `demo: <name>` in the project's frontmatter.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const demos: Record<string, any> = {
  'transaction-log': TransactionLog,
};
