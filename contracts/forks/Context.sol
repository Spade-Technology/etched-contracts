// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)
// Forked for Etched Context Management
pragma solidity ^0.8.0;

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    address private _msgSenderOverride;

    constructor() {
        _setContext(address(0));
    }

    function _msgSender() internal view virtual returns (address) {
        return
            _msgSenderOverride == address(0) ? msg.sender : _msgSenderOverride;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }

    function _setContext(address newContext) private {
        _msgSenderOverride = newContext;
    }

    modifier withContext(address newContext) {
        require(
            newContext != address(0),
            "Context: newContext is zero address"
        );
        require(
            newContext != _msgSender(),
            "Context: newContext is current context"
        );

        _setContext(newContext);
        _;
        _setContext(address(0));
    }
}
