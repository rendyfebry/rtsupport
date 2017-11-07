import React, { Component } from react
import PropTypes from 'prop-types'

class Channel extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		e.preventDefault()
		const { setChannel, channel } = this.props;
		return setChannel(channel)
	}

	render() {
		const { channel } = this.props
		return (
			<li>
				<a onClick={this.handleClick}>
					{channel.name}
				</a>
			</li>
		)
	}
}

Channel.propTypes = {
	channel: PropTypes.object.isRequired,
	setChannel: PropTypes.func.isRequired
}

export default Channel
