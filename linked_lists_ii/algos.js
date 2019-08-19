function SLNode(value) {
    this.value = value;
    this.next = null;
}
function SLlist() {
    this.head = null;
    this.back = function () {
        if (!this.head) {
            return null;
        }
        var runner = this.head;
        while (runner.next) {
            runner = runner.next;
        }
        return runner.val;
    }

    this.pushBack = function (value) {
        var newNode = new SLNode(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            } runner.next = newNode;
        }
    }
    this.popBack = function () {
        if (!this.head) {
            return null;
        }
        var returnVal;
        if (!this.head.next) {
            returnVal = this.head.val;
            this.head = null;
            return returnVal;
        }
        var runner = this.head;
        while (runner.next.next) {
            runner = runner.next;
        }
        returnVal = runner.next.val;
        runner.next = null;
        return returnVal;
    }
    this.pushFront = function (value) {
        var oldHead = this.head;
        this.head = new SLNode(value);
        this.head.next = oldHead;
    }

    this.popFront = function () {
        var returnVal = null; if (this.head) {

            returnVal = this.head.val;

            this.head = this.head.next;
        } return returnVal;

    }

    this.contains = function (value) {
        var runner = this.head; while (runner) {
            if (runner.val === value) { return true; } runner = runner.next;
        }
        return false;
    }
    this.removeVal = function (value) {

        if (!this.head) { return false; }

        if (this.head.val === value) {
            this.head = this.head.next; return true;

        } var runner = this.head; while (runner.next) {

            if (runner.next.val === value) {
                runner.next = runner.next.next;

                return true;
            } runner = runner.next;

        } return false;
    }
    this.reverse = function () {
        var runner = this.head;
        var gunner = null;
        var prev = null;
        while (runner != null) {
            gunner = runner.next;
            runner.next = prev;
            prev = runner;
            runner = gunner;
        }
        console.log(prev);
        // this.head.next=null;
        this.head = prev;




    }
    this.display = function () {
        var count = 0;
        var runner = this.head;
        while (runner != null && count < 25) {
            console.log(runner.value);
            runner = runner.next;
            count++;
        }
        console.log("------");
    }

    this.kthLastNode = function (k) {
        var length = 0;
        runner = this.head;
        while (runner != null) {
            length++;
            runner = runner.next;
        }
        length -= k;
        if (length < 1) {
            return null;
        }
        runner = this.head;
        for (var i = 0; i < length; i++) {
            runner = runner.next;
        }
        return runner.value;
    }

    this.kthLastNode2 = function (k) {
        var knode = this.head;
        var runner = this.head;
        for (var i = 1; i < k; i++) {
            if (runner == null) {
                return null;
            }
            runner = runner.next;
        }
        while (runner.next != null) {
            knode = knode.next;
            runner = runner.next;
        }
        return knode.value;
    }
    this.kthLastNodePTR = function (k) {
        var knode = this.head;
        var toReturn = [];
        var runner = this.head;

        for (var i = 1; i < k; i++) {
            if (runner == null) {
                return null;
            }
            runner = runner.next;
        }
        while (runner.next != null) {
            knode = knode.next;
            runner = runner.next;
        }
        toReturn.push(knode);
        toReturn.push(runner);//runner is at the last node.
        return toReturn;
    }

    this.isPalindrome = function () {
        var length = 0;
        var half = [];
        runner = this.head;
        while (runner != null) {
            length++;
            runner = runner.next;
        }
        var halflen = Math.floor(length /= 2);
        runner = this.head;
        for (var i = 0; i < halflen; i++) {
            half.push(runner.value);
            runner = runner.next;
        }
        runner = runner.next;
        if (length % 2 == 1) {
            runner = runner.next;
        }
        while (runner.next != null) {
            console.log(runner.value);
            if (half.pop() != runner.value) {
                return false;
            }
            runner = runner.next;
        }
        return true;
    }
    this.isPalindrome2 = function () {
        runner = this.head;
        var count = 1;
        while (runner.next != null) {
            if (runner.value != this.kthLastNode2(count)) {
                return false;
            }
            count++;
            runner = runner.next;
        }
        return true;
    }
    this.shiftRight = function (shift) {
        runner = this.head;
        var length = 0;

        while (runner != null) {
            length++;
            runner = runner.next;
        }
        shift %= length;
        if (shift == 0) {
            return;
        }
        var list = this.kthLastNodePTR(shift);
        list[1].next = this.head;//stores info of lastnode's next now pointing to head
        this.head = list[0];
        runner = this.head;
        while (runner.next != this.head) {
            runner = runner.next;
        }
        runner.next = null;
        //kthlastnode -> new loop that goes to last node -> lastnode.next = this.head ->this.head = kthlastnode
    }
    this.setUpLoop = function (numOfNodes, start) {
        var count = 1;
        var startNode;
        runner = this.head;
        while (runner.next != null) {
            if (count == start) {
                startNode = runner;
            }
            runner = runner.next;
            count++;
        }
        runner.next = startNode;
        return this;
    }
    this.hasLoop = function () {
        var list = [];
        // var count = 0;
        runner = this.head;
        while (runner != null) {
            for (var i = 0; i < list.length; i++) {
                // if (count > 25) {
                //     return "Loop broken :(";
                // }
                // console.log("inside loop")
                // console.log(list[i] + "--------");
                // console.log(runner);
                if (list[i] === runner) {
                    return true;
                }
                // count++;
            }
            list.push(runner);
            runner = runner.next;
        }
        return false;
    }
    this.breakLoop = function () {
        var list = [];
        // var count = 0;
        runner = this.head;
        while (runner != null) {
            for (var i = 0; i < list.length; i++) {
                // if (count > 25) {
                //     return "Loop broken :(";
                // }
                // console.log("inside loop")
                // console.log(list[i] + "--------");
                // console.log(runner);
                if (list[i] === runner.next) {
                    runner.next = null;
                    return;
                }
                // count++;
            }
            list.push(runner);
            runner = runner.next;
        }
        return;
    }
    this.loopStart = function () {
        var list = [];
        // var count = 0;
        runner = this.head;
        while (runner != null) {
            for (var i = 0; i < list.length; i++) {
                // if (count > 25) {
                //     return "Loop broken :(";
                // }
                // console.log("inside loop")
                // console.log(list[i] + "--------");
                // console.log(runner);
                if (list[i] === runner.next) {
                    return runner.next;
                }
                // count++;
            }
            list.push(runner);
            runner = runner.next;
        }
        return null;
    }

    this.numberOfNodes = function(){
        this.breakLoop();
        var count = 0;
        var runner = this.head;
        while(runner!=null){
            count++;
            runner=runner.next;
        }
        return count;
    }

    this.swapPairs = function(){
        var prev;
        var node1 = this.head;
        var node2 = this.head.next;
        var node3 = this.head.next.next;
        this.head = node2;
        var count = 0;
        while(true){
            // 1,2,3,4,5
            // 2,1,3,4,5
            // WHAT POINTS TO 444444!!!!
            
            node2.next = node1; // 4 will point to 3
            if(node3.next == null){
                node1.next = node3;
            }
            else{
                node1.next = node3.next; // 3 will point to 5
            }
            node1=node3; // 3
            if(node1 == null || node1.next == null){
                return;
            }
            prev = node1;
            node2=node1.next; //4
            console.log(node2);
            node3=node1.next.next; //5
            console.log(node3);
            count++;
            console.log(count);
            if(node3 == null){
                prev.next = node1;
                node2.next = node1;
                node1.next = null;
                return;
            }
        }


        // while(runner.next){
        //     // if(count%2==0){
                
        //         var temp = runner.next; // stores 2
        //         runner.next = temp.next; // switches 1 to 3
        //         temp.next = runner; // links 2 to 1
        //         runner = temp; // now at 2 (2,1,3)
        //         console.log(runner.next);
        //         if(count==0){ // links head in first case scenario
        //             this.head = temp;
        //         }
        //         else{
                    
        //             prev.next = runner.next.next; // node 1 now second node
        //         }
        //         runner = runner.next.next; // moves to nodes 3 
        //     // }
        //     count++;
        //     // runner=runner.next;
        //     if(count>6){
        //         return runner, temp;
        //     }
        // }
    }


}

var ourSLlist = new SLlist();
"12345".split("").forEach(value => ourSLlist.pushBack(value));
ourSLlist.display();
// ourSLlist.setUpLoop(5, 3);
// ourSLlist.display();
// console.log(ourSLlist.numberOfNodes());
ourSLlist.swapPairs();
ourSLlist.display();

