/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
    /** Fill in here **/
    for (var l = A; l.head; l = l.tail) {
        if (l.tail == null) {
            l.tail = B
            break
        }
    }
    return A
}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {
    /** Fill in here **/
    var temp = []
    var flag = 0
    var l
    for (l = L; l.tail !== null; l = l.tail) {
        if (l.head == start) {
            flag = 1
            for (var i = 0; i < len; i++) {
                if (l.tail !== null) {
                    temp.push(l.head)
                    l = l.tail
                }
            }
            temp.push(l.head)
            break;
        }
    }
    if (!flag) {
        console.log('不存在start')
    }
    return List.list(temp)
}

// module.exports = {
//     dcate: dcate,
//     sub: sub
// };