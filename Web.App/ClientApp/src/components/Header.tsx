// tslint:disable:max-line-length

import * as React from 'react';
import { RootState } from '../store/RootState';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ErrorBoundary } from './ErrorBoundary';

interface HeaderProps {
}

interface HeaderState {
    isMenuOpen: boolean; 
}

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);

        this.state = {
            isMenuOpen: false
        };
    }

    toggleMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    get homeUrl() {
        return '/';
    }

    render() {
        return (
            <ErrorBoundary>
                <header>
                    <div>
                        <Link to="/"><button>Home</button></Link>
                        &nbsp;
                        <Link to="/counter"><button>Counter page</button></Link>
                        &nbsp;
                        <Link to="/users"><button>Users page</button></Link>
                    </div>
                    <div>
                        I'm a header
                    </div>
                    <hr/>
                </header>
            </ErrorBoundary>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
    };
};

export default connect(mapStateToProps)(Header);