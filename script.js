//created an array of objects called 'data'
const data = [
    { principal: 2500, time: 1.8 },
    { principal: 1000, time: 5 },
    { principal: 3000, time: 1 },
    { principal: 2000, time: 3 }
];

//created a function interestCalculator() to take in 'data' array 
function interestCalculator(arr) {
    let rate;
    let interest;
    const interestData = [];
    //created a method to execute each element of the 'data' array
    arr.forEach(function(data) {
            //created an if statement to check the conditions to determine the rates
            if (data.principal >= 2500 && data.time > 1 && data.time < 3) {
                rate = 3;
                interest = (data.principal * rate * data.time) / 100;
                //pushed the datas gotten to the empty array 'interestData'
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
        //log the 'interestData' array
    console.log(interestData);

    return interestData;
}
//executed the function and passed the 'data' array 
interestCalculator(data);
