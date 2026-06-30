function canAttendAll(meetings) {
  const sorted = [...meetings].sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i][0] < sorted[i - 1][1]) return false;
  }
  return true;
}

function minMeetingRooms(meetings) {
  const starts = meetings.map(m => m[0]).sort((a, b) => a - b);
  const ends = meetings.map(m => m[1]).sort((a, b) => a - b);
  let rooms = 0, maxRooms = 0, i = 0, j = 0;
  while (i < starts.length) {
    if (starts[i] < ends[j]) {
      rooms++;
      i++;
    } else {
      rooms--;
      j++;
    }
    maxRooms = Math.max(maxRooms, rooms);
  }
  return maxRooms;
}