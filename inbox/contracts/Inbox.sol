pragma solidity 0.5.0;

contract Inbox {
    string public message;
    constructor(string memory initialMessage) public {
      message = initialMessage;
    }

    function setMessage(string memory _message) public {
      message = _message;
    }
}
