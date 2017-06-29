import React, {Component} from 'react'

import Styles from './AccountList.css'

export default class AccountList extends Component {
  _renderAccounts = (accounts) => {
    return accounts.sort((a, b) => { return parseInt(a.index, 10) - parseInt(b.index, 10) }).map((account) => {
      return (
        <div className={Styles.AccountCard} key={`account-card-${account.index}`}>
          <div className={Styles.AccountAddressAndIndex}>
            <div className={Styles.RowItem}>
              <div className={Styles.AccountAddress}>
                <div className={Styles.Label}>
                  ADDRESS
                </div>
                <div className={Styles.Value}>
                  {account.address}
                </div>
              </div>
            </div>
            <div className={Styles.RowItem}>
              <div className={Styles.AccountIndex}>
                <div className={Styles.Label}>
                  INDEX
                </div>
                <div className={Styles.Value}>
                  {account.index}
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.AccountPrivateKey}>
            <div className={Styles.Label}>
              PRIVATE KEY
            </div>
            <div className={Styles.Value}>
              0x{account.privateKey}
            </div>
          </div>
          <div className={Styles.AccountNonceAndBalance}>
            <div className={Styles.RowItem}>
              <div className={Styles.Label}>
                BALANCE
              </div>
              <div className={Styles.Value}>
                {account.balance} WEI
              </div>
            </div>
            <div className={Styles.RowItem}>
              <div className={Styles.Label}>
                NONCE
              </div>
              <div className={Styles.Value}>
                {account.nonce}
              </div>
            </div>
          </div>
          <div className={Styles.AccountState}>
            { account.isUnlocked ? '🔓' : '🔐' }
          </div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className={Styles.AccountList}>
        {this._renderAccounts(this.props.accounts)}
      </div>
    )
  }
}
