/**
 * Created by ys on 16-9-30.
 */

//减速运动
function move(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var speed = (target - obj.offsetLeft) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        obj.style.left = obj.offsetLeft + speed + "px";
        if (obj.offsetLeft == target) {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
            return;
        }
    },10);
}

//匀速运动
function move_1(obj, target) {
    clearInterval(obj.timer);
    var speed = target > obj.offsetLeft ? 20 : -20 ;

    obj.timer = setInterval(function(){
        var ret = target - obj.offsetLeft;
        obj.style.left = obj.offsetLeft + speed + "px";
        if (Math.abs(ret) <= speed) {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
            return;
        }
    },10);
}