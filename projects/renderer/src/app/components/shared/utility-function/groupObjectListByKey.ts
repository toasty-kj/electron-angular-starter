import {
  UpdateHistory,
  UpdateHistoryByDate,
} from '../../header/time-line/update-history.interface'

/** 渡されたオブジェクトの配列について指定されたkeyを使ってオブジェクトをまとめる */
export function groupByKey<T>(updates: T[], key: keyof T) {
  const result = updates.reduce(
    (groups, update) => {
      const date = update[key] as string // Type assertion
      groups[date] = groups[date] || []
      groups[date].push(update)
      return groups
    },
    {} as Record<string, T[]>,
  )
  const keys = Object.keys(result)
  return keys.map((key) => {
    return {
      key: key,
      value: result[key],
    }
  })
}
