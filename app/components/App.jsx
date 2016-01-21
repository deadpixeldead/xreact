import React from 'react';
import CommentBox from './examples/comments/commentBox.jsx';

export default class App extends React.Component {
	render() {
		// here, we return a box of comments, who gets his
		// data from an api call.
		// goto the commentBox file to see how it progresses further.
		return (
			<CommentBox url="/api/comments.json" pollInterval={2000}/>
			);
	}
}
