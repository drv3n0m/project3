

//Problem - 1 
//kilometer to meter
//Start

function kilometerToMeter(kilometer) {
    var meter = kilometer / 1000;
    if (kilometer < 0) {
        return "Distance cannot be negative."
    }
    return meter;
}
//End



//Problem - 2
//Budget Calculator
//Start

function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = 50 * watch;
    var mobilePrice = 100 * mobile;
    var laptopPrice = 500 * laptop;
    var total = watchPrice + mobilePrice + laptopPrice;
    if (watch, mobile, laptop < 0) {
        return "Negative Value can not be displayed"
    }
    return total;
}
//End



//Problem - 3
//Hotel Cost
//Start 

function hotelCost(day) {
    var stayingDay = 0;
    if (day <= 10) {
        stayingDay = day * 100;

    }
    else if (day <= 20) {
        var firstTenDays = 10 * 100;
        var remaining = day - 10;
        var secondTenDays = remaining * 80;
        stayingDay = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = day - 20;
        var afterTwentyDays = remaining * 50;
        var stayingDay = firstTenDays + secondTenDays + afterTwentyDays;

    }
    return stayingDay;
}
//End



//Problem - 4 
//Mega Friend
//Start 

function megaFriend(friendsName) {
    var max = friendsName[0];
    for (var i = 0; i < friendsName.length; i++) {
        var element = friendsName[i];
        if (element.length > max.length) {
            max = element;
        }
        if (max <= 0) {
            return 'Please input something';
        }
    }
    return max;
}
//End