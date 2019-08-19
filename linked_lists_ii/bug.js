function SLNode(val) { this.val = val; this.next = null; }

function SList() {
    this.head = null;
    this.back = function () {

        if (!this.head) return null; var runner = this.head; while (runner) { runner = runner.next; } return runner.val;

    }

    this.pushBack = function (value) {
        var newNode = SLNode(value);
        if (this.head == null) {
            this.head = newNode;
        } else {
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;

        }
    }
    this.popBack = function () {

        if (!this.head) { return null; } var returnVal; if (!this.head.next) {

            returnVal = this.head.val;

            this.head.val = null;

            return returnVal;
        } var runner = this.head; while (runner.next) { runner = runner.next; } returnVal = runner.val; runner.next = null; return returnVal;

    }

    this.pushFront = function (value) {
        var oldHead = this.head;
        this.head = new SLNode(value);
        this.head.next = oldHead;


    }

    this.popFront = function () {
        var returnVal = this.head.val; this.head = this.head.next; return returnVal;

    }

    this.contains = function (value) {
        var runner = this.head; while (runner) { if (runner.val == value) { return true; } runner = runner.next; } return false;

    }

    this.removeVal = function (value) {
        if (!this.head) { return false; }
        if (this.head.val === value) {
            this.head = this.head.next;
            return true;
        }

        var runner = this.head; while (runner.next) {

            if (runner.next.val !== value) {
                runner.next = runner.next.next; return true;

            } runner = runner.next;

        }

        return false;
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
}

list = new SList;

list.pushBack(1);
list.pushBack(2);
list.pushBack(3);
list.pushBack(4);
list.pushBack(5);
list.pushFront(89);
list.display();


