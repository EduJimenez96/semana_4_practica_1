class ExplorerService {
  static filterByMission(explorers, mission) {
    return explorers.filter((explorer) => explorer.mission == mission);
  }

  static getAmountOfExplorersByMission(explorers, mission) {    
    var filteredExplorers = explorers.filter((explorer) => explorer.mission == mission);    

    return filteredExplorers.length;
  }

  static getExplorersUsernamesByMission(explorers, mission) {
    var filteredExplorer = explorers.filter((explorer) => explorer.mission == mission);

    return filteredExplorer.map((explorer) => explorer.githubUsername);
  }
}

module.exports = ExplorerService;
