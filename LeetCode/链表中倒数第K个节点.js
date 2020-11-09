/**
 * 第一版
 * 先遍历计数链表的长度
 * 然后再移动指针到n-k步就好了
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let p = head
    let count = 0
    while(p){
        p = p.next
        count++
    }
    p = head
    for(let i = 0; i < count - k; i++){
        p = p.next
    }
    return p
};

/**
 * 第二版
 * 双指针法
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    //先定义两个前后指针
    let front = head
    let back = head
    //前面的指针先走k步
    for(let i = 0; i < k; i++){
        front = front.next
    }
    //同步走，当前面的指针为null时跳出
    while(front){
        front = front.next
        back = back.next
    }
    return back
};

/**
 * 得到
 * 1.移动指针可使用for循环
 * 2.双指针有妙用（虽然我想不到，😢）
 * 
 */