/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let p = head
    while(p && p.next){
        if(p.val === p.next.val){
            p.next = p.next.next
        }else{
            p = p.next
        }
    }
    return head
};

/**
 * 得到
 * 本题还算简单，但是要注意边界条件，即需要判断(p和p.next)都存在的情况才继续循环下去
 * 第二就是需要注意当重复元素超过两个以上时的处理，这里用一个条件语句巧妙的解决了这个问题，当相邻元素相等的时候就继续删除下一个节点，只有当不相等的时候（真正的条件）下才指向下一个节点
 */