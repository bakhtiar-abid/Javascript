function HouseKeeper(yearOfExperience, name, cleaningRepertoire) {
   this.yearOfExperience = yearOfExperience;
   this.name = name;
   this.cleaningRepertoire = cleaningRepertoire;
}
// initialising Object

var houseKeeper1 = new HouseKeeper(12, "Jamie", [
   "bathroom",
   "lobby",
   "bedroom",
]);
