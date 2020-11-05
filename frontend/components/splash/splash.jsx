import React from 'react';
import HomeFeed from './home_feed';
import HomePage from './home_page';

export default class Splash extends React.Component {

    render(){
        return (this.props.currentUser ? <HomeFeed /> : <HomePage />);
    }
}