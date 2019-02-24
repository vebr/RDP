import React , { Component } from 'react';
import style from '../css/style.less';

class Footer extends Component {
    render() {
        return(
            <footer className="fixed-bottom text-center bg-dark footer mt-auto py-3">
                <div className={style.header}>
                    <span className="text-muted">This is footer</span>
                </div>
            </footer>
        )
    }
}

export default Footer;