import ErrorPage from './ErrorPage'
import FrozenHead from 'react-frozenhead'
import React from 'react'
import SupportStore from '../stores/SupportStore'
import { RouteHandler } from 'react-router'

export default class App extends React.Component {

  constructor() {
    this.state = SupportStore.getState()

    this._onChange = () => {
      this.setState(SupportStore.getState())
    }
  }

  componentDidMount() {
    SupportStore.listen(this._onChange)
  }

  componentDidUnmount() {
    SupportStore.unlisten(this._onChange)
  }

  render() {
    return <html lang="en" data-bootstrap={this.props.data}>
      <FrozenHead>

        <meta charSet="utf-8" />
        <meta property="og:url" content="http://file.pizza" />
        <meta property="og:title" content="FilePizza - Your files, delivered." />
        <meta property="og:description" content="Peer-to-peer file transfers in your web browser." />
        <meta property="og:image" content="http://file.pizza/images/fb.png" />
        <title>FilePizza - Send Files, Easily</title>

        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Quicksand:300,400,700" />
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Lobster+Two" />
        <link rel="stylesheet" href="/css" />

        <script src="/js" />

      </FrozenHead>

      <body>
        {this.state.isSupported
          ? <RouteHandler />
          : <ErrorPage />}
        <script>FilePizza()</script>
      </body>
    </html>
  }

}