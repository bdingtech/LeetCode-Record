/**
 * 首先想到不管怎样先push进去再说，然后再reverse
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let arr = []
    let p = head
    while(p){
        arr.push(p.val)
        p = p.next
    }
    return arr.reverse()
};

/**
 * 用unshift会好一点，减少了一侧reverse操作
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let arr = []
    let p = head
    while(p){
        arr.unshift(p.val)
        p = p.next
    }
    return arr
};