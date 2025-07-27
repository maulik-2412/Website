import {LRUCache} from "lru-cache"

type Options = {
  interval: number
  uniqueTokenPerInterval: number
}

export default function rateLimit({ interval, uniqueTokenPerInterval }: Options) {
  const tokenCache = new LRUCache({
    max: uniqueTokenPerInterval || 500,
    ttl: interval || 60000,
  })

  return {
    check: (res: any, limit: number, token: string = "") =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number) || 0
        if (tokenCount >= limit) {
          reject({ status: 429 })
        } else {
          tokenCache.set(token, tokenCount + 1)
          resolve()
        }
      }),
  }
}
