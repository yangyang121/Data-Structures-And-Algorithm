class Hash {
  private table: string[];
  constructor() {
    this.table = new Array(1000);
  }
  hash(data: string) {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    //把字符串转化为字符用来求和之后进行平方运算
    var s = total * total + "";
    //保留中间2位
    var index =
      Number(s.charAt(s.length / 2 - 1)) * 10 +
      Number(s.charAt(s.length / 2)) * 1;
    console.log("Hash Value: " + data + " -> " + index);
    return index;
  }
  solveClash(index: number, value: any) {
    var table = this.table;
    //进行线性开放地址法解决冲突
    for (var i = 0; index + i < 1000; i++) {
      if (table[index + i] == null) {
        table[index + i] = value;
        break;
      }
    }
  }
  insert(key: string, val: any) {
    var index = this.hash(key);
    //把取中当做哈希表中索引
    if (this.table[index] == null) {
      this.table[index] = val;
    } else {
      this.solveClash(index, val);
    }
  }
  get(key: string) {
    var pos = this.hash(key);
    return this.table[pos];
  }
  show() {
    for (var i = 0; i < this.table.length; i++) {
      if (this.table[i] != undefined) {
        console.log(i + ":" + this.table[i]);
      }
    }
  }
}
var someNames = [
  "David",
  "Jennifer",
  "Donnie",
  "Raymond",
  "Cynthia",
  "Mike",
  "Clayton",
  "Danny",
  "Jonathan",
];
var hash = new Hash();
for (var i = 0; i < someNames.length; ++i) {
  hash.insert(someNames[i], someNames[i]);
}

hash.show();
