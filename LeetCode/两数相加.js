/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    l3 = new ListNode(0)
    let p1 = l1
    let p2 = l2
    let p3 = l3
    let carry = 0
    while(p1 || p2){
        const v1 = p1 ? p1.val : 0
        const v2 = p2 ? p2.val : 0
        let val = v1 + v2 + carry
        //取十位数
        carry = Math.floor(val / 10)
        //取个位数加入链表
        p3.next = new ListNode(val % 10)
        //往后移动
         if(p1){
             p1 = p1.next
         }       
         if(p2){
             p2 = p2.next
         }
         p3 = p3.next
    }
    if(carry){
        p3.next = new ListNode(carry)
    }
    return l3.next

};

/**
 * 得到
 * 1.遍历链表时，应该定义一个指针，让指针在链表上移动，最后再返回链表
 * 2.Math.floor是向下取整
 * 3. 除10 可得十位数
 * 3. %可得各位数
 */