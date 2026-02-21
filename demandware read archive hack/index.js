function decode() {

    var File = dw.io.File;
    var FileWriter = dw.io.FileWriter;
    var Bytes = dw.util.Bytes;
    var Encoding = dw.crypto.Encoding;

    var orderNo = '500';
    var folderPath = 'out';

    // archive content
    var base64String = 'UEsDBBQACAgIAPBKRkwAAAAAAAAAAAAAAAAKABMAZXhwb3J0LnR4dHVwDwABjN+yp2V4cG9ydC50eHQVwkEOgjAQBdCrcAHMpzDj6K4pU2gibVJZeBjzz46+vLKye/buNZXI7GmPbL1sXrn6+yy1Mbd+xLN9zQwLaxrwp1AGTDYijFiGMD+B3xsomNVU5M4gCtPHJPwcrwtQSwcIarw5uF0AAABqAAAAUEsBAhQAFAAICAgA8EpGTGq8ObhdAAAAagAAAAoAEwAAAAAAAAAAAAAAAAAAAGV4cG9ydC50eHR1cA8AAYzfsqdleHBvcnQudHh0UEsFBgAAAAABAAEASwAAAKgAAAAAAA==';

    try {
        //
        var result = dw.crypto.Encoding.fromBase64(base64String); // bytes, tati
        var length = result.length; // total number of bytes

        /*var str = '';
        for (let i = 0 ; i < length; i++) {
            //
            var res = result.byteAt(i);
            if (res < 0) {
                res = 255 & res;
            }

            str += String.fromCharCode(res);
        }*/

        length = Math.round(length / 2); // length + 1 of bytes

        var str;
        var word;

        for (let i = 0 ; i < length; i++) {
            //
            var index1 = i * 2;
            var index2 = i * 2 + 1;

            word = cmp2(result.byteAt(index1)) * 256;

            if (index2 <= result.length - 1) {
                word += cmp2(result.byteAt(index2));
            }

            if (empty(str)) {
                str = String.fromCharCode(word);
            }
            else {
                //
                str += String.fromCharCode(word);
            }
        }

        var file = new File(File.IMPEX + File.SEPARATOR + '100.zip');
        var fileWriter = new FileWriter(file, 'UTF-16');
        var binarydata = str;

        fileWriter.write(binarydata);
        fileWriter.flush();
        fileWriter.close();
    }
    catch (e){
        //
        var i = e;
        var j = 0;
    }

}

function cmp2(n) {
    if (n < 0) {
        return 255 & n;
    }

    return n;
}