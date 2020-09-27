const testVar = {}

function testFunc() {
  return "hi"
}
function  superbowlWin(record){
  const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
  ]
  record.find( r => r === "W" )
}
