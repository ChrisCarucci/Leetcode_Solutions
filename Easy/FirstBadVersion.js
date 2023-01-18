//Runtime:  64ms    Beats:  75.94%    Memory:  41.8MB    Beats:  50.17%

const solution = function(isBadVersion) {
    return function (n) {
    let start = 1;
    let end = n;

    while (start < end) {
      const mid = Math.floor(start + (end - start) / 2);
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return end;
  };
};