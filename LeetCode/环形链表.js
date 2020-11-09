/**
 * 第一版
 * 比较简陋
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head == null || head.next == null){
        return false
    }
    //构造两个快慢指针
    let front = head
    let back = head.next
    while(front != back){
        if(front == null || back.next == null || back.next.next == null){
            return false
        }
        front = front.next
        back = back.next.next
    }
    return true
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 第二版优化
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let front = head
    let back = head
    while(back && front && front.next){
        front = front.next.next
        back = back.next
        if(front == back){
            return true
        }
    }
    return false
};

/**
 * 得到
 * 1.判断front.next存在的话即代表front.next.next有值
 * 2.合理设计while
 */