import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChannelForm extends Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault()
		const node = this.refs.channel;
		const channelName = node.value
		node.value = ''
		return this.props.addChannel(channelName)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					ref="channel"
				/>
			</form>
		)
	}
}

ChannelForm.propTypes = {
	addChannel: PropTypes.func.isRequired
}

export default ChannelForm
