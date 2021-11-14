// rem等比适配配置文件
// 基准大小
const baseSize = 16
import store from '../store/index'

// 判断是否为手机端还是pc端
// function _isMobileFun(){
//     let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
//     return flag;
// }
// console.log(_isMobileFun())
// const haha = _isMobileFun();

function publicFun(){

    // 屏幕宽度
    const windowWidth = document.body.clientWidth
    console.log(windowWidth)

    if (windowWidth <= 768){
        console.log("mobile1")
        // 保存浏览的手机端信息
        store.dispatch('user/setIsMobile', true)
        // 当前页面宽度相对于 750宽的缩放比例，可根据自己需要修改。
        const scale = document.documentElement.clientWidth / 375
        // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
        document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
    }else{
        console.log("pc")
        // 保存浏览的pc端信息
        store.dispatch('user/setIsMobile', false)

        // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
        const scale = document.documentElement.clientWidth / 1920
        // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
        document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
    }
}

// 设置 rem 函数
function setRem () {
    publicFun()
}


// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
    setRem()
}









