function checkedCheckboxCount(checkboxClassName) {
    //遍历检验有多少checkbox被选中
    var count = 0;

    var checkboxes = $("." + checkboxClassName);

    for (var i = 0; i < checkboxes.length; i++) {
        var checkbox = checkboxes[i];
        if (checkbox != null && checkbox.checked) {
            count++;
        }
    }

    if (count === 0) {
        $.alert({
            title: '提示!',
            content: '请选择要操作的元素!',
        });
        return false;
    } else if (count === 1) {
        return true;
    } else {
        $.alert({
            title: '提示!',
            content: '对不起，一次只能对一个元素进行操作!',
        });
        return false;
    }
}

//只能对单个元素进行操作时，返回的index
function getSingleCheckboxIndex(checkboxClassName) {
    var index = 0;
    var checkboxes = $("." + checkboxClassName);

    for (var i = 0; i < checkboxes.length; i++) {
        var checkbox = checkboxes[i];
        if (checkbox != null && checkbox.checked) {
            index = i;
            break;
        }
    }
    return index;
}

//对多个元素进行操作时，返回的index值，返回值是数组
function getMultiCheckboxIndex(checkboxClassName) {
    var indexArr = new Array();
    var checkboxes = $("." + checkboxClassName);

    var count = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        var checkbox = checkboxes[i];
        if (checkbox != null && checkbox.checked) {
            indexArr[count++] = i;
        }
    }

    return indexArr;
}

function addCallback(res) {
    if (res.code === 200) {
        $.alert({
            title: '提示!',
            content: '添加成功!'
        });
    } else {
        $.alert({
            title: '错误!',
            content: '添加失败，请检查操作'
        });
    }
}

/**
 * 添加回调函数同时伴随模态框操作
 */
function addCallbackWithModal(res, modal) {
    if (res.code === 200) {
        $.alert({
            title: '提示!',
            content: '添加成功!'
        });
        $(modal).modal('toggle');
    } else {
        $.alert({
            title: '错误!',
            content: '添加失败，请检查操作'
        });
    }
}

function deleteCallback(res) {
    if (res.code === 200) {
        $.alert({
            title: '提示!',
            content: '删除成功!'
        });
    } else {
        $.alert({
            title: '错误!',
            content: '删除失败，请检查操作'
        });
    }
}

function updateCallback(res) {
    if (res.code === 200) {
        $.alert({
            title: '提示!',
            content: '更新成功!'
        });
    } else {
        $.alert({
            title: '错误!',
            content: '更新失败，请检查操作'
        });
    }
}

function updateCallbackWithModal(res, modal) {
    if (res.code === 200) {
        $.alert({
            title: '提示!',
            content: '更新成功!'
        });
        $(modal).modal('toggle');
    } else {
        $.alert({
            title: '错误!',
            content: '更新失败，请检查操作'
        });
    }

}


function startTaskCallback(res) {

    if (res.code === 200) {
        lightyear.loading('hide');
        lightyear.notify('任务已停止!', 'success', 1000);
    } else {
        lightyear.loading('hide');
        lightyear.notify('任务停止失败~', 'danger', 1000);
    }


    // if(res.code === 200){
    //     $.alert({
    //         title: '提示!',
    //         content: '任务启动成功!'
    //     });
    // }else{
    //     $.alert({
    //         title: '错误!',
    //         content: '任务启动失败!'
    //     });
    // }
}

function stopTaskCallback(res) {
    lightyear.loading('show');
    // 假设ajax提交操作

    if (res.code === 200) {
        lightyear.loading('hide');
        lightyear.notify('任务已停止!', 'success', 3000);
    } else {
        lightyear.loading('hide');
        lightyear.notify('任务停止失败~', 'danger', 3000);
    }

    // if(res.code === 200){
    //     $.alert({
    //         title: '提示!',
    //         content: '任务已停止!'
    //     });
    // }else{
    //     $.alert({
    //         title: '错误!',
    //         content: '任务未停止!'
    //     });
    // }
}