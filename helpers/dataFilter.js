const passengerCodes = ["C", "G", "J", "L", "Q", "R"];

const dataFilter = (rawData) => {
  const cleanData = rawData
    .filter((item) => passengerCodes.includes(item.serviceTypeCode.iata))
    .map((item) => {
      return {
        airline: item.carrierCode,
        flightNumber: item.flightNumber,
        departure: item.departure,
        arrival: item.arrival,
        effectivePeriod: item.effectivePeriod,
        segmentInfo: item.segmentInfo,
        legDaysOfOperation: item.legDaysOfOperation,
        restrictions: item.restrictions,
        onTimePerformance: item.onTimePerformance,
        automatedCheckIn: item.automatedCheckIn,
        electronicTicketing: item.electronicTicketing,
      };
    });
  return cleanData;
};

module.exports = dataFilter;
