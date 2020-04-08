const data = [
    { principal: 2500, time: 1.8 },
    { principal: 1000, time: 5 },
    { principal: 3000, time: 1 },
    { principal: 2000, time: 3 }
];

function interestCalculator(arr) {
    let rate;
    let interest;
    const interestData = [];
    arr.forEach(function(data) {
        if (data.principal >= 2500 && data.time > 1 && data.time < 3) {
            rate = 3;
            interest = (data.principal * rate * data.time) / 100;
            interestData.push({
                'principal': data.principal,
                'rate': rate,
                'time': data.time,
                'interest': interest
            });
        } else if (data.principal >= 2500 && data.time >= 3) {
            rate = 4;
            interest = (data.principal * rate * data.time) / 100;
            interestData.push({
                'principal': data.principal,
                'rate': rate,
                'time': data.time,
                'interest': interest
            });
        } else if (data.principal < 2500 || data.time <= 1) {
            rate = 2;
            interest = (data.principal * rate * data.time) / 100;
            interestData.push({
                'principal': data.principal,
                'rate': rate,
                'time': data.time,
                'interest': interest
            });
        } else {
            rate = 1;
            interest = (data.principal * rate * data.time) / 100;
            interestData.push({
                'principal': data.principal,
                'rate': rate,
                'time': data.time,
                'interest': interest
            });
        }
    })

    console.log(interestData)

    // return interestData;
}

interestCalculator(data)