/**
 * Created by ys on 16-9-30.
 */

function addEvent(elem, type, handler){
    if (elem.addEventListener){
        elem.addEventListener(type, handler, false);
        return;
    } else if (elem.attachEvent){
        elem.attachEvent("on" + type, handler);
        return;
    }
}

function removeEvent(elem, type, handler){
    if (elem.removeEventListener){
        elem.removeEventListener(type, handler, false);
        return;
    } else if (elem.detachEvent){
        elem.detachEvent("on" + type, handler);
        return;
    }
}
