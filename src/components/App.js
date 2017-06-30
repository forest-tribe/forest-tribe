import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import store from '../store'
import { fetchProducts } from '../actions/product'
import { fetchTags } from '../actions/tag'
import { fetchPosts } from '../actions/wordpress'
// import { subscribeUser } from '../actions/subscription'


class App extends Component {

  componentDidMount () {
    store.dispatch(fetchProducts())
    .then(() => store.dispatch(fetchTags()))
    .then(() => store.dispatch(fetchPosts()))
    // .then(() => store.dispatch(subscribeUser()))
    .then(() => { console.log(store.getState()); this.setState(store.getState()) })
    .catch(err => console.log(err))
  }

  render() {
    return (
        <div className="App">
          <Navbar location={this.props.location} />
          {React.cloneElement(
            this.props.children,
            { ...this.props, ...this.state }
          )}
          <Footer />
        </div>
    );
  }
}

export default App;
