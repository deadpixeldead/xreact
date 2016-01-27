import React from 'react';
import $ from 'jquery';
import CommentForm from './commentForm.jsx';
import CommentList from './commentList.jsx';

export default class CommentBox extends React.Component {
	loadCommentsFromServer() {
		$.ajax({
			url: this.props.url,
			cache: false,
			success: data => {
				this.setState({data});
			},
			error: (xhr, status, err) => {
				console.log(this.props.url, status, err.toString());
			}
		});
	}
	handleCommentSubmit() {
		// TODO: submit to server & refresh list
	}
	state = {data: []};
	componentDidMount() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	}
	render() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm onSubmit={this.handleCommentSubmit}/>
			</div>
			);
	}
}
