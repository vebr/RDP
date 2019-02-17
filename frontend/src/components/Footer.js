import React , { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <footer className="fixed-bottom text-center bg-dark footer mt-auto py-3">
                <div className="container">
                    <span className="text-muted">This is footer</span>
                </div>
            </footer>
        )
    }
}

export default Footer;