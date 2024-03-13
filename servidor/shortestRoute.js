function calculateDistance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

function permute(arr) {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
        (acc, item, i) =>
            acc.concat(
                permute([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])
            ),
        []
    );
}

function findShortestRoute(data) {
    const permutations = permute(data.slice(1)); // ignore the first point
    let shortestDistance = Infinity;
    let shortestRoute = [];

    for (let i = 0; i < permutations.length; i++) {
        let distance = 0;
        let route = [data[0], ...permutations[i], data[0]]; // start and end at the first point

        for (let j = 0; j < route.length - 1; j++) {
            distance += calculateDistance(route[j], route[j + 1]);
        }

        if (distance < shortestDistance) {
            shortestDistance = distance;
            shortestRoute = route;
        }
    }

    return { shortestDistance, shortestRoute };
}

module.exports = findShortestRoute;