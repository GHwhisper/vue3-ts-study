// 类型注解
(() => {
    function showMsg(str) {
        return '床前明月光，' + str;
    }
    let msg = '疑是地上霜';
    // let msg = [10, 20, 30]
    console.log(showMsg(msg));
})();
