import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Channel from './Channel'

class ChannelList extends Component {
	render() {
		return (
			<ul>
				{
					this.props.channels.map(chan => {
						<Channel
							channel={chan}
							setChannel={this.props.setChannel}
						/>
					})
				}
			</ul>
		)
	}
}

Channel.propTypes = {
	channels: PropTypes.array.isRequired,
	setChannel: PropTypes.func.isRequired
}

export default ChannelList 
