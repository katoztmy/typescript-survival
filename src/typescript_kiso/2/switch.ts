// 信号機シミュレーター
enum SignalColor {
  RED = "red",
  YELLOW = "yellow",
  GREEN = "green",
}

// 入力された信号の色に応じて、アクションを返す関数
function getAction(color: SignalColor) {
  switch (color) {
    case SignalColor.RED:
      return "止まれ！";
    case SignalColor.YELLOW:
      return "注意してください！";
    case SignalColor.GREEN:
      return "進め！";
    default:
      return "不明な信号です！";
  }
}

const todayColor = SignalColor.RED;
const action = getAction(todayColor);
console.log(action);
