import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from '../components/Login'
import Nav from '../components/Nav'
import QuestionList from '../components/QuestionList'
import LeaderboardList from '../components/LeaderboardList'
import NewQuestion from '../components/NewQuestion'
import QuestionDetail from '../components/QuestionDetail'
import NotFound from './NotFound'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { loading, isLoggedIn } = this.props

    return (
      <Router>
        <div>
          {loading === true ? null :
           isLoggedIn === false ? <Login /> :
            <div>
              <Nav />
              <Switch>
                <Route exact path='/' component={QuestionList} />
                <Route path='/questions/:question_id' component={QuestionDetail} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={LeaderboardList} />
                <Route path='*' component={NotFound} />
              </Switch>
            </div>
          }
        </div>
      </Router>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    loading: Object.entries(users).length === 0,
    isLoggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);