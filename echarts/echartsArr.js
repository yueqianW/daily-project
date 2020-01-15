/**
 * 将数据转换成 echarts 使用的数组数据
 */

let obj = {
    "data": [{
        "timestamp": "1578460751",
        "fluxTimeList": [{
            "linkName": "枝江马店路-电信42",
            "netIfIn": "4649505792",
            "netIfOut": "344950524"
        }, {
            "linkName": "枝江马店路-电信",
            "netIfIn": "4649505792",
            "netIfOut": "344950524"
        }]
    }, {
        "timestamp": "1578460355",
        "fluxTimeList": [{
            "linkName": "枝江马店路-电信42",
            "netIfIn": "4649505792",
            "netIfOut": "344950524"
        }, {
            "linkName": "枝江马店路-电信",
            "netIfIn": "4649505792",
            "netIfOut": "344950524"
        }]
    }]
    // 目标数据
    //   { xAxis: [ '1578460751', '1578460355' ],
    //   line0in: [ '4649505792', '4649505792' ],
    //   line0out: [ '344950524', '344950524' ],
    //   line1in: [ '4649505792', '4649505792' ],
    //   line1out: [ '344950524', '344950524' ] }
}

let arr = obj.data;
let obj1 = {
    xAxis: []
};

for (let i = 0; i < arr.length; i++) {
    if (arr[i].fluxTimeList) {
        for (let j = 0; j < arr[i].fluxTimeList.length; j++) {
            obj1[`line${j}in`] = [];
            obj1[`line${j}out`] = [];
        }
    }
}

function setArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].timestamp) {
            obj1.xAxis.push(arr[i].timestamp);
        } else {
            obj1.xAxis.push('');
        }

        if (arr[i].fluxTimeList) {
            for (let j = 0; j < arr[i].fluxTimeList.length; j++) {
                obj1[`line${j}in`].push(arr[i].fluxTimeList[j].netIfIn);
                obj1[`line${j}out`].push(arr[i].fluxTimeList[j].netIfOut);
            }
        }

    }
    console.log(obj1)
}


setArr(arr)