import React, { Component } from 'react';

export default class InfoApi extends Component {

    state = {
        loading: true,
        person: null
    }

    async componentDidMount() {
        const url = 'https://api.randomuser.me/'
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ person: data.results[0], loading: false })
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.person ? (
                    <span>Loading...</span>
                ) : (
                    <div className="person">
                        <img src={this.state.person.picture.medium} className="person-img"></img>
                        <p className="person-name">Nome: {this.state.person.name.first} {this.state.person.name.last}</p>
                        <p className="person-email">E-mail: {this.state.person.email}</p>
                    </div>
                )}
            </div>
        )
    }
}