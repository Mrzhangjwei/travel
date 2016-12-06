/**
 *
 * Created by ys on 16-7-13.
 */

function  show(id){
    id.style.display = "block";
}

function  hide(id){
    id.style.display = "none";
}

function scroll() {
    if (window.pageYOffset != null) {
        /*
         * window.pageYOffset　有效
         * */
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    } else if (document.compatMode === "CSS1Compat") {
        /*
         * chrome 浏览器中虽然标准一致, 但是document.documentElement.scrollTop 等于０
         * firefox 有效
         * */
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    } else {
        return {
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }
}