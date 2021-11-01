
function longestSubstring(string) {
  used = {};
  max_length = 0;
  start = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] in used && start <= used[string[i]]) {
      start = used[string[i]] + 1
    } else {
      max_length = Math.max(max_length, i - start + 1)
    }
    used[string[i]] = i;
    console.log(used, max_length, start);
  }
  return max_length;
}


console.log(longestSubstring('abcadefb'));
