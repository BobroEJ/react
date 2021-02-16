import React, {Component} from 'react';

import './post-status-filter.css'

class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all'
        }
        this.onFilterAll = this.onFilterAll.bind(this);
        this.onFilterLiked = this.onFilterLiked.bind(this);
    }

    onFilterAll(filter) {
        this.setState({
            filter: ''
        })
        this.props.onFilter('')
    }

    onFilterLiked(filter) {
        this.setState({
            filter: 'liked'
        })
        this.props.onFilter('like')
    }

    render() {
        return (
            <div className='btn-group'>
                <button 
                    className='btn btn-info'
                    onClick={this.onFilterAll}>Все</button>
                <button 
                    className='btn btn-outline-secondary'
                    onClick={this.onFilterLiked}>Понравилось</button>
            </div>
        )
    }
}

export default PostStatusFilter;