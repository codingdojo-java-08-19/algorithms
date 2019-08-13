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
        var runner = this.head;
        while (runner != null) {
            console.log(runner.value);
            runner = runner.next;
        }
        console.log("------");
    }

    this.kthLastNode = function (k){
        var length = 0;
        runner=this.head;
        while(runner!=null){
            length++;
            runner=runner.next;
        }
        length-=k;
        if(length<1){
            return null;
        }
        runner=this.head;
        for (var i =0;i<length;i++){
            runner=runner.next;
        }
        return runner.value;
    }

    this.kthLastNode2 = function (k){
        var knode = this.head;
        var runner = this.head;
        for(var i = 1;i<k;i++){
            if(runner==null){
                return null;
            }
            runner=runner.next;
        }
        while(runner.next!=null){
            knode=knode.next;
            runner=runner.next;
        }
        return knode.value;
    }

    this.isPalindrome = function (){
        var length = 0;
        var half = [];
        runner=this.head;
        while(runner!=null){
            length ++;            
            runner=runner.next;
        }
        var halflen = Math.floor(length/=2);
        runner = this.head;
        for(var i =0; i<halflen; i++){
            half.push(runner.value);            
            runner=runner.next;
        }
        runner=runner.next;
        if(length%2==1){
            runner=runner.next;
        }
        while(runner.next!=null){
            console.log(runner.value);
            if(half.pop() != runner.value){
                return false;
            }
            runner=runner.next;
        }
        return true;
    }
}

var ourSLlist = new SLlist();
"".split("").forEach(value => ourSLlist.pushFront(value));
ourSLlist.display();
console.log(ourSLlist.isPalindrome());