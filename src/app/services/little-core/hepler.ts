export function playerStatsPremap(playersStats: any) {
  if (playersStats?.data?.length > 100) throw new Error('wrong API params');
}
