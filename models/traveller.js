const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
const result = this.journeys.filter((journey) => {
  return journey.transport === transport;
})
return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
const result = this.journeys.filter((journey) => {
  return journey.distance >= minDistance
})
return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
const result = this.journeys.reduce((totalDistance, journey) => {
  return totalDistance + journey.distance;
}, 0);
return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
