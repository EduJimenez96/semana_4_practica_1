const Reader = require("../lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
const ExplorerService = require("../lib/services/ExplorerService")

describe("Unit test for ExplorerService class", () => {
  test('filterByMission method', () => {
    const nodeExplorers = ExplorerService.filterByMission(explorers, "node");    
    expect(nodeExplorers.every((explorer) => explorer.mission == "node")).toBe(true);    
  });

  test('getAmountOfExplorersByMission method', () => {
    const amountOfExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
    expect(amountOfExplorers).toBeGreaterThanOrEqual(0);
  });

  test('getExplorersUsernamesByMission method', () =>{
    const nodeExplorerNames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
    
    expect(nodeExplorerNames.length).toBeGreaterThanOrEqual(10);    
  })
})
