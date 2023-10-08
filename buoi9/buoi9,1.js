const const goldMedals = [
    { id: "1", name: "Bơi", gold: 7 },
    { id: "2", name: "Boxing", gold: 2 },
    { id: "3", name: "Đạp xe", gold: 1 },
    { id: "4", name: "Đấu kiếm", gold: 4 }
  ];
  
  function getTotalGoldMedal(arr) {
const huyChuongVang = getTotalGoldMedal ((arr, cur) => {
    return arr + cur.gold
}, 0)
  }
