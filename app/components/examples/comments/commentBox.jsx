import React from 'react';
import $ from 'jquery';
import CommentForm from './commentForm.jsx';
import CommentList from './commentList.jsx';

import styles from './comment.css';

export default class CommentBox extends React.Component {
	// getInitialState is called once, on init.
	state = {data: []};

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

	// this is called after first render.
	componentDidMount() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	}

	render() {
		return (
			<div className={styles.box}>
				<h1>Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm />
			</div>
			);
	}
}
