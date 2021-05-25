export interface Transaction {
  id: Number;
  source: String;
  target: String;
  amount: Number;
  description: String;
}

/**
 * Find duplicate transactions
 * Given a list of transactions, find and return duplicate transactions. There can be more than one duplicate transactions.
 * A transaction can be called duplicate if it has the same `source`, `target`, `amount` and `description`.
 *
 * This is how a transaction looks like.
 *
 * {
 *   id: 1,
 *   source: 'A',
 *   target: 'B',
 *   amount: 300,
 *   description: 'tikkie'
 * }
 *
 * Note:
 * - Create additional functions if required.
 * - Follow proper coding conventions and best practices.
 * - Make sure existing unit test passes.
 * - Write further unit tests to cover maximum code.
 *
 *
 * @param transactions List of transactions
 * @returns {Transaction[]} List of duplicate transactions
 */
export function isDuplicate(trA: any, trB: any):boolean {
  return ((trA.source === trB.source)
      && (trA.target === trB.target)
      && (trA.amount === trB.amount)
      && (trA.description === trB.description));
}
export function findDuplicateTransactions(transactions: Transaction[]): Transaction[]{
  let duplicatedTransactions:any = [];
  if (transactions.length < 2) return duplicatedTransactions;
  transactions.forEach(transaction => {
      let foundDuplicatedGroup = false;
      for (let duplicatedGroup of duplicatedTransactions) {
          if (isDuplicate(transaction, duplicatedGroup[duplicatedGroup.length - 1])) {
              duplicatedGroup.push(transaction);
              foundDuplicatedGroup = true;
              break;
          }
      }
      if (!foundDuplicatedGroup) duplicatedTransactions.push([transaction]);
  });
  return duplicatedTransactions.filter((duplicatedGroup:any) => duplicatedGroup.length > 1);
}
